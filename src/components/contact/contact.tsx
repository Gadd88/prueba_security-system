import React from 'react'
import { ContactSocials } from './contact-socials'
import { ContactForm } from './contact-form'
import styles from './contact.module.css'

export const ContactComponent = () => {
  return (
    <section className={styles.container_contact}>
        <section className={styles.section_contact}>
            <ContactForm />
            <ContactSocials />
        </section>
    </section>
  )
}
