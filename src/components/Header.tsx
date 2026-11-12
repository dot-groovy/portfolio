import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-theme">
        <ThemeToggle />
      </div>
      <nav className="site-nav site-nav--stacked" aria-label="Main">
        <Link href="/">portfolio.</Link>
        <Link href="/about">about.</Link>
      </nav>
    </header>
  );
}
