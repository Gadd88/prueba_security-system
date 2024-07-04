import Image from "next/image";
import styles from "./page.module.css";
import { ContactForm, ProfileCard } from "@/components";
import userData from '@/userData.json'
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ProfileCard data={userData} />
      {/* <ContactForm /> */}
    </main>
  );
}
