# LeadFlow (Reach_IQ)

**Tagline:** "Recover the WhatsApp leads you're already paying for."

A comprehensive B2B SaaS platform for service businesses to capture, analyze, and convert WhatsApp leads using AI-powered insights and automation.

---

## 🎯 Product Overview

LeadFlow helps service businesses (AC services, plumbing, electrical, etc.) identify, follow up with, and convert inactive WhatsApp leads into customers.

### The Problem
- Customers inquire about services via WhatsApp
- Business responds with pricing/availability
- Customer says "I'll get back to you"
- Then: **SILENCE**
- Lead is forgotten and revenue is lost

### The Solution
LeadFlow automatically:
- ✅ Captures all WhatsApp conversations
- ✅ Analyzes buying intent with AI
- ✅ Scores and prioritizes leads
- ✅ Identifies inactive high-value leads
- ✅ Recommends follow-up actions
- ✅ Tracks conversions and recovered revenue

---

## 📁 Project Structure

```
LeadFlow/
├── Client/                    # Frontend (Next.js)
│   ├── app/
│   │   ├── (auth)/           # Authentication pages
│   │   ├── (dashboard)/      # Dashboard pages
│   │   ├── (marketing)/      # Marketing website
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Landing page
│   │   ├── not-found.tsx     # 404 page
│   │   └── error.tsx         # Error boundary
│   ├── components/
│   │   └── ui/               # shadcn/ui components
│   ├── lib/
│   │   ├── api/              # API client modules
│   │   ├── mock/             # Mock data
│   │   ├── constants/        # App constants
│   │   └── utils.ts          # Utilities
│   ├── types/                # TypeScript definitions
│   ├── providers/            # Context providers
│   └── public/               # Static assets
└── Server/                    # Backend (to be built separately)
```

---

## 🛠 Tech Stack

### Frontend (Current Implementation)
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui (Radix UI)
- **Icons:** Lucide React
- **State Management:** TanStack Query (React Query)
- **Forms:** React Hook Form + Zod validation
- **Charts:** Recharts
- **Animations:** Framer Motion
- **Theme:** Light/Dark mode with system preference

### Backend (Future - To be built separately)
The frontend is architected to connect to a future backend with:
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Cache:** Redis
- **Queue:** BullMQ
- **Streaming:** Kafka
- **AI:** LangChain.js, LangGraph.js
- **Vector DB:** pgvector
- **LLMs:** OpenAI / Anthropic / Gemini / Ollama
- **Containers:** Docker
- **Cloud:** AWS
- **CI/CD:** GitHub Actions
- **Monitoring:** OpenTelemetry, Prometheus, Grafana

---

## 🎨 Design System

### Brand Colors
```css
Primary: #467235 (Green)
Primary Hover: #365A29
Primary Dark: #29451F
Primary Soft: #EEF4EA

Success: #2E7D32
Warning: #B7791F
Danger: #C62828
Info: #2563EB

Neutral:
- White: #FFFFFF
- Background: #F8FAF7
- Light: #F1F5EF
- Border: #E2E8DF
- Muted: #CBD5C5
- Text: #64705F
- Dark: #33402F
- Darkest: #172014
```

### Design Principles
- **Professional, not AI-generated looking**
- No neon effects, glowing gradients, or futuristic visuals
- Subtle animations (150-300ms transitions)
- Consistent spacing (4px/8px system)
- Moderate border radius (8-12px)
- Professional shadows
- Accessible contrast ratios
- Support for light and dark modes

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/whomimohshukla/Reach_IQ.git
cd Reach_IQ/Client
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

---

## 📄 Complete Routes

### Public Routes
- `/` - Landing page
- `/features` - Features overview
- `/how-it-works` - Product workflow
- `/pricing` - Pricing plans
- `/contact` - Contact form

### Authentication Routes
- `/login` - Email/Google login
- `/signup` - Email signup
- `/verify-phone` - OTP verification
- `/forgot-password` - Password reset request
- `/reset-password` - Password reset form

