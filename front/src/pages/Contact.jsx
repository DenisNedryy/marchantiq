import marchantiq_logo from "../assets/pictures/logo/marchantiq_logo.png";
import { ContactForm } from "../components/forms/ContactForm";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import flyer_decoupe_1 from "../assets/pictures/photos/flyer_decoupe_1.png";
import flyer_decoupe_2 from "../assets/pictures/photos/flyer_decoupe_2.png";
import flyer_decoupe_3 from "../assets/pictures/photos/flyer_decoupe_3.png";
import flyer_decoupe_4 from "../assets/pictures/photos/flyer_decoupe_4.png";
import { sendMail } from "../services/mails";

export function Contact() {

    const { uuid } = useParams();
    const [data, setData] = useState(null);
    const fly1Ref = useRef(null);
    const fly2Ref = useRef(null);
    const fly3Ref = useRef(null);
    const fly4Ref = useRef(null);
    const contactCoordRef = useRef(null);

    useEffect(() => {
        if (!data) return;
        sendMyMail(data);
    }, [data]);


    async function sendMyMail(data) {
        console.log(data);
        const res = await sendMail(data);
        console.log(res);
    }

    function handleClickFlyer() {
        fly4Ref.current.classList.toggle("flyerSelected");
    }

    function handleHover() {
        fly1Ref.current.style.transform = "translateX(-50px)";
        fly2Ref.current.style.transform = "translateX(50px)";
        fly3Ref.current.style.transform = "translateX(-50px)";
        fly4Ref.current.style.transform = "translateX(50px)";

        setTimeout(() => {
            fly4Ref.current.style.transform = "translateX(0px) translateY(-200px) scale(2)";
        }, [300]);
    }

    function handleHoverBack() {
        setTimeout(() => {
            fly1Ref.current.style.transform = "translateX(0px)";
            fly2Ref.current.style.transform = "translateX(0px)";
            fly3Ref.current.style.transform = "translateX(0px)";
            fly4Ref.current.style.transform = "translateX(0px)";
        }, [300]);
        fly4Ref.current.style.transform = "translateX(50px) translateY(-0px) scale(1)";
    }

    return (
        <div className="contact">
            <div className="box">
                <h2>Coordonées</h2>
                <div className="contact__coordonées" >
                    <div className="contact__coordonées__flyer" onMouseEnter={handleHover} onMouseLeave={handleHoverBack}>
                        <img src={flyer_decoupe_1}  ref={fly1Ref} />
                        <img src={flyer_decoupe_2} ref={fly2Ref} />
                        <img src={flyer_decoupe_3} ref={fly3Ref} />
                        <img src={flyer_decoupe_4}  ref={fly4Ref} />
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