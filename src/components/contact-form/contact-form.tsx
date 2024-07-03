'use client'
import React from 'react'
import styles from './contact.module.css'

export const ContactForm = () => {

    const formRef = React.useRef<HTMLFormElement>(null)
  return (
    <form ref={formRef} className={styles.form}>
        <div className={styles.formGroup}>
            <label htmlFor="name">Nombre</label>
            <input type="text" name='name' id='name' className={styles.formInput}/>
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' className={styles.formInput}/>
        </div>
        <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje</label>
            <textarea name="message" id="message" className={styles.formTextArea}></textarea>
        </div>
        <div className={styles.formButtons}>
            <button className={styles.btnSubmit} type='submit'>Enviar</button>
            <button className={styles.btnReset} type='reset'>Borrar</button>
        </div>
    </form>
  )
}
