import React from 'react'
import userData from '@/userData.json'
import { FaWhatsapp, FaGithub, FaLinkedin, FaMessage } from 'react-icons/fa6'
import styles from './contact.module.css'

const socials = [
  { icon: <FaWhatsapp />, link: userData.userProfile.contact.phone, label: 'Whatsapp', type:'phone' },
  { icon: <FaGithub />, link: userData.userProfile.contact.github, label: 'Github', type:'github' },
  { icon: <FaLinkedin />, link: userData.userProfile.contact.linkedin, label: 'Linkedin', type:'linkedin' },
]
export const ContactSocials = () => {
  
  return (
    <section className={styles.section_social}>
      <h3 className={styles.section_social_title}>Otras formas de contacto</h3>
      <article className={styles.section_social_list}>
        {
          socials.map(social => (
            <a key={social.link} className={styles.section_social_item} href={ social.type === 'phone' ? `https://api.whatsapp.com/send?phone=${social.link}&text=Hola%20${userData.userProfile.name}%20` : social.link} target="_blank" rel="noreferrer">
              {social.icon} {social.label}
            </a>
          ))
        }
      </article>

    </section>
  )
}
