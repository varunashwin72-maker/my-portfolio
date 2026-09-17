import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  GitBranch,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Server,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    number: "01",
    title: "Signal / observability for teams",
    description:
      "A focused observability layer that turns noisy production data into calm, actionable signals for fast-moving product teams.",
    tags: ["TypeScript", "Node.js", "Postgres"],
    accent: "lime",
  },
  {
    number: "02",
    title: "Atlas / workflow orchestration",
    description:
      "A resilient workflow engine for long-running jobs, human approvals, and the unglamorous edge cases that make systems dependable.",
    tags: ["Go", "Redis", "Kubernetes"],
    accent: "blue",
  },
  {
    number: "03",
    title: "Foundry / design systems",
    description:
      "A shared component language that helped three product squads ship faster without losing craft, clarity, or accessibility.",
    tags: ["React", "Storybook", "A11y"],
    accent: "violet",
  },
];

const experiences = [
  {
    period: "2022 — now",
    role: "Senior Software Engineer",
    company: "Independent / product teams",
    detail:
      "Designing and shipping reliable product surfaces across the stack, from first API contract to the last thoughtful interaction.",
  },
  {
    period: "2019 — 2022",
    role: "Software Engineer",
    company: "Growth-stage technology company",
    detail:
      "Built core platform capabilities, raised the quality bar for frontend systems, and mentored engineers through complex launches.",
  },
  {
    period: "2016 — 2019",
    role: "Engineer / curious generalist",
    company: "Early-stage teams",
    detail:
      "Learned to work close to the problem: prototype quickly, listen carefully, and leave the system better than I found it.",
  },
];