### Dashboard Routes (Authenticated)
- `/dashboard` - Main dashboard
- `/leads` - All leads list
- `/leads/[id]` - Lead details
- `/conversations` - Conversations list
- `/conversations/[id]` - Conversation details
- `/followups` - Follow-ups management
- `/bookings` - Bookings list
- `/bookings/[id]` - Booking details
- `/analytics` - Analytics dashboard
- `/ai` - AI insights
- `/whatsapp` - WhatsApp connection
- `/settings` - Settings (profile, company, team, etc.)

### System Routes
- `/404` - Not found page
- `/error` - Error boundary

---

## 🎭 Features Implemented

### ✅ Core Features
- [x] Landing page with hero, features, CTA
- [x] Complete authentication flows (login, signup, OTP, password reset)
- [x] Dashboard with KPIs and charts
- [x] Lead management (list, details, filtering, search)
- [x] Conversation management with AI sidebar
- [x] Follow-up scheduling and management
- [x] Booking creation and tracking
- [x] Analytics with charts and metrics
- [x] AI insights and recommendations
- [x] WhatsApp connection management
- [x] Settings (profile, company, notifications, security, team)
- [x] Light/Dark theme with system preference
- [x] Responsive mobile and desktop layouts
- [x] 404 and error pages
- [x] Loading states and skeletons
- [x] Form validation with Zod

### ✅ Technical Implementation
- [x] Mock API layer with realistic data
- [x] Type-safe TypeScript throughout
- [x] API abstraction ready for backend connection
- [x] Multi-tenant architecture (organization switching)
- [x] Role-based access control (UI only)
- [x] Reusable shadcn/ui components
- [x] Professional design system
- [x] Accessibility features

---

## 🔌 API Architecture

All API modules are located in `lib/api/` and currently return mock data. Each module is structured to easily swap mock implementations with real backend calls.

### API Modules
```typescript
// Example structure
lib/api/
├── client.ts        // Base API client
├── auth.ts          // Authentication
├── leads.ts         // Lead management
├── conversations.ts // Conversations
├── followups.ts     // Follow-ups
├── bookings.ts      // Bookings
├── analytics.ts     // Analytics data
├── ai.ts            // AI insights
├── whatsapp.ts      // WhatsApp integration
└── dashboard.ts     // Dashboard stats
```

### Replacing Mock with Real API

**Current (Mock):**
```typescript
export async function getLeads(): Promise<Lead[]> {
  await delay();
  return mockLeads;
}
```

**Future (Real API):**
```typescript
export async function getLeads(): Promise<Lead[]> {
  const response = await fetch(`${API_CONFIG.baseURL}/leads`);
  return response.json();
}
```

The components don't need to change when you switch from mock to real APIs!

---

## 🎨 Theme System

LeadFlow supports three theme modes:
- **Light Mode** (default)
- **Dark Mode**
- **System** (follows OS preference)

Theme is persisted in localStorage and can be changed from Settings.

### Using Theme in Components
```typescript
import { useTheme } from '@/providers/theme-provider';

function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme('dark')}>
      Dark Mode
    </button>
  );
}
```

---

## 📊 Mock Data

Realistic mock data is provided in `lib/mock/data.ts`:
- 2 organizations
- 2 users with roles
- 7 customers (Indian names, phone numbers)
- 7 leads with scores and statuses
- Conversations and messages
- Follow-ups and bookings
- Dashboard statistics
- AI insights
- WhatsApp connection status

---

## 🔐 Environment Variables

Create `.env.local` in the Client directory:

```env
# API Configuration (for future backend)
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1

# Optional: Analytics, monitoring, etc.
# NEXT_PUBLIC_ANALYTICS_ID=
```

---

## 🤝 Multi-Tenancy

LeadFlow supports multiple organizations per user:
- Organization switcher in sidebar
- All data is scoped to current organization
- Easy switching between businesses
- Each organization has isolated leads, conversations, bookings

---

## 👥 Role-Based Access Control

