import React from 'react'
import "./ContactInfo.css"

const ContactInfo = () => {
    return (
        <div id="contactInfo">
            <div id="location">
            <i class="fas fa-map-marker-alt"></i>
            <p>Orlando, FL</p>
            </div>
            <div id="email">
            <i class="fas fa-envelope"></i>
            <a href="alcantaradevelopment@gmail.com">alcantaradevelopment@gmail.com</a>
            </div>
        </div>
    )
}

export default ContactInfo
