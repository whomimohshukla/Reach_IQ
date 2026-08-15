# ReachIQ - Quick Reference Guide

## 🎨 Design System Quick Reference

### Colors
```css
/* Primary */
--primary: #44A194          /* Teal */
--primary-hover: #3a8c81    /* Darker Teal */

/* Status Colors */
--error: #ef4444            /* Red */
--success: #10b981          /* Green */
--warning: #f59e0b          /* Orange */

/* Backgrounds */
--bg-page: #f9fafb          /* Gray 50 */
--bg-card: #ffffff          /* White */
--bg-input: #f9fafb         /* Gray 50 */

/* Borders */
--border: rgb(243 244 246)  /* Gray 100 */
--border-strong: rgb(229 231 235)  /* Gray 200 */
```

### Component Styles

#### Button (Primary)
```tsx
<Button className="bg-[#44A194] hover:bg-[#3a8c81] text-white h-12 px-6 shadow-lg shadow-[#44A194]/25 font-semibold">
  Button Text
</Button>
```

#### Button (Outline)
```tsx
<Button variant="outline" className="font-semibold h-12 px-6" style={{ border: '2px solid rgb(229 231 235)' }}>
  Button Text
</Button>
```

#### Card
```tsx
<Card className="p-8 bg-white" style={{ border: '1px solid rgb(243 244 246)' }}>
  Card Content
</Card>
```

#### Input
```tsx
<Input
  className="h-12 bg-gray-50 rounded-xl font-medium"
  style={{ border: '1px solid rgb(229 231 235)' }}
/>
```

#### Badge (Status)
```tsx
<Badge className="bg-[#44A194] text-white font-bold px-4 py-2">
  Status
</Badge>
```

### Loading States

#### Spinner Button
```tsx
<Button disabled={isLoading}>
  {isLoading ? (
    <>
      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
      Loading...
    </>
  ) : (
    'Click Me'
  )}
</Button>
```

#### Skeleton Card
```tsx
{isLoading ? (
  <div className="animate-pulse space-y-4">
    <div className="h-10 bg-gray-200 rounded-xl" />
    <div className="h-40 bg-gray-200 rounded-2xl" />
  </div>
) : (
  <ActualContent />
)}
```

### Error States

#### Error Card
```tsx
{error && (
  <Card className="p-8 max-w-md text-center bg-white">
    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
      <AlertCircle className="w-8 h-8 text-red-500" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">Error Title</h3>
    <p className="text-gray-600 mb-6">{error.message}</p>
    <Button onClick={retry}>Try Again</Button>
  </Card>
)}
```

#### Form Error
```tsx
{errors.field && (
  <div className="flex items-center gap-2 mt-2 text-red-600">
    <AlertCircle className="h-4 w-4" />
    <span className="text-sm font-medium">{errors.field}</span>
  </div>
)}
```

### Empty States

#### Empty State Card
```tsx
<Card className="p-16 bg-white text-center">
  <div className="h-20 w-20 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-6">
    <Icon className="h-10 w-10 text-gray-400" />
  </div>
  <h3 className="text-2xl font-bold text-gray-900 mb-3">
    No Items Found
  </h3>
  <p className="text-gray-600 mb-8 text-base">
    Description text here
  </p>
  <Button>Create New</Button>
</Card>
```

## 📁 File Locations

### Pages
```
app/(auth)/login/page.tsx
app/(auth)/signup/page.tsx
app/(dashboard)/dashboard/page.tsx
app/(dashboard)/leads/page.tsx
app/(dashboard)/leads/[id]/page.tsx
app/(dashboard)/conversations/page.tsx
app/(dashboard)/bookings/page.tsx
app/(dashboard)/followups/page.tsx
app/(dashboard)/analytics/page.tsx
app/(dashboard)/ai/page.tsx
app/(dashboard)/whatsapp/page.tsx
app/(dashboard)/settings/page.tsx
app/(marketing)/pricing/page.tsx
app/page.tsx (Homepage)
```

### Key Files
```
app/globals.css           # Global styles & design tokens
types/index.ts            # TypeScript type definitions
lib/mock/data.ts          # All mock data
lib/utils.ts              # Utility functions
lib/api/client.ts         # API client setup
```

## 🎯 Common Patterns

### Page Structure
```tsx
'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export default function MyPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['key'],
    queryFn: fetchData,
  });

  // Error State
  if (error) {
    return <ErrorCard error={error} />;
  }

  // Loading State
  if (isLoading) {
    return <SkeletonLoader />;
  }

  // Main Content
  return (
    <div className="p-8 space-y-8">
      <Header />
      <Stats />
      <DataList data={data} />
    </div>
  );
}
```

### Data Fetching
```tsx
const { data, isLoading, error } = useQuery({
  queryKey: ['leads', organizationId],
  queryFn: () => getLeads({ organizationId }),
});
```

