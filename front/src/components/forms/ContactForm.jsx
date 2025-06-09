import { useState } from "react";
import { PhoneNumberField } from "../forms/PhoneNumberField";

export function ContactForm({ uuid, onUpdate }) {

    const [objectValue, setObjectValue] = useState(`Marchantiq - Demande de renseignement`);
    const [phone, setPhone] = useState("");

    async function handleChange(e) {
        setObjectValue(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;

        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const prenom = form.elements['prenom'].value;
        const objet_message = form.elements['objet_message'].value;
        const message = form.elements['message'].value;
        const items_uuid = uuid;


        const data = {
            name: name,
            prenom: prenom,
            email: email,
            phone: phone,
            message: message,
            subject: objet_message,
            items_uuid: items_uuid
        }

        console.log(phone);
        form.reset();
        setPhone("");
        onUpdate(data);
    }

    return (
        <div className="contactForm">
            <form onSubmit={handleSubmit}>

                <div className="form__direction__container">
                    <div className="form__left">
                        <div>
                            <label>Nom:</label>
                            <input type="text" name="name" />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="mail" name="email" />
                        </div>
                    </div>
                    <div className="form__right">
                        <div>
                            <label>Prénom:</label>
                            <input type="text" name="prenom" />
                        </div>
                        <div>
                            <label>Téléphone:</label>
                            <PhoneNumberField setPhone={setPhone} />
                        </div>
                    </div>
                </div>
                <div className="contactForm__rest">
                    <div>
                        <label>Objet du message:</label>
                        <input type="text" name="objet_message" value={objectValue} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea name="message"></textarea>
                    </div>
                </div>
                <div className="btnContainer">
                    <button type="submit" className="btn">Envoyer</button>
                </div>

            </form>
        </div>
    );
}