const GITHUB_ORG_URL = "https://github.com/nexusnv";
const OWNER_URL = "https://github.com/azaharizaman";

interface NavLink {
  href: string;
  label: string;
}

interface Stat {
  value: string;
  label: string;
}

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const navLinks: NavLink[] = [
  { href: GITHUB_ORG_URL, label: "GitHub" },
  { href: OWNER_URL, label: "Owner Profile" },
];

const stats: Stat[] = [
  { value: "10+", label: "Projects" },
  { value: "300+", label: "Repositories" },
  { value: "1", label: "Organization" },
];

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Open Source",
    description:
      "Building entirely in the open. Every project is public, transparent, and free for the community to explore, fork, and contribute to.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "Exploring new ideas at the intersection of modern tools and thoughtful architecture. Pushing boundaries to build what comes next.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Quality",
    description:
      "Clean, maintainable, and well-tested code. Every project follows best practices with a focus on reliability and long-term sustainability.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="8 12 11 15 16 9" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Navigation */}
      <nav
        className="fixed top-0 right-0 left-0 z-50 glass"
        aria-label="Site navigation"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
          <a
            href={GITHUB_ORG_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="NexusNV GitHub organization (opens in new tab)"
            className="text-lg font-bold tracking-tight text-text-primary transition-colors hover:text-accent"
          >
            NexusNV
          </a>
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${link.label} (opens in new tab)`}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div
          className="bg-radial-gradient pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-6xl px-6 py-32 sm:px-10 lg:px-12">
          <div className="animate-fade-up max-w-3xl">
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
              Building the next generation of tools.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary sm:text-xl">
              NexusNV is a GitHub organization by{" "}
              <a
                href={OWNER_URL}
                target="_blank"
                rel="noreferrer"
                 aria-label="Azahari Zaman GitHub profile (opens in new tab)"
                className="font-medium text-accent transition-colors hover:text-accent-secondary"
              >
                Azahari Zaman
              </a>
              , dedicated to crafting open-source projects that push the
              boundaries of modern software.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={GITHUB_ORG_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Explore NexusNV on GitHub (opens in new tab)"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#b45309] hover:shadow-lg hover:shadow-accent/25"
              >
                Explore on GitHub
                <ArrowIcon />
              </a>
              <a
                href={OWNER_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="View Azahari Zaman GitHub profile (opens in new tab)"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-all hover:border-accent hover:text-accent"
              >
                View Owner Profile
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20" aria-label="Statistics">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
          <div
            className="animate-fade-up grid gap-4 sm:grid-cols-3"
            style={{ animationDelay: "0.15s" }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-xl p-8 text-center transition-all hover:border-accent/30 hover:-translate-y-0.5"
              >
                <p className="text-4xl font-bold text-accent sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-text-secondary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20" aria-label="What we do">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
          <div
            className="animate-fade-up mx-auto mb-16 max-w-2xl text-center"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
              What We Do
            </h2>
            <p className="mt-4 text-text-secondary">
              Principles that guide every project.
            </p>
          </div>
          <div
            className="animate-fade-up grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            style={{ animationDelay: "0.4s" }}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass group rounded-xl p-8 transition-all hover:border-accent/30 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-elevated text-accent transition-colors group-hover:bg-accent/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24" aria-label="Testimonial">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
          <div
            className="animate-fade-up mx-auto max-w-3xl"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="glass-accent relative rounded-2xl p-10 text-center sm:p-14">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-6 h-8 w-8 text-accent/30"
                aria-hidden="true"
              >
                <path d="M3 7.9c0-1.6 1.2-2.9 2.9-2.9h.6c1.6 0 2.9 1.3 2.9 2.9v4.1c0 3.5-2.4 6.4-5.5 7.1" />
                <path d="M14.5 7.9c0-1.6 1.2-2.9 2.9-2.9h.6c1.6 0 2.9 1.3 2.9 2.9v4.1c0 3.5-2.4 6.4-5.5 7.1" />
              </svg>
              <blockquote className="text-2xl font-medium leading-relaxed text-text-primary sm:text-3xl">
                &ldquo;Every line of code is a step toward something
                better.&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="font-semibold text-accent">Azahari Zaman</p>
                <p className="mt-1 text-sm text-text-muted">Founder, NexusNV</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border" aria-label="Site footer">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:px-10 lg:px-12">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} NexusNV. Built with Next.js.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={GITHUB_ORG_URL}
              target="_blank"
              rel="noreferrer"
               aria-label="NexusNV GitHub organization (opens in new tab)"
              className="text-sm text-text-muted transition-colors hover:text-accent"
            >
              GitHub Org
            </a>
            <a
              href={OWNER_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Azahari Zaman GitHub profile (opens in new tab)"
              className="text-sm text-text-muted transition-colors hover:text-accent"
            >
              Owner Profile
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
