import React from 'react';
import ContactForm from './ContactForm';
import './section.css';

function SectionContactForm(){
    return(
<React.Fragment>
    <div className="contact-form__section">
        <div className="contact-form__box">
            <ContactForm />
        </div>
       <div className="contact-form__image">
           <img src="./images/mail.png" alt="mail"/>
        </div>


    </div>
</React.Fragment>

    );
};
export default SectionContactForm;