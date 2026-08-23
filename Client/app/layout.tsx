import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "LeadFlow — Smart WhatsApp Lead Recovery",
  description: "AI-powered lead management platform for service businesses. Analyze conversations, score leads automatically, and never miss a follow-up.",
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen antialiased">
        <Providers>
          {children}
          <ThemeToggle floating />
        </Providers>
      </body>
    </html>
  );
}
