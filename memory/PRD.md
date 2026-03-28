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
### Phase 1 - Core Website
- **Homepage**: Hero, Logo Bar, Problem, Solution, How It Works (5 steps), Features Grid (8 capabilities), Trust Architecture, Why KEEPER comparison table, Coverage Map, Pricing Preview, Testimonial, Final CTA
- **How It Works Page**: 5-step journey, Remote Approval Model, Reporting Cycle
- **Services Page**: 8 service categories with detailed descriptions
- **Pricing Page**: 3 plans (Basic/Premium/Elite), one-time services, Enterprise section, FAQ
- **For NRIs Page**: NRI Reality stats, 4 common scenarios, benefits, country-specific messaging (6 countries)
- **Contact Page**: 3-step consultation form → MongoDB, sidebar with trust signals
- **FAQ Page**: 5 categories with search functionality, Shadcn Accordion
- **Demo Dashboard**: Interactive tabs (Overview, Alerts, Approvals), Recharts valuation chart, property health scores

### Phase 2 - Full Sitemap Expansion
- **About Us Page**: Founding story, Trust Philosophy, Operational Model triad, Values
- **Legal Support Page**: 6 legal services, Legal Philosophy, Important Disclaimers
- **City Response Network**: 4 active cities, team profiles, response protocols, expansion roadmap
- **Partner With Us Page**: 5 partner types, application form → MongoDB
- **Trust & Security Page**: 6 security sections, Infrastructure card

### Shared Components
- **Header**: Sticky nav with 7 links + gold CTA, mobile hamburger menu
- **Footer**: 4-column layout with all page links, social icons, contact email

### Contact Info
- Name: Amit Kumar Singh
- Mobile: +91 98922 17345
- Email: amit.singh@keeper.expert

### Backend Endpoints
- POST /api/consultations — Save consultation & partner requests
- GET /api/consultations — Retrieve consultations
- POST /api/newsletter — Subscribe to newsletter

## Prioritized Backlog

### P0 (Next Priority)
- Blog/Insights page with sample articles
- SEO meta tags and Open Graph data per page
- Contact form email notifications

### P1
- Blog article CRUD from admin panel
- Analytics integration (GA4, Mixpanel)
- A/B testing for CTAs
- Exit-intent popup for lead capture

### P2
- User authentication for client dashboard
- Real dashboard functionality (not just demo)
- Mobile app considerations
- Internationalization for multi-language support

## Next Action Items
1. Build Blog/Insights page with article cards and categories
2. Add SEO meta tags per page (react-helmet)
3. Implement email notifications for consultation form (SendGrid/Resend)
4. Add newsletter lead magnet (downloadable NRI property checklist)
5. Set up analytics tracking
