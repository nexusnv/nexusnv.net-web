const GITHUB_ORG_URL = "https://github.com/nexusnv";
const OWNER_URL = "https://github.com/azaharizaman";
const FOUNDER_SITE_URL = "https://azahari.me";
const CONTACT_EMAIL = "teamup@nexusnv.net";

interface NavLink {
  href: string;
  label: string;
  external?: boolean;
}

interface Stat {
  value: string;
  label: string;
  detail: string;
}

interface Capability {
  title: string;
  summary: string;
  signals: string[];
}

interface FeaturedRepo {
  name: string;
  href: string;
  language: string;
  summary: string;
  tags: string[];
}

interface EcosystemCluster {
  title: string;
  summary: string;
  examples: string[];
}

interface ContactLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: GITHUB_ORG_URL, label: "GitHub", external: true },
  { href: `mailto:${CONTACT_EMAIL}`, label: "Contact", external: true },
];

const stats: Stat[] = [
  {
    value: "189",
    label: "Public repos",
    detail: "Azahari's public GitHub profile",
  },
  {
    value: "15",
    label: "Public org repos",
    detail: "NexusNV organization footprint",
  },
  {
    value: "2009",
    label: "GitHub since",
    detail: "Long-running engineering practice",
  },
  {
    value: "MY",
    label: "Malaysia based",
    detail: "Kuching, Sarawak roots",
  },
];

const capabilities: Capability[] = [
  {
    title: "Data Pipelines",
    summary:
      "Integration work for collecting, moving, and shaping operational data across business systems, APIs, and field infrastructure.",
    signals: ["aggregation", "connectors", "reporting"],
  },
  {
    title: "ERP Systems",
    summary:
      "Modular business systems with domain packages for finance, inventory, workflow, compliance, people, and operations.",
    signals: ["Laravel", "Atomy", "domain packages"],
  },
  {
    title: "IoT And Edge",
    summary:
      "Practical infrastructure experiments around ChirpStack, LoRaWAN, Kubernetes, containers, and deployment automation.",
    signals: ["LoRaWAN", "Kubernetes", "containers"],
  },
  {
    title: "Platform Ops",
    summary:
      "DevOps foundations for self-hosted services, repeatable environments, infrastructure configuration, and delivery workflows.",
    signals: ["Docker", "ArgoCD", "self-hosting"],
  },
  {
    title: "AI And APIs",
    summary:
      "API-oriented tooling and experiments that connect modern AI services into PHP, TypeScript, and business application stacks.",
    signals: ["Hugging Face", "TypeScript", "automation"],
  },
];

const featuredRepos: FeaturedRepo[] = [
  {
    name: "cognify",
    href: "https://github.com/nexusnv/cognify",
    language: "TypeScript",
    summary:
      "Active NexusNV TypeScript work that points toward the next layer of product and automation experiments.",
    tags: ["active", "product", "TypeScript"],
  },
  {
    name: "nexusnv.net-web",
    href: "https://github.com/nexusnv/nexusnv.net-web",
    language: "TypeScript",
    summary:
      "The public website codebase, built as a small Next.js app and deployed as part of the NexusNV web presence.",
    tags: ["website", "Next.js", "public"],
  },
  {
    name: "containers",
    href: "https://github.com/nexusnv/containers",
    language: "Shell",
    summary:
      "Shared container tooling for common organization infrastructure and repeatable service packaging.",
    tags: ["Docker", "ops", "tooling"],
  },
  {
    name: "huggingface-php",
    href: "https://github.com/azaharizaman/huggingface-php",
    language: "PHP",
    summary:
      "A PHP implementation for the Hugging Face Hub API, connecting AI platform workflows into familiar PHP stacks.",
    tags: ["AI", "API", "PHP"],
  },
  {
    name: "atomy",
    href: "https://github.com/azaharizaman/atomy",
    language: "PHP",
    summary:
      "Nexus Atomy ERP monorepo, tying together the business-system direction behind the wider package ecosystem.",
    tags: ["ERP", "monorepo", "Laravel"],
  },
  {
    name: "nexus",
    href: "https://github.com/azaharizaman/nexus",
    language: "PHP",
    summary:
      "Laravel headless ERP backend work that anchors the Nexus business application architecture.",
    tags: ["headless ERP", "backend", "PHP"],
  },
];

