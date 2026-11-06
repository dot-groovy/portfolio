import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * Cabeçalho do site. Navegação principal (portfolio / about) em coluna.
 */
export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-row">
        <ThemeToggle />
        <nav className="site-nav site-nav--stacked" aria-label="Main">
          <Link href="/">portfolio.</Link>
          <Link href="/about">about.</Link>
        </nav>
      </div>
    </header>
  );
}
