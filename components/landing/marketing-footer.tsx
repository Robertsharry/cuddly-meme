import Link from "next/link";

export function MarketingFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 md:flex-row md:items-center md:px-8">
        <div className="flex items-center gap-3">
          <span className="text-base font-semibold tracking-tight text-foreground">
            Attest
          </span>
          <span className="text-sm text-fg-subtle">
            &copy; {year}
          </span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-fg-muted">
          <Link href="#pricing" className="hover:text-foreground">
            Pricing
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
