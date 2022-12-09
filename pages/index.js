import styles from '../styles/Home.module.css';
import Nav from '../components/Nav/Nav';
import Hero from '../components/Sections/Hero';
import Skill from '../components/Sections/Skill';
import Project from '../components/Sections/Projects';

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <Hero />
      <Project />
    </div>
  );
}
