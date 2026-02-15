import { ReactNode } from "react";

// Salesforce-inspired SVG icons
export const CloudIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 28c3.314 0 6-2.686 6-6s-2.686-6-6-6c-.168 0-.334.007-.498.02C36.29 11.178 31.614 8 26 8c-4.97 0-9.235 2.846-11.332 7H14c-4.418 0-8 3.582-8 8s3.582 8 8 8h24z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ShieldIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L6 12v12c0 11.11 7.68 21.5 18 24 10.32-2.5 18-12.89 18-24V12L24 4z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 24l5 5 10-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const PlugIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8v10M32 8v10M12 18h24v6a12 12 0 01-24 0v-6zM24 36v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const AnalyticsIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 38V22M16 38V14M26 38V26M36 38V10M46 38V18" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const IntegrationIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="38" cy="10" r="4" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="10" cy="38" r="4" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="38" cy="38" r="4" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M14 14l6 6M28 14l6-6M14 34l6-6M28 34l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const GearIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 30a6 6 0 100-12 6 6 0 000 12z" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M41 24a17 17 0 01-.3 3l4.2 3.3a1 1 0 01.2 1.3l-4 6.9a1 1 0 01-1.2.4l-5-2a13.3 13.3 0 01-5.2 3l-.7 5.3a1 1 0 01-1 .8h-8a1 1 0 01-1-.8l-.7-5.3a14 14 0 01-5.2-3l-5 2a1 1 0 01-1.2-.4l-4-6.9a1 1 0 01.2-1.3L7.3 27a17 17 0 010-6L3.1 17.7a1 1 0 01-.2-1.3l4-6.9a1 1 0 011.2-.4l5 2a13.3 13.3 0 015.2-3l.7-5.3a1 1 0 011-.8h8a1 1 0 011 .8l.7 5.3a14 14 0 015.2 3l5-2a1 1 0 011.2.4l4 6.9a1 1 0 01-.2 1.3L41 21a17 17 0 010 6z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface IconWrapperProps {
  children: ReactNode;
  className?: string;
}

export const IconWrapper = ({ children, className = "" }: IconWrapperProps) => (
  <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-primary/10 text-primary ${className}`}>
    {children}
  </div>
);
