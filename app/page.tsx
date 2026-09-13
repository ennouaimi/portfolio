import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faDownload, faLightbulb, faPaperPlane, faRocket, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const projects = [
  { title: 'HabitPalo', kicker: 'PRODUCT', description: 'A guilt-free, gamified habit tracker built to make consistency feel rewarding.', tags: ['Next.js', 'TypeScript', 'Spring Boot'], icon: '✓', tone: 'peach' },
  { title: 'indieTools', kicker: 'OPEN SOURCE', description: 'A growing toolbox of useful utilities for developers and indie hackers.', tags: ['Next.js', 'Tailwind', 'Vercel'], icon: '{}', tone: 'mint' },
  { title: 'Tracker', kicker: 'ENGINEERING', description: 'A full-stack product focused on progress, analytics and a polished daily experience.', tags: ['React', 'Java', 'PostgreSQL'], icon: '↗', tone: 'lilac' },
];

const strengths = [
  { icon: faCode, title: 'Full-stack', text: 'Backend systems and polished interfaces.', tone: 'peach' },
  { icon: faLightbulb, title: 'Product-minded', text: 'I build around real user problems.', tone: 'yellow' },
  { icon: faGithub, title: 'Open source', text: 'Useful tools, experiments and learning.', tone: 'mint' },
  { icon: faUsers, title: 'Team player', text: 'Design, review, ship, improve, repeat.', tone: 'lilac' },
];

export default function Home() {
  return (
    <main>
      <nav className="nav-wrap">
        <a className="brand" href="#top"><span className="brand-mark">IE</span><span>Imad Ennouaimi</span></a>
        <div className="nav-links"><a href="#projects">Projects</a><a href="#about">About</a><a href="#experience">Experience</a></div>
        <a className="nav-cta" href="mailto:ennouaimimad@gmail.com">Let&apos;s talk <FontAwesomeIcon icon={faPaperPlane} /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="pill">● SOFTWARE ENGINEER</div>
            <h1>I build <span>useful things</span><br />for real people.</h1>
            <p>Full-stack engineer building scalable applications, developer tools and products with a strong focus on experience.</p>
            <div className="hero-actions">
              <a className="primary-btn" href="#projects">See my work <FontAwesomeIcon icon={faArrowRight} /></a>
              <a className="secondary-btn" href="/Imad-Ennouaimi-CV.pdf" download><FontAwesomeIcon icon={faDownload} /> Download CV</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-card">
              <Image src="/hero-illustration.webp" alt="Developer building software" fill priority sizes="(max-width: 900px) 92vw, 46vw" />
            </div>
            <span className="spark spark-a">✦</span><span className="spark spark-b">✦</span>
          </div>
        </div>
      </section>

      <section className="strengths" id="about">
        {strengths.map((item) => <article className="strength-card" key={item.title}><div className={`strength-icon ${item.tone}`}><FontAwesomeIcon icon={item.icon} /></div><h3>{item.title}</h3><p>{item.text}</p></article>)}
      </section>

      <section className="section projects" id="projects">
        <div className="section-intro"><div><div className="pill purple">✦ SELECTED WORK</div><h2>Things I&apos;ve built</h2><p>Products and tools where engineering meets thoughtful user experience.</p></div><a href="https://github.com/ennouaimi" target="_blank" rel="noreferrer">All projects <FontAwesomeIcon icon={faArrowRight} /></a></div>
        <div className="project-grid">
          {projects.map((project) => <article className={`project-card ${project.tone}`} key={project.title}><div className="project-top"><span className="project-kicker">{project.kicker}</span><span className="project-icon">{project.icon}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="https://github.com/ennouaimi" target="_blank" rel="noreferrer">Explore project <FontAwesomeIcon icon={faArrowRight} /></a></article>)}
        </div>
      </section>

      <section className="section journey" id="experience">
        <div className="journey-copy"><div className="pill yellow">● HOW I WORK</div><h2>Build. Learn.<br /><span>Make it better.</span></h2><p>I enjoy taking ideas from a rough problem to something people can actually use — with clean engineering, iteration and attention to the small details.</p></div>
        <div className="journey-steps"><div><b>01</b><span><strong>Understand</strong>Start with the user and the problem.</span></div><div><b>02</b><span><strong>Build</strong>Ship simple, reliable foundations.</span></div><div><b>03</b><span><strong>Improve</strong>Measure, learn and iterate.</span></div></div>
      </section>

      <section className="cta-section"><div className="cta-icon"><FontAwesomeIcon icon={faRocket} /></div><div><span>HAVE SOMETHING IN MIND?</span><h2>Let&apos;s build something useful.</h2><p>I&apos;m always happy to talk about interesting products, engineering challenges and new opportunities.</p></div><a className="primary-btn" href="mailto:ennouaimimad@gmail.com">Get in touch <FontAwesomeIcon icon={faPaperPlane} /></a></section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">IE</span><span>Imad Ennouaimi</span></a><p>Building useful things for real people.</p><div><a href="https://github.com/ennouaimi" target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></div></footer>
    </main>
  );
}
