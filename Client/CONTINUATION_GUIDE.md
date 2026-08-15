# LeadFlow Frontend - Continuation Guide

## 🎯 Where You Left Off

Your LeadFlow frontend has a **solid, production-quality foundation** with ~40% of pages complete.

## ✅ What's Already Built

### Core Infrastructure (100%)
- ✅ Next.js 16 + App Router
- ✅ TypeScript strict mode
- ✅ Tailwind CSS 4 + custom theme
- ✅ Light/Dark mode system
- ✅ TanStack Query setup
- ✅ Professional design system
- ✅ Mock data layer
- ✅ API abstraction layer
- ✅ Complete type definitions

### Working Pages (7 pages)
1. **/** - Landing page with hero, features, pricing preview
2. **/login** - Email, Google, Phone login options
3. **/signup** - Full registration with terms acceptance
4. **/dashboard** - KPI cards, AI banner, lead list, stats
5. **/leads** - Search, filters, lead cards with AI insights
6. **/leads/[id]** - Complete lead details with AI analysis
7. **/conversations** - Conversation list with search

### Components Ready
- All shadcn/ui components installed
- Custom theme switcher structure
- Loading skeletons
- Empty states
- Error boundaries structure
- Toast notifications configured

## 🚀 Development Server Running

```
Local:    http://localhost:3000
Network:  http://192.168.29.117:3000
```

**Status:** ✅ Running successfully

## 📋 Step-by-Step: Adding Your Next Page

Let's walk through adding the **Analytics page** as an example:

### Step 1: Create the Route

```bash
mkdir -p app/(dashboard)/analytics
touch app/(dashboard)/analytics/page.tsx
```

### Step 2: Add Mock Data

Edit `lib/mock/data.ts`:

```typescript
export const mockAnalytics = {
  leadVolume: [
    { month: 'Jan', leads: 45 },
    { month: 'Feb', leads: 52 },
    { month: 'Mar', leads: 61 },
    // ...
  ],
  conversionRate: 34,
  revenueRecovered: 184500,
  // ...
};
```

### Step 3: Create API Service

Create `lib/api/analytics.ts`:

```typescript
import { mockAnalytics } from '@/lib/mock/data';
import { delay } from './client';

export async function getAnalytics(organizationId: string) {
  await delay(300);
  return mockAnalytics;
}
```

### Step 4: Build the Page

Create `app/(dashboard)/analytics/page.tsx`:

```typescript
'use client';

import { useQuery } from '@tanstack/react-query';
import { getAnalytics } from '@/lib/api/analytics';
import { Card } from '@/components/ui/card';

export default function AnalyticsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ['analytics', 'org-1'],
    queryFn: () => getAnalytics('org-1'),
  });

  if (isLoading) {
    return <div>Loading skeleton...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
        Analytics
      </h1>
      {/* Your charts and stats here */}
    </div>
  );
}
```

### Step 5: Add Navigation (Already Done!)

The sidebar in `app/(dashboard)/layout.tsx` already has the Analytics link.

### Step 6: Test

Visit `http://localhost:3000/analytics` and see your page!

## 🎨 Design Patterns to Follow

### 1. Page Header Pattern

```typescript
<div className="p-6 space-y-6">
  <div>
    <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
      Page Title
    </h1>
    <p className="text-[var(--text-secondary)] mt-1">
      Page description
    </p>
  </div>
  {/* Page content */}
</div>
```

### 2. Card Pattern

```typescript
<Card className="p-6 border border-[var(--border-default)] bg-[var(--bg-surface)]">
  {/* Card content */}
</Card>
```

### 3. Loading Pattern

```typescript
if (isLoading) {
  return (
    <div className="p-6 space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-20 bg-[var(--bg-surface)] rounded-xl animate-pulse" />
      ))}
    </div>
  );
}
```

### 4. Empty State Pattern

```typescript
<Card className="p-12 text-center">
  <Icon className="h-12 w-12 text-[var(--text-muted)] mx-auto mb-4" />
  <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2">
    No data yet
  </h3>
  <p className="text-[var(--text-secondary)]">
    Description of empty state
  </p>
</Card>
```

### 5. Button Pattern

```typescript
<Button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white">
  Action
</Button>
```

## 📊 Priority Pages to Build Next

### High Priority (Do These First)

#### 1. WhatsApp Connection Page (/whatsapp)
**Why:** Core feature, users need to connect WhatsApp
**Complexity:** Medium
**Time:** 1-2 hours

```typescript
// Show connection status
// Connect button
// Phone number display
// Messages processed count
// Webhook status
// Development/Production toggle
```

#### 2. Follow-ups Page (/followups)
**Why:** Critical for lead management
**Complexity:** Medium
**Time:** 2-3 hours

```typescript
// Tabs: Scheduled, Sent, Failed, Cancelled
// Calendar view
// List view
// Schedule new follow-up button
// Edit/Cancel actions
```

#### 3. Bookings Page (/bookings)
**Why:** Track conversions
**Complexity:** Medium
**Time:** 2-3 hours

```typescript
// Tabs: Today, Upcoming, Completed, Cancelled
// Booking cards with status
// Customer info
// Service and amount
// Reschedule/Complete/Cancel actions
```

#### 4. Analytics Page (/analytics)
**Why:** Business insights
**Complexity:** High (charts)
**Time:** 3-4 hours

```typescript
// Use Recharts for graphs
// Lead volume chart
// Conversion trend
// Revenue recovery chart
// Service performance
```

#### 5. AI Insights Page (/ai)
**Why:** Core differentiator
**Complexity:** Medium
**Time:** 2-3 hours

