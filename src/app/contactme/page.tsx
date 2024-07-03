import { ContactForm } from "@/components";

export default function ContactMe(){
    return(
        <main>
            <h1>Contactáme</h1>
            <p>Puedes escribirme y dejarme tu consulta utilizando el formulario</p>
            <section>
                <ContactForm />
            </section>
        </main>
    )
}