Supported roles:
- **OWNER** - Full access
- **ADMIN** - Most permissions
- **MANAGER** - Leads, analytics, bookings
- **AGENT** - Leads, conversations, follow-ups
- **VIEWER** - Read-only access

UI elements are conditionally rendered based on role (backend enforcement required).

---

## 📱 Responsive Design

- **Desktop:** Full sidebar, multi-column layouts
- **Tablet:** Collapsible sidebar
- **Mobile:** Bottom navigation, single-column, drawer patterns

All pages are optimized for mobile-first experience.

---

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus states
- Screen reader support
- Color contrast compliance
- `prefers-reduced-motion` respected

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Build Output
```bash
npm run build
# Output: .next/ directory
```

---

## 🧪 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 📝 Code Quality

- **TypeScript:** Strict mode enabled
- **ESLint:** Next.js recommended rules
- **Formatting:** Consistent code style
- **Naming:** Clear, descriptive names
- **Components:** Small, focused, reusable
- **No `any` types** unless absolutely necessary

---

## 🔮 Future Backend Integration

When building the backend:

1. **API Endpoints** should match the structure in `lib/api/`:
   - `GET /api/v1/leads`
   - `POST /api/v1/leads`
   - `GET /api/v1/conversations`
   - etc.

2. **Authentication:** Implement JWT tokens
   - Store token in httpOnly cookies or localStorage
   - Add Authorization header to requests
   - Handle token refresh

3. **Real-time Updates:** Consider WebSockets or SSE for:
   - New messages
   - Lead updates
   - Notifications

4. **File Uploads:** Add avatar upload endpoints

5. **Environment Variables:**
   ```env
   DATABASE_URL=
   REDIS_URL=
   KAFKA_BROKERS=
   OPENAI_API_KEY=
   WHATSAPP_API_TOKEN=
   ```

---

## 📦 Key Dependencies

```json
{
  "next": "16.3.1",
  "react": "19.2.8",
  "typescript": "^5",
  "@tanstack/react-query": "^5.101.4",
  "react-hook-form": "^7.85.0",
  "zod": "^4.4.3",
  "recharts": "^3.10.1",
  "lucide-react": "^1.31.0",
  "tailwindcss": "^4",
  "framer-motion": "^13.1.0"
}
```

---

## 📄 License

MIT

---

## 👨‍💻 Author

Built as a production-ready frontend for LeadFlow - WhatsApp Lead Recovery Platform

---

## 🎯 Implementation Checklist

### Frontend (Current Status: ~95% Complete)
- [x] Next.js setup with App Router
- [x] TypeScript strict mode
- [x] Tailwind CSS + shadcn/ui
- [x] Theme system (light/dark/system)
- [x] Landing page
- [x] Marketing pages (features, how-it-works, contact)
- [x] Authentication pages (login, signup, OTP, password reset)
- [x] Dashboard with KPIs
- [x] Leads management
- [x] Lead details page
- [x] Conversations list
- [x] Conversation details with AI sidebar
- [x] Follow-ups management
- [x] Bookings management
- [x] Booking details
- [x] Analytics dashboard
- [x] AI insights page
- [x] WhatsApp connection
- [x] Settings pages
- [x] 404 and error pages
- [x] Mock API layer
- [x] Complete API modules
- [x] Responsive design
- [x] Loading states
- [x] Form validation
- [x] Multi-tenancy UI
- [x] RBAC UI support

### Backend (To Be Built Separately)
- [ ] Node.js + Express setup
- [ ] PostgreSQL + Prisma
- [ ] Authentication (JWT)
- [ ] Lead management APIs
- [ ] Conversation APIs
- [ ] WhatsApp integration
- [ ] AI/LLM integration
- [ ] Real-time updates
- [ ] Background jobs (BullMQ)
- [ ] Event streaming (Kafka)
- [ ] Caching (Redis)
- [ ] Vector search (pgvector)
- [ ] Monitoring & logging

---

**The frontend is production-ready and waiting for your backend implementation!**
