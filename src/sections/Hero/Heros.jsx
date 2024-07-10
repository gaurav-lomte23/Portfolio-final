import styles from './HeroStyles.module.css';
import Hero from '../../assets/Heroani.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import { useThemeContext } from '../../common/ThemeContext';
 import Gaurav from '../../assets/GauravL-Resume.pdf';
 
function Heros() {
  const { theme, toggleTheme } = useThemeContext();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={Hero}
          className={styles.hero}
          alt="Profile picture of Gaurav Lomte"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}><b>
         Gaurav Lomte</b>
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://twitter.com/" target="blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Hello! I’m Gaurav, a passionate Developer with expertise in designing, developing, and deploying high-quality web applications. My journey in the tech world began with a fascination for solving complex problems.
        </p>
        < a href={Gaurav} download="GauravL-Resume.pdf">
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Heros;