```typescript
// Revenue opportunities section
// High-intent leads section
// Follow-up recommendations
// Conversation insights
// Action buttons per insight
```

### Medium Priority

#### 6. Pricing Page (/pricing)
**Why:** Marketing conversion
**Complexity:** Low
**Time:** 1-2 hours

#### 7. Settings Pages (/settings/*)
**Why:** User configuration
**Complexity:** Medium
**Time:** 4-6 hours total

- Business settings
- Team management
- AI settings
- Follow-up automation
- Notifications
- Security
- API keys

### Low Priority

#### 8. Marketing Pages
**Why:** SEO and education
**Complexity:** Low
**Time:** 1-2 hours each

- Product (/product)
- Features (/features)
- How It Works (/how-it-works)
- About (/about)
- Contact (/contact)

## 🛠️ Useful Commands

### Development
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Git
```bash
git status           # Check changes
git add .            # Stage all changes
git commit -m "Add analytics page"
git push             # Push to remote
```

## 💡 Pro Tips

### 1. Copy Existing Patterns
Don't reinvent the wheel. Look at `/app/(dashboard)/leads/page.tsx` and copy the pattern:
- Same structure
- Same styling
- Same data fetching
- Same loading states

### 2. Use the Theme System
Always use CSS variables:
```css
text-[var(--text-primary)]     // Primary text
text-[var(--text-secondary)]   // Secondary text
bg-[var(--bg-surface)]          // Surface background
border-[var(--border-default)]  // Default border
```

### 3. Mock Data First
Add mock data before building the UI. It helps you think through the data structure.

### 4. Loading States Are Not Optional
Every data-driven component needs:
- Loading skeleton
- Success state
- Empty state
- Error state (TODO for most pages)

### 5. Test in Dark Mode
After building a page, switch to dark mode and verify everything looks good.

### 6. Mobile First
Test on mobile viewport (375px) as you build. Don't wait until the end.

## 🔧 Common Patterns

### Data Fetching with TanStack Query

```typescript
const { data, isLoading, error } = useQuery({
  queryKey: ['resource', id],
  queryFn: () => getResource(id),
});
```

### Form Handling (When Needed)

```typescript
const [formData, setFormData] = useState({...});

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Handle submission
};
```

### Navigation

```typescript
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const router = useRouter();

// Declarative
<Link href="/path">Link</Link>

// Programmatic
router.push('/path');
```

### Toasts

```typescript
import { toast } from 'sonner';

toast.success('Success message');
toast.error('Error message');
toast.info('Info message');
toast.warning('Warning message');
```

## 📦 Adding New Dependencies

If you need a library:

```bash
npm install package-name
npm install -D @types/package-name  # If types needed
```

**Recommended libraries already installed:**
- Recharts (for charts)
- date-fns (for date handling)
- Zod (for validation)
- React Hook Form (for forms)

## 🐛 Debugging Tips

### 1. Check the Console
Browser console shows errors and warnings.

### 2. React Query Devtools
Open http://localhost:3000 and look for the React Query devtools button (bottom left).

### 3. Check Network Tab
See what data is being fetched (even though it's mocked).

### 4. TypeScript Errors
```bash
npm run build
```
Will show all TypeScript errors.

## 📝 Code Style Guidelines

### 1. Component Names
Use PascalCase: `LeadCard`, `DashboardStats`

### 2. File Names
- Pages: `page.tsx`
- Components: `lead-card.tsx` (kebab-case)
- Utils: `format-currency.ts`

### 3. Imports Order
```typescript
// 1. React
import { useState } from 'react';

// 2. External libraries
import { useQuery } from '@tanstack/react-query';

// 3. Internal - components
import { Button } from '@/components/ui/button';

// 4. Internal - utils
import { formatCurrency } from '@/lib/utils';

// 5. Internal - types
import type { Lead } from '@/types';

// 6. Relative imports
import { LeadCard } from './lead-card';
```

### 4. Spacing
Use 2 spaces for indentation (already configured).

## 🎯 Your Next Session Checklist

When you continue:

1. ✅ Pull latest changes: `git pull`
2. ✅ Install dependencies: `npm install`
3. ✅ Start dev server: `npm run dev`
4. ✅ Open http://localhost:3000
5. ✅ Pick a page from the priority list
6. ✅ Follow the step-by-step pattern
7. ✅ Test in light and dark mode
8. ✅ Test on mobile viewport
9. ✅ Commit: `git add . && git commit -m "Add X page"`
10. ✅ Push: `git push`

## 🚀 Estimated Time to Completion

Based on the patterns established:

- **Remaining pages:** ~20 pages
- **Time per page:** 1-3 hours average
- **Total time:** ~30-40 hours
- **At 4 hours/day:** ~10 days

You can also work incrementally - the app is usable with each new page you add!

## 📞 Need Help?

### File Locations
- **Components:** `/components/ui/`
- **Mock Data:** `/lib/mock/data.ts`
- **API Services:** `/lib/api/`
- **Types:** `/types/index.ts`
- **Constants:** `/lib/constants/`

### Documentation
- **Full README:** `/README.md`
- **Implementation Status:** `/IMPLEMENTATION_STATUS.md`
- **Quick Start:** `/QUICK_START.md`
- **This Guide:** `/CONTINUATION_GUIDE.md`

## 🎉 You're Ready!

The hard work (architecture, design system, patterns) is done. Now it's just repeating the pattern for each new page.

**Start with:** WhatsApp connection page (/whatsapp)
- High user value
- Medium complexity
- Good practice for the pattern

---

**Happy coding! 🚀**

Remember: You're building a professional product, not an AI demo. Keep it clean, consistent, and user-focused.
