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
    title: "Aether Weather / premium weather app",
    description:
      "A modern, responsive weather application delivering clear real-time conditions, forecasts, location search, and practical weather awareness.",
    details: [
      "Developed a modern, responsive weather application focused on delivering clear and useful real-time weather information.",
      "Integrated weather APIs to display temperature, humidity, wind speed, precipitation, weather conditions, and forecast information.",
      "Implemented location-based weather search and dynamically updated weather data for a better user experience.",
      "Designed an interactive and visually appealing interface with responsive layouts and user-friendly navigation.",
      "Applied React, TypeScript, JavaScript, API integration, Git, and GitHub during development.",
      "Focused on practical problem-solving, clean component-based development, and creating a useful application for everyday weather awareness.",
    ],
    tags: ["React", "TypeScript", "REST APIs"],
    accent: "lime",
  },
];

const experiences = [
  {
    period: "CURRENT",
    role: "Diploma — 3rd Year",
    company: "A.A.N.M & V.V.R.S.R Polytechnic, Gudlavalleru",
    detail:
      "Currently pursuing a diploma while building hands-on projects across software development, AI, and modern web technologies.",
  },
  {
    period: "COMPLETED",
    role: "10th Standard",
    company: "Sri Chaitanya Techno School, Singarayakonda",
    detail:
      "Completed secondary education and continued developing a strong interest in technology and software creation.",
  },
];

