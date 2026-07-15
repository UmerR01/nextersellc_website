export default function FilterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M4 8h15M25 8h3M4 16h4M14 16h14M4 24h11M21 24h7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="22" cy="8" r="3.5" fill="white" stroke="currentColor" strokeWidth="3" />
      <circle cx="11" cy="16" r="3.5" fill="white" stroke="currentColor" strokeWidth="3" />
      <circle cx="18" cy="24" r="3.5" fill="white" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}
