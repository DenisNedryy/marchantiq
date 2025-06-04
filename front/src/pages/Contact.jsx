import marchantiq_logo from "../assets/pictures/logo/marchantiq_logo.png";
import { ContactForm } from "../components/forms/ContactForm";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function Contact() {

    const { uuid } = useParams();

    return (
        <div className="contact">
            <div className="box">
                <h2>Coordonées</h2>
                <div className="contact__coordonées">
                    <div className="contact__coordonées--address">
                        <img src={marchantiq_logo} />
                        <p className="contact__coordonées--address--name">ADRESSE</p>
                        <p>9 Le Clos Chausson</p>
                        <p>86530 Availles-en-Châtellerault</p>
                        <hr />
                        <p className="contact__coordonées--address--name">TELEPHONE</p>
                        <p>06-45-45-45-45</p>

                    </div>
                    <div className="contact__coordonées--localisation">
                        <iframe
                            title="Localisation de Marchantiq"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2733.8646618298717!2d0.5707880767825864!3d46.74785064688227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47fdabf66deb7423%3A0x2e004be52e386add!2s9%20Le%20Clos%20Chausson%2C%2086530%20Availles-en-Ch%C3%A2tellerault!5e0!3m2!1sfr!2sfr!4v1749040918866!5m2!1sfr!2sfr"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />

                    </div>
                </div>
            </div>
            <div className="box">
                <h2>Contacter Marchantiq</h2>
                <div className="contact__contact">
                    <p className="contact__contact__para">Vous avez une question sur l’un de nos objets ?</p>
                    <p className="contact__contact__para">Vous souhaitez obtenir une estimation et nous proposer un échange ou un achat ?</p>
                    <p className="contact__contact__para">Pour toute demande, merci d’utiliser le formulaire de contact ci-dessous.</p>
                    <p className="contact__contact__addresseEmail">Adresse email nomDuSite : marchais@marchantiq.fr</p>
                </div>
                <ContactForm uuid={uuid}/>
            </div>
        </div>
    );
}