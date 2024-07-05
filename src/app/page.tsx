import { ContactComponent, Hero, ProfileCard } from "@/components";
import userData from '@/userData.json';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <section className={styles.aboutme}>
        <h2 className={styles.section_title}>Sobre mi</h2>
        <ProfileCard data={userData} />
      </section>
      <section className={styles.contact}>
        <h2 className={styles.section_title}>Contáctame</h2>
        <ContactComponent />
      </section>
    </main>
  );
}