### Form Handling
```tsx
const [formData, setFormData] = useState({ field: '' });
const [errors, setErrors] = useState({});
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!validate()) return;
  
  setIsLoading(true);
  try {
    await submitData(formData);
    toast.success('Success!');
  } catch (error) {
    toast.error('Failed');
  } finally {
    setIsLoading(false);
  }
};
```

## 🔧 Utility Functions

### Format Currency
```tsx
import { formatCurrency } from '@/lib/utils';

<div>{formatCurrency(2500)}</div>  // Output: ₹2,500
```

### Format Relative Time
```tsx
import { formatRelativeTime } from '@/lib/utils';

<div>{formatRelativeTime(date)}</div>  // Output: "2 hours ago"
```

### Get Lead Status Color
```tsx
import { getLeadStatusColor } from '@/lib/utils';

<Badge className={getLeadStatusColor(lead.status)}>
  {lead.status}
</Badge>
```

## 🎨 Icons

### Common Icons
```tsx
import {
  Loader2,        // Loading spinner
  AlertCircle,    // Error/Alert
  CheckCircle,    // Success
  XCircle,        // Close/Cancel
  Search,         // Search
  Filter,         // Filter
  Calendar,       // Date/Schedule
  Clock,          // Time
  Phone,          // Call
  MessageSquare,  // Message
  Mail,           // Email
  User,           // Profile
  Users,          // Team
  Settings,       // Settings
  Target,         // Goal/Target
  TrendingUp,     // Growth
  IndianRupee,    // Currency
  Flame,          // Hot/Urgent
  Sparkles,       // AI/Magic
  Eye,            // View/Show
  EyeOff,         // Hide
  ArrowRight,     // Navigate
  ArrowLeft,      // Back
  Plus,           // Add
  Minus,          // Remove
  Edit,           // Edit
  Trash,          // Delete
  Download,       // Export
  Upload,         // Import
} from 'lucide-react';
```

## 🌐 Navigation

### Dashboard Routes
- `/dashboard` - Main dashboard
- `/leads` - All leads
- `/leads/[id]` - Lead details
- `/conversations` - Conversations
- `/bookings` - Bookings
- `/followups` - Follow-ups
- `/analytics` - Analytics
- `/ai` - AI Insights
- `/whatsapp` - WhatsApp
- `/settings` - Settings

### Auth Routes
- `/login` - Login
- `/signup` - Signup

### Marketing Routes
- `/` - Homepage
- `/pricing` - Pricing

## 📊 Mock Data Access

```tsx
import {
  mockOrganizations,
  mockUsers,
  mockCustomers,
  mockLeads,
  mockMessages,
  mockConversations,
  mockBookings,
  mockFollowUps,
  mockDashboardStats,
  mockAIInsights,
  mockWhatsAppConnection,
  mockNotifications,
} from '@/lib/mock/data';
```

## 🎯 TypeScript Types

```tsx
import type {
  Organization,
  User,
  Customer,
  Lead,
  Message,
  Conversation,
  Booking,
  FollowUp,
  DashboardStats,
  AIInsight,
  WhatsAppConnection,
  Notification,
  LeadStatus,
  LeadSource,
  BookingStatus,
  FollowUpStatus,
  MessageStatus,
  WhatsAppConnectionStatus,
  UserRole,
} from '@/types';
```

## ⚡ Quick Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Type Check
npx tsc --noEmit

# Lint
npm run lint
```

## 🎨 Status Badge Colors

```tsx
// Lead Status
HOT: bg-red-500
WARM: bg-orange-500
COLD: bg-blue-500
FOLLOW_UP: bg-purple-500
CONVERTED: bg-green-500
LOST: bg-gray-500
NEW: bg-blue-500

// Booking Status
SCHEDULED: bg-blue-500
IN_PROGRESS: bg-orange-500
COMPLETED: bg-green-500
CANCELLED: bg-red-500
RESCHEDULED: bg-purple-500

// Priority
HIGH: bg-red-500
MEDIUM: bg-orange-500
LOW: bg-blue-500
```

## 📱 Responsive Breakpoints

```css
sm: 640px    /* Tablets */
md: 768px    /* Small laptops */
lg: 1024px   /* Laptops */
xl: 1280px   /* Desktops */
2xl: 1536px  /* Large screens */
```

## 🎯 Animation Classes

```css
animate-pulse      /* Pulsing effect */
animate-spin       /* Spinning (loading) */
animate-bounce     /* Bouncing */
transition-all     /* Smooth transitions */
hover:scale-105    /* Zoom on hover */
hover:shadow-xl    /* Shadow on hover */
```

---

**Quick Tip**: Use Cmd/Ctrl + F to search for specific patterns in this guide!
