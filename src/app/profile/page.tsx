import { ProfileCard } from '@/components'
import React from 'react'
import userData from '@/userData.json'
import styles from './page.module.css'
export default async function Profile() {

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Mi Perfil</h1>
      <p className={styles.subtitle}>Bienvenido a la Landing Page realizada para la prueba técnica de Security & System</p>
      <section className={styles.section_profile}>
        <ProfileCard data={userData} />  
      </section>
    </main>
  )
}
