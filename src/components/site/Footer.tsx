export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between text-sm">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Barsa Priyadarshini Jena
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="mailto:hello@example.com"
            className="hover:underline underline-offset-4"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
