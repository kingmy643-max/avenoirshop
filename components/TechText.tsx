export default function TechText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`tech-text ${className}`}>{children}</span>;
}
