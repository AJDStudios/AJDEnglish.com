import React from "react";
import '../styles/Contact.css';
import ContactForm from "./ContactForm.tsx";


export default function Contact() {
    return (
        <>
            <ContactForm />
            <div className="contact">
				<ul>
					<li>
                        📞 
						<a href="tel:+447498284613" target="_blank" rel="noreferrer"><span>+44-7498-284-613</span></a>
					</li>
					<li>
                        ✉️
						<a href="mailto:aaronjdodd1989@gmail.com" target="_blank" rel="noreferrer"><span>Aaronjdodd1989@gmail.com</span></a>
					</li>
					<li>
                        📍
						<a href="https://maps.app.goo.gl/PM3ZztyEnz5sLSjy6" target="_blank" rel="noreferrer"><span>Cinderford</span></a>
					</li>
				</ul>
			</div>
        </>
    )
}