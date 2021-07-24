import React from 'react'
import ContactForm from '../../Components/Form/ContactForm'
import "./Contact.css"
import ContactInfo from '../../Components/ContactInfo/ContactInfo'

const Contact = () => {
    return (
        <div id="contactPage">
            <ContactForm />
            <ContactInfo />
        </div>
    )
}

export default Contact
