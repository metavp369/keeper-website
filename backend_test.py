import requests
import sys
import json
from datetime import datetime

class KeeperAPITester:
    def __init__(self, base_url="https://nri-control-hub.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}" if endpoint else self.base_url
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            else:
                raise ValueError(f"Unsupported method: {method}")

            success = response.status_code == expected_status
            
            result = {
                "test": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": response.status_code,
                "success": success,
                "response_size": len(response.text) if response.text else 0
            }
            
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_json = response.json()
                    result["response_data"] = response_json
                    print(f"   Response: {json.dumps(response_json, indent=2)[:200]}...")
                except:
                    result["response_text"] = response.text[:100]
                    print(f"   Response: {response.text[:100]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                result["error_response"] = response.text[:200]

            self.results.append(result)
            return success, response.json() if success and response.text else {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout")
            self.results.append({
                "test": name,
                "method": method,
                "endpoint": endpoint,
                "success": False,
                "error": "Request timeout"
            })
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.results.append({
                "test": name,
                "method": method,
                "endpoint": endpoint,
                "success": False,
                "error": str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test("Root API Endpoint", "GET", "", 200)

    def test_consultation_submission(self):
        """Test consultation form submission"""
        test_data = {
            "full_name": "Test User",
            "email": "test@example.com",
            "phone": "+971501234567",
            "country": "UAE",
            "property_cities": "Delhi, Mumbai",
            "property_type": "Apartment",
            "challenge": "Preventive protection",
            "preferred_time": "Weekdays after 7 PM IST",
            "how_heard": "Testing",
            "message": "This is a test consultation request"
        }
        return self.run_test("Consultation Submission", "POST", "consultations", 200, test_data)

    def test_newsletter_subscription(self):
        """Test newsletter subscription"""
        test_data = {
            "email": f"test_{datetime.now().strftime('%H%M%S')}@example.com"
        }
        return self.run_test("Newsletter Subscription", "POST", "newsletter", 200, test_data)

    def test_get_consultations(self):
        """Test getting consultations (should work without auth for testing)"""
        return self.run_test("Get Consultations", "GET", "consultations", 200)

    def print_summary(self):
        """Print test summary"""
        print(f"\n" + "="*50)
        print(f"📊 BACKEND API TEST SUMMARY")
        print(f"="*50)
        print(f"Tests Run: {self.tests_run}")
        print(f"Tests Passed: {self.tests_passed}")
        print(f"Tests Failed: {self.tests_run - self.tests_passed}")
        print(f"Success Rate: {(self.tests_passed/self.tests_run*100):.1f}%" if self.tests_run > 0 else "0%")
        
        if self.tests_run - self.tests_passed > 0:
            print(f"\n❌ FAILED TESTS:")
            for result in self.results:
                if not result["success"]:
                    print(f"  - {result['test']}: {result.get('error', 'Status code mismatch')}")
        
        return self.tests_passed == self.tests_run

def main():
    print("🚀 Starting KEEPER Backend API Tests...")
    print("="*50)
    
    tester = KeeperAPITester()
    
    # Run all tests
    tests = [
        tester.test_root_endpoint,
        tester.test_consultation_submission,
        tester.test_newsletter_subscription,
        tester.test_get_consultations,
    ]
    
    for test in tests:
        try:
            test()
        except Exception as e:
            print(f"❌ Test failed with exception: {str(e)}")
    
    # Print summary
    all_passed = tester.print_summary()
    
    # Save results to file for reference
    with open('/app/backend_test_results.json', 'w') as f:
        json.dump({
            "timestamp": datetime.now().isoformat(),
            "tests_run": tester.tests_run,
            "tests_passed": tester.tests_passed,
            "success_rate": (tester.tests_passed/tester.tests_run*100) if tester.tests_run > 0 else 0,
            "results": tester.results
        }, f, indent=2)
    
    return 0 if all_passed else 1

if __name__ == "__main__":
    sys.exit(main())