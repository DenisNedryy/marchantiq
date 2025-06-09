import marchantiq_logo from "../assets/pictures/logo/marchantiq_logo.png";
import { ContactForm } from "../components/forms/ContactForm";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import flyer_decoupe_1 from "../assets/pictures/photos/flyer_decoupe_1.png";
import flyer_decoupe_2 from "../assets/pictures/photos/flyer_decoupe_2.png";
import flyer_decoupe_3 from "../assets/pictures/photos/flyer_decoupe_3.png";
import flyer_decoupe_4 from "../assets/pictures/photos/flyer_decoupe_4.png";
import { sendMail } from "../services/mails";

export function Contact() {

    const { uuid } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        if (Object.keys(data).length < 1) return;
        sendMyMail(data);
    }, [data]);


    async function sendMyMail(data) {
        const res = await sendMail(data);
        console.log(res);
    }

    return (
        <div className="contact">
            <div className="box">
                <h2>Coordonées</h2>
                <div className="contact__coordonées">
                    <div className="contact__coordonées__flyer">
                        <img src={flyer_decoupe_1} />
                        <img src={flyer_decoupe_2} />
                        <img src={flyer_decoupe_3} />
                        <img src={flyer_decoupe_4} />
                    </div>
                </div>
            </div>
            <div className="box">
                <h2>Contacter Marchantiq</h2>
                <div className="contact__contact">
                    <p className="contact__contact__para">Vous avez une question sur l’un de nos objets ?</p>
                    <p className="contact__contact__para">Vous souhaitez obtenir une estimation et nous proposer un échange ou un achat ?</p>
                    <p className="contact__contact__para">Pour toute demande, merci d’utiliser le formulaire de contact ci-dessous.</p>
                    <p className="contact__contact__addresseEmail">Adresse email Marchantiq : march.jf@orange.fr</p>
                </div>
                <ContactForm uuid={uuid} onUpdate={setData} />
            </div>
        </div>
    );
}