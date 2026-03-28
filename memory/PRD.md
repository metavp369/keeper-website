# KEEPER - NRI Property Protection Platform

## Problem Statement
Build a premium website for KEEPER — an NRI Property Protection Platform that operates at the intersection of legal-tech and proptech innovation. Target audience: NRIs in UAE, UK, USA, Canada, Singapore, Australia who own property in India.

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Shadcn UI + Framer Motion + Recharts
- **Backend**: FastAPI + MongoDB (Motor async driver)
- **Styling**: Dark theme with Navy (#0A192F), Gold (#F59E0B), Emerald (#10B981)
- **Fonts**: Outfit (headings), Manrope (body), Playfair Display (accents)

## User Personas
1. **NRI Property Owner** — Has 1-3 properties in India, lives abroad, worried about asset protection
2. **Family Office Manager** — Manages multiple properties for HNI families
3. **Partner Professional** — Lawyers, CAs, NRI advisors interested in partnership

## Core Requirements
- Marketing website with conversion optimization
- Multi-step consultation form with MongoDB persistence
- Newsletter signup
- Interactive demo dashboard (visual preview)
- Mobile responsive design
- SEO-optimized page structure

## What's Been Implemented (Dec 2025)
### Phase 1 - Core Website ✅
- **Homepage**: Hero, Logo Bar, Problem, Solution, How It Works (5 steps), Features Grid (8 capabilities), Trust Architecture, Why KEEPER comparison table, Coverage Map, Pricing Preview, Testimonial, Final CTA
- **How It Works Page**: 5-step journey, Remote Approval Model, Reporting Cycle
- **Services Page**: 8 service categories with detailed descriptions
- **Pricing Page**: 3 plans (Basic/Premium/Elite), one-time services, Enterprise section, FAQ
- **For NRIs Page**: NRI Reality stats, 4 common scenarios, benefits, country-specific messaging (6 countries)
- **Contact Page**: 3-step consultation form → MongoDB, sidebar with trust signals
- **FAQ Page**: 5 categories with search functionality, Shadcn Accordion
- **Demo Dashboard**: Interactive tabs (Overview, Alerts, Approvals), Recharts valuation chart, property health scores
- **Header**: Sticky nav with gold CTA, mobile hamburger menu
- **Footer**: 4-column layout with social links

### Backend Endpoints
- POST /api/consultations — Save consultation requests
- GET /api/consultations — Retrieve consultations
- POST /api/newsletter — Subscribe to newsletter

## Prioritized Backlog

### P0 (Next Priority)
- Blog/Insights page with CMS-like article management
- About Us page
- Legal Support page
- City Response Network page

### P1
- Trust & Security page
- Partner With Us page
- Contact form email notifications (SendGrid/Resend integration)
- SEO meta tags and schema markup

### P2
- User authentication for client dashboard
- Real dashboard functionality (not just demo)
- Blog article CRUD from admin panel
- Analytics integration (GA4, Mixpanel)
- A/B testing for CTAs
- Exit-intent popup for lead capture

## Next Action Items
1. Build remaining pages (About, Legal Support, City Network, Partner, Trust & Security)
2. Add email notifications for consultation form submissions
3. Implement blog/articles system with admin management
4. Add SEO meta tags and Open Graph data per page
5. Implement newsletter lead magnet (downloadable NRI property checklist)
