import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">Barsa Priyadarshini Jena</Link>
        <nav className="flex gap-5 text-sm">
          <Link href="/work" className="hover:underline underline-offset-4">Work</Link>
          <Link href="/services" className="hover:underline underline-offset-4">Services</Link>
          <Link href="/about" className="hover:underline underline-offset-4">About</Link>
          <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
        </nav>
      </div>
    </header>
  );
}


