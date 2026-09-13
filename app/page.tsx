import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faDownload, faLightbulb, faPaperPlane, faRocket, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const projects = [
  {
    title: 'HabitPalo',
    subtitle: 'Gamified habit tracker',
    description: 'A modern habit tracker that makes consistency fun, without the guilt.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    tone: 'blue',
    icon: '↗',
  },
  {
    title: 'indieTools',
    subtitle: 'Everyday tools for builders',
    description: 'A collection of free, modern tools for indie hackers and developers.',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
    tone: 'coral',
    icon: '▦',
  },
  {
    title: 'Tracker',
    subtitle: 'Personal analytics',
    description: 'A simple and private way to track your progress over time.',
    tags: ['Next.js', 'Spring Boot', 'PostgreSQL'],
    tone: 'green',
    icon: '▥',
  },
];

const pillars = [
  { icon: faCode, title: 'Full-stack development', text: 'From backend systems to beautiful frontends.', tone: 'pink' },
  { icon: faGithub, title: 'Open source', text: 'Sharing tools and libraries with the community.', tone: 'green' },
  { icon: faLightbulb, title: 'Product builder', text: 'Indie projects that solve real problems.', tone: 'yellow' },
  { icon: faUsers, title: 'Always learning', text: 'Exploring new technologies and better ways to build.', tone: 'purple' },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Home">
          <span className="brand-mark">IE</span>
          <span>Imad Ennouaimi</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#open-source">Open Source</a>
          <a href="#experience">Experience</a>
          <a href="#blog">Blog</a>
        </nav>
        <a className="button button-dark compact" href="mailto:ennouaimimad@gmail.com">
          Let&apos;s talk <FontAwesomeIcon icon={faPaperPlane} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Software Engineer</div>
          <h1>
            Building useful<br />things for <span>real people.</span>
          </h1>
          <p>
            I&apos;m a full-stack developer who loves building scalable applications,
            open-source tools and products that make a positive impact.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">View my projects <FontAwesomeIcon icon={faArrowRight} /></a>
            <a className="button button-light" href="/Imad-Ennouaimi-CV.pdf" download><FontAwesomeIcon icon={faDownload} /> Download CV</a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <img className="hero-illustration" src="/hero-illustration.webp" alt="" />
        </div>
      </section>

      <section className="pillars" id="about">
        {pillars.map((pillar) => (
          <article className="pillar-card" key={pillar.title}>
            <div className={`pillar-icon ${pillar.tone}`}><FontAwesomeIcon icon={pillar.icon} /></div>
            <div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading-row">
          <div>
            <div className="eyebrow purple"><span /> Featured work</div>
            <h2>Selected projects</h2>
          </div>
          <a className="text-link" href="https://github.com/ennouaimi" target="_blank" rel="noreferrer">View all projects <FontAwesomeIcon icon={faArrowRight} /></a>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.title}>
              <div className={`project-icon ${project.tone}`}>{project.icon}</div>
              <div className="project-main">
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <a className="circle-link" href="https://github.com/ennouaimi" target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="opportunity" id="experience">
        <div className="rocket-badge"><FontAwesomeIcon icon={faRocket} /></div>
        <div>
          <h3>Open to new opportunities</h3>
          <p>I&apos;m currently looking for exciting opportunities to build and learn with great teams.</p>
        </div>
        <a className="button button-dark compact" href="mailto:ennouaimimad@gmail.com">Let&apos;s talk <FontAwesomeIcon icon={faPaperPlane} /></a>
      </section>

      <footer>
        <p>© 2026 Imad Ennouaimi. All rights reserved.</p>
        <div className="socials">
          <a href="https://github.com/ennouaimi" target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X"><FontAwesomeIcon icon={faXTwitter} /></a>
        </div>
      </footer>
    </main>
  );
}
