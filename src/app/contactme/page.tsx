import { ContactForm, ContactSocials } from "@/components";
import styles from './page.module.css'

export default function ContactMe(){
    return(
        <main className={styles.main}>
            <h1 className={styles.title}>Contáctame</h1>
            <section className={styles.section_contact}>
                <ContactForm />
                <ContactSocials />
            </section>
        </main>
    )
}