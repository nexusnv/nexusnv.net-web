const links = [
  {
    href: "https://github.com/nexusnv",
    label: "NexusNV on GitHub",
  },
  {
    href: "https://github.com/azaharizaman",
    label: "Azahari Zaman",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#16211f]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-between px-6 py-8 sm:px-10 lg:px-12">
        <nav className="flex items-center justify-between gap-6 text-sm font-medium text-[#39504b]">
          <a href="https://github.com/nexusnv" className="tracking-[0.22em]">
            NexusNV
          </a>
          <div className="flex items-center gap-4 sm:gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-[#0e1715]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="grid gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-[#7c5b32]">
              Organization placeholder
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] text-[#101917] sm:text-6xl lg:text-7xl">
              NexusNV is preparing its web presence.
            </h1>
          </div>

          <div className="max-w-xl text-lg leading-8 text-[#425b55]">
            <p>
              NexusNV is the GitHub organization for projects owned by Azahari
              Zaman. This site is a simple placeholder while the public web
              experience is being shaped.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/nexusnv"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-[#16211f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#263b36]"
              >
                View organization
              </a>
              <a
                href="https://github.com/azaharizaman"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-[#b6a98f] px-5 py-3 text-sm font-semibold text-[#16211f] transition hover:border-[#16211f]"
              >
                View owner profile
              </a>
            </div>
          </div>
        </div>

        <footer className="border-t border-[#d9ceb8] pt-6 text-sm text-[#62736f]">
          <p>Owned by Azahari Zaman. Built with Next.js.</p>
        </footer>
      </section>
    </main>
  );
}
