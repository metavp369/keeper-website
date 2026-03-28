from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

# Models
class ConsultationCreate(BaseModel):
    full_name: str
    email: str
    phone: str
    country: str
    property_cities: str
    property_type: str
    challenge: str
    preferred_time: Optional[str] = ""
    how_heard: Optional[str] = ""
    message: Optional[str] = ""

class Consultation(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    email: str
    phone: str
    country: str
    property_cities: str
    property_type: str
    challenge: str
    preferred_time: str = ""
    how_heard: str = ""
    message: str = ""
    status: str = "new"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class NewsletterCreate(BaseModel):
    email: str

class Newsletter(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    subscribed_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Routes
@api_router.get("/")
async def root():
    return {"message": "KEEPER API running"}

@api_router.post("/consultations", response_model=Consultation)
async def create_consultation(input_data: ConsultationCreate):
    consultation = Consultation(**input_data.model_dump())
    doc = consultation.model_dump()
    await db.consultations.insert_one(doc)
    doc.pop("_id", None)
    return consultation

@api_router.get("/consultations", response_model=List[Consultation])
async def get_consultations():
    results = await db.consultations.find({}, {"_id": 0}).to_list(1000)
    return results

@api_router.post("/newsletter", response_model=Newsletter)
async def subscribe_newsletter(input_data: NewsletterCreate):
    existing = await db.newsletter.find_one({"email": input_data.email}, {"_id": 0})
    if existing:
        return Newsletter(**existing)
    newsletter = Newsletter(**input_data.model_dump())
    doc = newsletter.model_dump()
    await db.newsletter.insert_one(doc)
    doc.pop("_id", None)
    return newsletter

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input_data: StatusCheckCreate):
    status_obj = StatusCheck(**input_data.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    doc.pop("_id", None)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check.get('timestamp'), str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
