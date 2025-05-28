import jf from "../../../assets/pictures/photos/jf.jpg";
import suisse from "../../../assets/pictures/photos/suisse.png";
import hawai from "../../../assets/pictures/photos/hawai.png";
import { Items_1Form } from "../../../components/forms/Items_1Form";
import { Items_2Form } from "../../../components/forms/Items_2Form";
import { Items_3Form } from "../../../components/forms/Items_3Form";
import { useState } from "react";

export function Items({ step, setStep }) {

    const [data, setData] = useState({});

    return (
        <> 
            <div class="steps">

                {step === 1 && <img src={jf} />}
                {step === 2 && <img src={suisse} />}
                {step === 3 && <img src={hawai} />}
                <p>Items - Étape <span className="bold">{step}</span> sur <span className="bold">4</span></p>
                {step === 1 && <div>Champs 1</div>}
                {step === 2 && <div>Étape 2 : Détails</div>}
                {step === 3 && <div>Étape 3 : Validation</div>}

                <div style={{ marginTop: "1rem" }}>
                    {step > 1 && <button onClick={() => setStep(step - 1)}>Précédent</button>}
                    {step < 3 && <button onClick={() => setStep(step + 1)}>Suivant</button>}
                </div>
            </div>

            {step === 1 && <Items_1Form onUpdateForm={setData} />}
            {step === 2 && <Items_2Form onUpdateForm={setData} />}
            {step === 3 && <Items_3Form onUpdateForm={setData} />}

            <div style={{ marginTop: "1rem" }}>
                {step > 1 && <button onClick={() => setStep(step - 1)}>Précédent</button>}
                {step < 3 && <button onClick={() => setStep(step + 1)}>Suivant</button>}
            </div>
        </>
    );
}