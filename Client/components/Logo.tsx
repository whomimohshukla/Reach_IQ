import Link from 'next/link';

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div className={`${className} rounded-[var(--radius)] bg-[var(--color-primary)] flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/25`}>
      <svg viewBox="0 0 24 24" fill="none" className="h-[60%] w-[60%] text-white">
        <path 
          d="M12 2L2 7L12 12L22 7L12 2Z" 
          fill="currentColor" 
          fillOpacity="0.9"
        />
        <path 
          d="M2 17L12 22L22 17" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M2 12L12 17L22 12" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function LogoWithText({ href = "/", className = "" }: { href?: string; className?: string }) {
  return (
    <Link href={href} className={`flex items-center gap-3 group ${className}`}>
      <Logo className="h-10 w-10" />
      <div className="flex flex-col">
        <span className="text-xl font-bold text-foreground leading-none group-hover:text-primary transition-colors">
          LeadFlow
        </span>
        <span className="text-[9px] text-muted-foreground font-medium tracking-wider uppercase leading-none mt-1">
          Smart Lead Recovery
        </span>
      </div>
    </Link>
  );
}