const ecosystemClusters: EcosystemCluster[] = [
  {
    title: "ERP Domain Packages",
    summary:
      "Atomic packages for accounting, assets, backoffice, CRM, inventory, sales, procurement, HR, and warehouse operations.",
    examples: ["nexus-accounting", "nexus-crm", "nexus-warehouse"],
  },
  {
    title: "Finance And Compliance",
    summary:
      "Specialized building blocks for audit chains, AML, sanctions, tax, budget, treasury, and statutory reporting.",
    examples: ["nexus-audit", "nexus-aml-compliance", "nexus-tax"],
  },
  {
    title: "Platform Primitives",
    summary:
      "Reusable foundations for tenancy, settings, storage, workflow, sequencing, telemetry, and integration boundaries.",
    examples: ["nexus-tenant", "nexus-workflow", "nexus-connector"],
  },
  {
    title: "Operations Orchestration",
    summary:
      "Coordination packages for approvals, sales operations, compliance operations, sourcing, and tenant lifecycle flows.",
    examples: [
      "nexus-approval-operations",
      "nexus-sales-operations",
      "nexus-tenant-operations",
    ],
  },
  {
    title: "Web And CMS Tooling",
    summary:
      "OctoberCMS, WinterCMS, Laravel, Filament, and deployment experiments that reflect practical web delivery work.",
    examples: ["laravel-backoffice", "octopus-ai-plugin", "wn-laravel-excel-plugin"],
  },
];

const contactLinks: ContactLink[] = [
  { href: GITHUB_ORG_URL, label: "NexusNV GitHub" },
  { href: OWNER_URL, label: "Azahari on GitHub" },
  { href: FOUNDER_SITE_URL, label: "azahari.me" },
  { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL },
];

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
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

const NodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M8.6 7.4 15.4 16.6" />
    <path d="M9 6h6" />
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-text-primary">
      <div className="site-grid" aria-hidden="true" />

      <nav
        className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-xl"
        aria-label="Site navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a
            href="#top"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-text-primary"
            aria-label="NexusNV home"
          >
            <span className="brand-mark" aria-hidden="true">
              N
            </span>
            <span>NexusNV</span>
          </a>

          <div className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external && !link.href.startsWith("mailto:") ? "_blank" : undefined}
                rel={link.external && !link.href.startsWith("mailto:") ? "noreferrer" : undefined}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="top"
        className="relative min-h-dvh overflow-hidden px-5 pt-32 sm:px-8 lg:px-10"
        aria-label="NexusNV overview"
      >
        <div className="hero-signal" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-12 pb-20 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-center lg:pb-24">
          <div className="animate-fade-up max-w-4xl">
            <p className="eyebrow">Nexus Envision Sdn Bhd · Malaysia</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.04] tracking-normal text-text-primary sm:text-6xl lg:text-7xl">
              Practical data, ERP, and automation systems from Malaysia.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
              NexusNV is the company front door for a builder ecosystem spanning
              data pipelines, ERP domain packages, IoT infrastructure, DevOps
              automation, and API-driven product experiments.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={GITHUB_ORG_URL}
                target="_blank"
                rel="noreferrer"
                className="button-primary"
                aria-label="Explore NexusNV on GitHub"
              >
                Explore the org
                <ArrowIcon />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="button-secondary"
                aria-label="Email NexusNV"
              >
                Start a conversation
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div
            className="animate-fade-up panel relative min-h-[420px] overflow-hidden p-6"
            style={{ animationDelay: "120ms" }}
            aria-label="NexusNV system map"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(34,211,238,0.16),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(217,119,6,0.18),transparent_36%)]" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase text-cyan">
                  Operating Map
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-normal">
                  One company. Many reusable systems.
                </h2>
              </div>

              <div className="system-map mt-10">
                {["Data", "ERP", "IoT", "DevOps", "AI APIs"].map((node, index) => (
                  <div
                    key={node}
                    className="system-node"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <NodeIcon />
                    <span>{node}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 text-sm">
                <div className="metric-chip">
                  <span>Public proof</span>
                  <strong>GitHub-first</strong>
                </div>
                <div className="metric-chip">
                  <span>Core stack</span>
                  <strong>PHP · TS · Ops</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/80 bg-surface/45 py-6" aria-label="Proof points">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-panel">
              <p className="text-3xl font-bold text-accent">{stat.value}</p>
              <p className="mt-1 text-sm font-semibold text-text-primary">
                {stat.label}
              </p>
              <p className="mt-1 text-xs leading-5 text-text-muted">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section-shell" aria-labelledby="capabilities-title">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2 id="capabilities-title">Where the company work lands.</h2>
          <p>
            NexusNV sits at the point where business systems, infrastructure,
            and data movement need to become dependable operating software.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {capabilities.map((capability) => (
            <article key={capability.title} className="panel p-5">
              <h3 className="text-lg font-semibold tracking-normal text-text-primary">
                {capability.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {capability.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {capability.signals.map((signal) => (
                  <span key={signal} className="tag">
                    {signal}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section-shell pt-0" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="eyebrow">Featured Public Work</p>
          <h2 id="work-title">A public trail of systems being built.</h2>
          <p>
            The open repositories show a practical bias: package the domain,
            automate the platform, and keep the work inspectable.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.href}
              target="_blank"
              rel="noreferrer"
              className="repo-card group"
              aria-label={`Open ${repo.name} repository`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase text-cyan">
                    {repo.language}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-normal text-text-primary group-hover:text-accent">
                    {repo.name}
                  </h3>
                </div>
                <span className="repo-arrow">
                  <ArrowIcon />
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-text-secondary">
                {repo.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {repo.tags.map((tag) => (
                  <span key={tag} className="tag tag-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="ecosystem" className="section-shell pt-0" aria-labelledby="ecosystem-title">
        <div className="section-heading">
          <p className="eyebrow">Builder Ecosystem</p>
          <h2 id="ecosystem-title">The lab behind the company story.</h2>
          <p>
            Azahari&apos;s public Nexus and Atomy work decomposes business software
            into focused packages that can be composed into larger systems.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="panel p-6 sm:p-8">
            <p className="eyebrow">Founder Signal</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-normal text-text-primary">
              DevOps + WebDev + Data Technologist.
            </h3>
            <p className="mt-5 leading-7 text-text-secondary">
              Azahari Zaman has been active on GitHub since 2009, with public
              work across Laravel, PHP packages, OctoberCMS and WinterCMS,
              TypeScript apps, Kubernetes-related infrastructure, and AI API
              integrations.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={OWNER_URL} target="_blank" rel="noreferrer" className="button-secondary">
                Founder GitHub
                <ArrowIcon />
              </a>
              <a href={FOUNDER_SITE_URL} target="_blank" rel="noreferrer" className="button-secondary">
                azahari.me
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {ecosystemClusters.map((cluster) => (
              <article key={cluster.title} className="panel p-5">
                <h3 className="text-lg font-semibold tracking-normal text-text-primary">
                  {cluster.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {cluster.summary}
                </p>
                <div className="mt-5 space-y-2">
                  {cluster.examples.map((example) => (
                    <p key={example} className="example-line">
                      {example}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0" aria-labelledby="company-title">
        <div className="panel-accent grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow">Nexus Envision Sdn Bhd</p>
            <h2
              id="company-title"
              className="mt-4 text-3xl font-semibold tracking-normal text-text-primary sm:text-4xl"
            >
              Your Data Pipeline Partner, with the code trail to back it up.
            </h2>
            <p className="mt-5 max-w-3xl leading-7 text-text-secondary">
              NexusNV brings together company delivery, open-source practice,
              and a growing package ecosystem for organizations that need
              software shaped around real operations.
            </p>
          </div>
          <div className="grid gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="contact-link"
              >
                <span>{link.label}</span>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border/80 px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} NexusNV / Nexus Envision Sdn Bhd.
          </p>
          <p>Built in the open with Next.js and public GitHub context.</p>
        </div>
      </footer>
    </main>
  );
}
