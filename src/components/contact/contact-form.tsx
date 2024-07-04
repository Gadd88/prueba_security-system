'use client'
import React from 'react'
import styles from './contact.module.css'
import { toast } from 'sonner'

export const ContactForm = () => {
    const formRef = React.useRef<HTMLFormElement>(null)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        const formData = new FormData(ev.target as HTMLFormElement)
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        }
        if(!data.name || !data.email || !data.message){
            return toast.error('Todos los campos son obligatorios')
        }
        if(!emailRegex.test(data.email as string)){
            return toast.error('Email invalido')
        }
        const sending = () => {
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 2000)
            })
        }
        toast.promise(sending, {
            loading: 'Enviando...',
            success: 'Mensaje enviado 👌'
        })
        setTimeout(()=>{
            formRef.current?.reset()
        }, 2000)
    }

  return (
        <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
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