const stack = [
  { label: "Frontend", value: "React · TypeScript · Next.js", icon: Code2 },
  { label: "Backend", value: "Node.js · Go · Python", icon: Server },
  { label: "Data", value: "Postgres · Redis · Event systems", icon: Database },
  { label: "Systems", value: "Cloud · Containers · CI/CD", icon: Layers3 },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sections = ["top", ...navItems.map((item) => item.href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -65%", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <div className="ambient-grid" aria-hidden="true" />
      <header className="site-nav">
        <a className="brand-mark" href="#top" onClick={closeMenu} aria-label="Back to top">
          <span className="brand-glyph">⌘</span>
          <span>yourname<span className="brand-dot">.</span>dev</span>
        </a>

        <button
          className="mobile-menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              className={activeSection === item.href.slice(1) ? "is-active" : ""}
              href={item.href}
              onClick={closeMenu}
            >
              <span className="nav-index">0{index + 1}</span>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section section-pad" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow reveal-up">
              <span className="status-dot" />
              <span>Available for thoughtful work</span>
            </div>
            <p className="hero-kicker reveal-up delay-1">Software engineer · systems thinker</p>
            <h1 id="hero-title" className="hero-title reveal-up delay-2">
              I build products
              <span className="hero-title-accent"> people can trust.</span>
            </h1>
            <p className="hero-intro reveal-up delay-3">
              I&apos;m Your Name, an engineer who enjoys turning ambiguous problems into clear, durable software — with a soft spot for sharp interfaces and resilient systems.
            </p>
            <div className="hero-actions reveal-up delay-4">
              <a className="button button-primary" href="#work">
                Explore selected work <ArrowDown size={17} />
              </a>
              <a className="text-link" href="#contact">
                Start a conversation <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-meta reveal-up delay-4">
              <span><MapPin size={15} /> Based in Bengaluru · working globally</span>
              <span className="meta-divider" />
              <span><Terminal size={15} /> Currently building what&apos;s next</span>
            </div>
          </div>

          <div className="hero-console reveal-up delay-2" aria-label="Developer profile summary">
            <div className="console-topbar">
              <span className="console-dots"><i /><i /><i /></span>
              <span>~/profile/now.ts</span>
              <span className="console-lock">● live</span>
            </div>
            <div className="console-body">
              <div className="code-line code-comment">// a small snapshot of how I work</div>
              <div className="code-line"><span className="code-keyword">const</span> <span className="code-name">engineer</span> <span className="code-punctuation">=</span> <span className="code-bracket">&#123;</span></div>
              <div className="code-line code-indent"><span className="code-property">focus</span><span className="code-punctuation">:</span> <span className="code-string">&quot;clarity over cleverness&quot;</span><span className="code-punctuation">,</span></div>
              <div className="code-line code-indent"><span className="code-property">strength</span><span className="code-punctuation">:</span> <span className="code-string">&quot;turning unknowns into systems&quot;</span><span className="code-punctuation">,</span></div>
              <div className="code-line code-indent"><span className="code-property">default</span><span className="code-punctuation">:</span> <span className="code-string">&quot;leave it better&quot;</span><span className="code-punctuation">,</span></div>
              <div className="code-line"><span className="code-bracket">&#125;</span><span className="code-punctuation">;</span></div>
              <div className="console-divider" />
              <div className="console-output"><span className="prompt">$</span> <span>ship --with-care</span><span className="cursor" /></div>
              <div className="console-success"><Check size={14} /> build ready · no shortcuts detected</div>
            </div>
            <div className="console-orbit orbit-one" />
            <div className="console-orbit orbit-two" />
          </div>
        </section>

        <section className="signal-strip" aria-label="Portfolio highlights">
          <div className="signal-item"><span className="signal-label">01</span><span>Product-minded</span></div>
          <div className="signal-line" />
          <div className="signal-item"><span className="signal-label">02</span><span>Systems-aware</span></div>
          <div className="signal-line" />
          <div className="signal-item"><span className="signal-label">03</span><span>Always learning</span></div>
          <div className="signal-line" />
          <div className="signal-item"><span className="signal-label">04</span><span>Human-first</span></div>
        </section>

        <section className="section-pad about-section" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="section-index">01 / ABOUT</p>
            <h2 id="about-title">Good software is a team sport.</h2>
          </div>
          <div className="about-grid">
            <div className="about-lede">
              <p className="large-copy">I like the part where a messy idea becomes a shared understanding — then a useful product.</p>
              <p>My best work lives at the intersection of product, design, and engineering. I ask a lot of questions, make complexity visible, and care about the details that make software feel calm to use.</p>
              <a className="text-link" href="#contact">More about my approach <ArrowUpRight size={16} /></a>
            </div>
            <div className="stack-card">
              <div className="stack-card-header"><span className="mini-label">CURRENT TOOLKIT</span><Braces size={18} /></div>
              <div className="stack-list">
                {stack.map((item) => {
                  const Icon = item.icon;
                  return <div className="stack-row" key={item.label}><span className="stack-icon"><Icon size={17} /></span><span><strong>{item.label}</strong><small>{item.value}</small></span><ArrowUpRight size={15} /></div>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading section-heading-row">
            <div><p className="section-index">02 / SELECTED WORK</p><h2 id="work-title">A few things I&apos;ve shipped.</h2></div>
            <span className="section-note">Selected projects · 2020—24</span>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card accent-${project.accent}`} key={project.number}>
                <div className="project-card-top"><span className="project-number">{project.number}</span><ArrowUpRight size={20} /></div>
                <div className="project-visual" aria-hidden="true"><div className="visual-rings"><span /><span /><span /></div><div className="visual-code"><span>01</span><span>10</span><span>01</span><span>11</span><span>00</span><span>10</span></div></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="work-footer"><span>Want the longer version?</span><a className="text-link" href="#contact">Ask me for a walkthrough <ArrowUpRight size={16} /></a></div>
        </section>

        <section className="section-pad experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading"><p className="section-index">03 / EXPERIENCE</p><h2 id="experience-title">The path so far.</h2></div>
          <div className="experience-layout">
            <div className="experience-intro"><Sparkles size={23} /><p>Every role has taught me a different way to make software useful. Here are the chapters that shaped how I work today.</p><a className="button button-secondary" href="#contact">Download résumé <Download size={16} /></a></div>
            <div className="timeline">
              {experiences.map((item) => <article className="timeline-item" key={item.period}><div className="timeline-marker"><span /></div><div className="timeline-period">{item.period}</div><div><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p className="timeline-detail">{item.detail}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="section-pad contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="contact-copy"><p className="section-index">04 / CONTACT</p><h2 id="contact-title">Let&apos;s make something <span>worth making.</span></h2><p>I&apos;m always open to a thoughtful conversation about a product, a tricky system, or a team that cares about the craft.</p></div>
            <div className="contact-actions"><a className="button button-primary button-large" href="mailto:hello@yourname.dev">Say hello <Mail size={17} /></a><div className="social-links"><a href="https://github.com/your-handle" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a><a href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><span>© 2024 Your Name. Built with intention.</span><span className="footer-status"><span className="status-dot" /> system status: quietly shipping</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}

export { GitBranch, ExternalLink };
