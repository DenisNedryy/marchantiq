import { useState } from "react";

export function ContactForm({ uuid }) {

    const [ objectValue, setObjectValue ] = useState(`Demande de renseignement sur l'item (${uuid})`)

    async function handleChange(e){
        setObjectValue(e.target.value);
    }

    async function handleSubmit() {

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
                            <input type="mail" name="name" />
                        </div>
                    </div>
                    <div className="form__right">
                        <div>
                            <label>Prénom:</label>
                            <input type="text" name="prénom" />
                        </div>
                        <div>
                            <label>Téléphone:</label>
                            <input type="number" name="phone" />
                        </div>
                    </div>
                </div>
                <div className="contactForm__rest">
                    <div>
                        <label>Object du message:</label>
                        <input type="text" name="objet_message" value={objectValue} onChange={handleChange}/>
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