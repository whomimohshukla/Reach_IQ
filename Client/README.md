# LeadFlow - Frontend

**Tagline:** "Recover the leads you're already paying for."

A complete, production-quality frontend-only SaaS application for WhatsApp lead recovery and conversion.

## 🎯 Product Overview

LeadFlow helps B2B service businesses:
- Capture WhatsApp leads
- Understand conversations with AI
- Identify buying intent
- Score leads automatically
- Track inactive leads
- Recommend and schedule follow-ups
- Track bookings and conversions
- Calculate recovered revenue
- Provide business insights

## 🛠 Technology Stack

### Frontend (This Project)
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **State Management:** TanStack Query
- **Forms:** React Hook Form + Zod
- **Charts:** Recharts
- **Notifications:** Sonner

### Backend (Separate - To Be Built)
The frontend is designed to connect to a separate backend with:
- Node.js
- Express
- TypeScript
- PostgreSQL
- Prisma
- Redis
- BullMQ
- Kafka
- LangChain.js
- LangGraph.js
- pgvector
- OpenAI / Anthropic / Gemini / Ollama
- Docker
- AWS
- GitHub Actions
- OpenTelemetry
- Prometheus
- Grafana

**This frontend does NOT implement any backend. It uses mock data only.**

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── (marketing)/         # Public marketing pages
│   │   ├── page.tsx         # Landing page
│   │   ├── product/
│   │   ├── features/
│   │   ├── pricing/
│   │   ├── how-it-works/
│   │   ├── about/
│   │   └── contact/
│   ├── (auth)/              # Authentication pages
│   │   ├── login/
│   │   ├── signup/
│   │   ├── forgot-password/
│   │   ├── reset-password/
│   │   └── verify-phone/
│   └── (dashboard)/         # Protected dashboard
│       ├── dashboard/
│       ├── leads/
│       ├── conversations/
│       ├── followups/
│       ├── bookings/
│       ├── analytics/
│       ├── ai/
│       ├── whatsapp/
│       └── settings/
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── layout/             # Layout components
│   ├── navigation/         # Navigation components
│   ├── forms/              # Form components
│   └── charts/             # Chart components
├── features/               # Feature-specific components
│   ├── auth/
│   ├── leads/
│   ├── conversations/
│   └── analytics/
├── lib/
│   ├── api/                # API service layer
│   ├── mock/               # Mock data
│   ├── constants/          # Constants
│   └── utils/              # Utilities
├── hooks/                  # Custom React hooks
├── types/                  # TypeScript types
└── providers/              # Context providers
```

## 🎨 Design System

### Brand Colors
- **Primary:** #467235 (Professional Green)
- **Primary Hover:** #365A29
- **Primary Dark:** #29451F
- **Primary Soft:** #EEF4EA

### Light Mode
- **Background:** #F8FAF7
- **Surface:** #FFFFFF
- **Text Primary:** #172014
- **Text Secondary:** #64705F
- **Border:** #E2E8DF

### Dark Mode
- **Background:** #0E120C
- **Surface:** #192118
- **Text Primary:** #F3F7F0
- **Text Secondary:** #AAB5A5
- **Border:** #2C3828

### Typography
- **Font:** Inter
- **Page Title:** 28-32px
- **Section Title:** 18-20px
- **Body:** 14-16px

### Spacing
- Based on 4px/8px system
- Common values: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64

### Border Radius
- **Default:** 8px
- **Cards:** 10-12px
- **Dialogs:** 12-16px

### Shadows
- **Small:** `0 1px 2px rgba(0,0,0,.04)`
- **Medium:** `0 4px 12px rgba(0,0,0,.06)`
- **Large:** `0 12px 30px rgba(0,0,0,.08)`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file:

```env
# Future backend API URL
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
```

## 📡 API Integration

### Current State: Mock Data

All API calls currently return mock data from `/lib/mock/data.ts`.

Example:
```typescript
// lib/api/leads.ts
export async function getLeads(params: GetLeadsParams) {
  await delay(300); // Simulate network
  return mockLeads; // Return mock data
}
```

### Future State: Real Backend

To connect to the real Node.js/Express backend:

1. Update `/lib/api/client.ts` with actual HTTP calls:

```typescript
export const apiClient = {
  get: async <T>(endpoint: string): Promise<T> => {
    const res = await fetch(`${API_CONFIG.baseURL}${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${getToken()}`,
      },
    });
    if (!res.ok) throw new APIError(res.status, await res.text());
    return res.json();
  },
  // ... other methods
};
```

2. Replace mock implementations in `/lib/api/*.ts`:

```typescript
// Before (Mock)
export async function getLeads(params: GetLeadsParams) {
  await delay(300);
  return mockLeads;
}

// After (Real API)
export async function getLeads(params: GetLeadsParams) {
  return apiClient.get<GetLeadsResponse>('/leads');
}
```

3. The UI components don't need to change. They use TanStack Query:

```typescript
// This works with both mock and real APIs
const { data, isLoading } = useQuery({
  queryKey: ['leads', organizationId],
  queryFn: () => getLeads({ organizationId }),
});
```

## 🎭 Mock Data

### Organizations
- ABC Cooling Services
- CoolAir Services

### Sample Customers
- Rahul Sharma
- Priya Verma
- Amit Kumar
- Ravi Singh
- Neha Gupta
- Ankit Gupta
- Sneha Kapoor

### Sample Services
- AC Repair
- AC Service
- Installation
- Gas Refill
- Maintenance

## 🔐 Authentication

Currently uses **mock authentication**.

### Supported Auth Methods
1. Email + Password
2. Phone + OTP
3. Google OAuth (UI only)

### User Roles
- **OWNER:** All permissions
- **ADMIN:** Most permissions
- **MANAGER:** Leads, conversations, analytics, bookings
- **AGENT:** Leads, conversations, follow-ups
- **VIEWER:** Read-only

## 🎨 Theme System

Complete light/dark mode support:

```typescript
import { useTheme } from '@/providers/theme-provider';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  
  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
}
```

## 📱 Responsive Design

- **Mobile-first approach**
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized tables → cards on mobile
- Bottom navigation on mobile

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus states
- Screen reader support
- Color contrast compliance
- Reduced motion support

## 🧪 Development

### Adding a New Page

1. Create route in `app/` directory
2. Build components in `components/` or `features/`
3. Add API functions in `lib/api/`
4. Add types in `types/`
5. Use TanStack Query for data fetching

### Adding Mock Data

1. Add data to `lib/mock/data.ts`
2. Create API function in `lib/api/*.ts`
3. Use in component with `useQuery`

## 📦 Key Dependencies

```json
{
  "next": "16.3.1",
  "react": "19.2.8",
  "@tanstack/react-query": "^5.101.4",
  "react-hook-form": "^7.85.0",
  "zod": "^4.4.3",
  "recharts": "^3.10.1",
  "lucide-react": "^1.31.0",
  "sonner": "^2.0.8"
}
```

## 🚫 What This Project Does NOT Include

- ❌ Backend implementation
- ❌ Database
- ❌ Real authentication
- ❌ Real WhatsApp integration
- ❌ Real AI/LLM calls
- ❌ Payment processing
- ❌ Email sending
- ❌ SMS sending

All these will be implemented in the separate Node.js/Express backend.

## 🎯 Design Philosophy

### Professional, Not AI-Generated

**DO NOT use:**
- Neon AI effects
- Glowing purple interfaces
- Futuristic robot graphics
- AI brains
- Excessive gradients
- Generic AI dashboard templates
- Meaningless charts

**DO use:**
- Clean, professional design
- Purposeful data visualization
- Business-focused UX
- Clear information hierarchy

### Inspired By (NOT Copied)
- Stripe
- Linear
- Intercom
- Vercel
- Attio
- HubSpot

## 📊 Key Metrics

The product focuses on:

1. **Revenue Recovered** (Primary)
2. Leads recovered
3. Conversion rate
4. Follow-up rate
5. Potential revenue
6. Response time
7. Average lead value

## 🔄 Multi-Tenancy

- Organization-based data isolation
- Organization switcher in UI
- All data scoped to `organizationId`

## 📝 License

Proprietary - All Rights Reserved

## 🤝 Contributing

This is a private project. The frontend is complete and ready for backend integration.

## 📞 Support

For questions about connecting the backend, refer to the API integration section above.

---

**Built with ❤️ for service businesses losing leads every day.**
