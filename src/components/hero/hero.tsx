import React from 'react'
import styles from './hero.module.css'

const techStack = [
    { tech: 'Next.js' },
    { tech: 'CSS Modules' },
    { tech: 'Typescript' },
    { tech: 'React' },
]
export const Hero = () => {
  return (
    <section className={styles.hero}>
        <article className={styles.hero_top}>
            <h1 className={styles.hero_title}>Prueba Técnica Security & System</h1>
            <p className={styles.hero_subtitle}>Bienvenido a la Landing Page realizada para la prueba técnica de Security & System</p>
        </article>
        <article className={styles.hero_bottom}>
            <h3>Las Técnologias usadas en la prueba son:</h3>
            <ul className={styles.hero_tech_list}>
                {
                    techStack.map(tech => (
                        <li key={tech.tech} className={styles.hero_tech_item}>{tech.tech}</li>
                    ))
                }
            </ul>
        </article>
        
    </section>
  )
}