const stack = [
  { label: "Languages", value: "C · Java · Python", icon: Code2 },
  { label: "Web", value: "HTML5 · CSS3 · JavaScript", icon: Server },
  { label: "Frontend", value: "React · TypeScript · Responsive UI", icon: Layers3 },
  { label: "AI & APIs", value: "Prompt Engineering · REST Integration", icon: Database },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPointer({ x: event.clientX, y: event.clientY });
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <header className="site-nav">
        <a className="brand-mark" href="#top" onClick={closeMenu} aria-label="Back to top">
          <span className="brand-glyph">⌘</span>
          <span>varunashwin<span className="brand-dot">.</span>dev</span>
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
            <p className="hero-kicker reveal-up delay-1">Diploma student · software development · AI & web technologies</p>
            <h1 id="hero-title" className="hero-title reveal-up delay-2">
              I build useful
              <span className="hero-title-accent"> technology that helps.</span>
            </h1>
            <p className="hero-intro reveal-up delay-3">
              I&apos;m Dvauluri Varun Ashwin Chowdary, a motivated and enthusiastic Diploma student with a strong interest in software development, artificial intelligence, and modern web technologies.
            </p>
            <div className="hero-facts reveal-up delay-3"><span><strong>Phone</strong> 7382419396</span><span><strong>Languages</strong> English · Telugu · Hindi</span></div>
            <div className="hero-actions reveal-up delay-4">
              <a className="button button-primary" href="#work">
                Explore selected work <ArrowDown size={17} />
              </a>
              <a className="text-link" href="#contact">
                Start a conversation <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-meta reveal-up delay-4">
              <span><MapPin size={15} /> Ramanadhapuram, Andhra Pradesh</span>
              <span className="meta-divider" />
              <span><Terminal size={15} /> React · TypeScript · JavaScript · Git · GitHub</span>
            </div>
          </div>

          <div
            className="hero-console reveal-up delay-2"
            aria-label="Developer profile summary"
            style={{
              transform: `perspective(900px) rotateY(${(pointer.x / window.innerWidth - 0.5) * 3}deg) rotateX(${(0.5 - pointer.y / window.innerHeight) * 3}deg)`,
            }}
          >
            <div className="console-topbar">
              <span className="console-dots"><i /><i /><i /></span>
              <span>~/profile/now.ts</span>
              <span className="console-lock">● live</span>
            </div>
            <div className="console-body">
              <div className="code-line code-comment">// a small snapshot of what I&apos;m building</div>
              <div className="code-line"><span className="code-keyword">const</span> <span className="code-name">developer</span> <span className="code-punctuation">=</span> <span className="code-bracket">&#123;</span></div>
              <div className="code-line code-indent"><span className="code-property">focus</span><span className="code-punctuation">:</span> <span className="code-string">&quot;software + AI + web&quot;</span><span className="code-punctuation">,</span></div>
              <div className="code-line code-indent"><span className="code-property">strength</span><span className="code-punctuation">:</span> <span className="code-string">&quot;practical problem-solving&quot;</span><span className="code-punctuation">,</span></div>
              <div className="code-line code-indent"><span className="code-property">default</span><span className="code-punctuation">:</span> <span className="code-string">&quot;learn quickly, build clearly&quot;</span><span className="code-punctuation">,</span></div>
              <div className="code-line"><span className="code-bracket">&#125;</span><span className="code-punctuation">;</span></div>
              <div className="console-divider" />
              <div className="console-output"><span className="prompt">$</span> <span>build --for-real-world-problems</span><span className="cursor" /></div>
              <div className="console-success"><Check size={14} /> ready to learn · ready to contribute</div>
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
            <h2 id="about-title">Learning quickly. Building practically.</h2>
          </div>
          <div className="about-grid">
            <div className="about-lede">
              <p className="large-copy">Motivated and enthusiastic Diploma student with a strong interest in software development, artificial intelligence, and modern web technologies.</p>
              <p>Hands-on experience building interactive web applications and AI-focused projects, with practical knowledge of React, TypeScript, JavaScript, APIs, Git, and GitHub. Skilled in prompt engineering, problem-solving, responsive UI development, API integration, and learning new tools quickly.</p>
              <p>Passionate about transforming real-world problems into practical, user-focused technology solutions and continuously improving technical knowledge through project-based learning.</p>
            </div>
            <div className="stack-card">
              <div className="stack-card-header"><span className="mini-label">CURRENT TOOLKIT</span><Braces size={18} /></div>
              <div className="stack-list">
                {stack.map((item) => {
                  const Icon = item.icon;
                  return <div className="stack-row" key={item.label}><span className="stack-icon"><Icon size={17} /></span><span><strong>{item.label}</strong><small>{item.value}</small></span><ArrowUpRight size={15} /></div>;
                })}
              </div>
              <div className="resume-notes">
                <div><span>TOOLS & TECHNOLOGIES</span><p>Visual Studio Code · GitHub · GitHub Copilot · React · TypeScript · Vite · REST APIs · AI Development Tools</p></div>
                <div><span>SOFT SKILLS</span><p>Communication · Leadership · Teamwork · Quick Learning · Problem Solving · Adaptability · Time Management</p></div>
                <div><span>CERTIFICATIONS</span><p>Generative AI – EduPyramids · Soft Skills – EduPyramids · Computer Hardware Basics – EduPyramids</p></div>
                <div><span>LANGUAGES</span><p>English – Primary · Telugu – Secondary · Hindi – Secondary</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading section-heading-row">
              <div><p className="section-index">02 / SELECTED WORK</p><h2 id="work-title">Aether Weather — a practical project.</h2></div>
            <span className="section-note">Selected project · 2024</span>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={`project-card accent-${project.accent}`} key={project.number} tabIndex={0}>
                <div className="project-card-top"><span className="project-number">{project.number}</span><ArrowUpRight size={20} /></div>
                <div className="project-visual" aria-hidden="true"><div className="visual-rings"><span /><span /><span /></div><div className="visual-code"><span>01</span><span>10</span><span>01</span><span>11</span><span>00</span><span>10</span></div></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.details && <ul className="project-details">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}
                <div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="work-footer"><span>Want the longer version?</span><a className="text-link" href="#contact">Ask me for a walkthrough <ArrowUpRight size={16} /></a></div>
        </section>

        <section className="section-pad experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading"><p className="section-index">03 / EXPERIENCE</p><h2 id="experience-title">Learning and building so far.</h2></div>
          <div className="experience-layout">
            <div className="experience-intro"><Sparkles size={23} /><p>To begin a career in software development, AI, or web technologies where I can apply my technical skills, contribute to meaningful projects, gain industry experience, and continuously grow as a technology professional.</p><a className="button button-secondary" href="/manus-storage/Dvauluri_Varun_Ashwin_Chowdary_Resume_09334a77.docx" download="Dvauluri_Varun_Ashwin_Chowdary_Resume.docx">Download exact résumé <Download size={16} /></a></div>
            <div className="timeline">
              {experiences.map((item) => <article className="timeline-item" key={item.period}><div className="timeline-marker"><span /></div><div className="timeline-period">{item.period}</div><div><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p className="timeline-detail">{item.detail}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="section-pad contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-panel">
            <div className="contact-copy"><p className="section-index">04 / CONTACT</p><h2 id="contact-title">Let&apos;s build something <span>useful.</span></h2><p>To begin a career in software development, AI, or web technologies where I can apply my technical skills, contribute to meaningful projects, gain industry experience, and continuously grow as a technology professional.</p><p className="declaration">I hereby declare that the information provided above is true and correct to the best of my knowledge and belief.</p></div>
            <div className="contact-actions"><a className="button button-primary button-large" href="mailto:varunashwin072@gmail.com">Say hello <Mail size={17} /></a><div className="social-links"><a href="tel:7382419396"><Mail size={17} /> 7382419396</a><a href="mailto:varunashwin072@gmail.com"><Mail size={17} /> varunashwin072@gmail.com</a><span className="social-link-item"><Linkedin size={17} /> LinkedIn: Varun Ashwin</span></div></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><span>© 2024 Dvauluri Varun Ashwin Chowdary. Built with intention.</span><span className="footer-status"><span className="status-dot" /> system status: learning and shipping</span><a className="footer-resume" href="/manus-storage/Dvauluri_Varun_Ashwin_Chowdary_Resume_09334a77.docx" download="Dvauluri_Varun_Ashwin_Chowdary_Resume.docx">Download résumé ↓</a><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}

export { GitBranch, ExternalLink };
