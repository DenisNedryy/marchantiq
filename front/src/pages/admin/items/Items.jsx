import jf from "../../../assets/pictures/photos/jf.jpg";
import suisse from "../../../assets/pictures/photos/suisse.png";
import hawai from "../../../assets/pictures/photos/hawai.png";
import { Items_1Form } from "../../../components/forms/Items_1Form";
import { Items_2Form } from "../../../components/forms/Items_2Form";
import { Items_3Form } from "../../../components/forms/Items_3Form";
import { Items_4Form } from "../../../components/forms/Items_4Form";
import { useState, useEffect } from "react";

export function Items({ step, setStep }) {

    const [data, setData] = useState({});
    const [form1, setForm1] = useState({});
    const [form2, setForm2] = useState({});
    const [form3, setForm3] = useState({});
    const [form4, setForm4] = useState({});



    return (
        <>
            <div class="steps">
                {console.log(form1)}
                {console.log(form2)}
                {console.log(form3)}
                {console.log(form4)}

                <i className="fa-solid fa-check" />
                <p>Etape <span className="bold">{step}</span> sur <span className="bold">5</span></p>
                {step === 2 && <h3>Entrez les détails de l’article</h3>}
                {step === 3 && <h3>Entrez les détails de l’article</h3>}
                {step === 4 && <h3>Entrez les détails de l’article</h3>}
                {step === 5 && <h3>Ajouter des images</h3>}

                {/* <div style={{ marginTop: "1rem" }}>
                    {step > 1 && <button onClick={() => setStep(step - 1)} className="btn">Précédent</button>}
                    {step < 5 && <button onClick={() => setStep(step + 1)} className="btn">Suivant</button>}
                </div> */}
            </div>

            {step === 2 && <Items_1Form onUpdateForm={setForm1} onUpdateStep={setStep}/>}
            {step === 3 && <Items_2Form onUpdateForm={setForm2} onUpdateStep={setStep}/>}
            {step === 4 && <Items_3Form onUpdateForm={setForm3} onUpdateStep={setStep}/>}
            {step === 5 && <Items_4Form onUpdateForm={setForm4} onUpdateStep={setStep}/>}

            {/* <div style={{ marginTop: "1rem",width:"60%",margin:"auto" }}>
                {step > 1 && <button onClick={() => setStep(step - 1)} className="btn">Précédent</button>}
                {step < 5 && <button onClick={() => setStep(step + 1)} className="btn">Suivant</button>}
            </div> */}
        </>
    );
}