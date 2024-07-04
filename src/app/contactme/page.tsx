import { ContactForm } from "@/components";
import styles from './page.module.css'

export default function ContactMe(){
    return(
        <main className={styles.main}>
            <h1 className={styles.title}>Contactáme</h1>
            <p className={styles.subtitle}>Puedes escribirme y dejarme tu consulta utilizando el formulario</p>
            <section className={styles.section_form}>
                <ContactForm />
            </section>
        </main>
    )
}