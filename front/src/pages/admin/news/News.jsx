import jf from "../../../assets/pictures/photos/jf.jpg";
import suisse from "../../../assets/pictures/photos/suisse.png";
import hawai from "../../../assets/pictures/photos/hawai.png";
import { News_1Form } from "../../../components/forms/News_1Form";
import { News_2Form } from "../../../components/forms/News_2Form";
import { useState, useEffect } from "react";
import { createNews } from "../../../services/news";
import { ShowImagesNews } from "./ShowImagesNews"; 
 

export function News({ step, setStep }) {

    const [data, setData] = useState({});
    const [newsUuid, setNewsUuid] = useState("");
    const [threadUuid, setThreadUuid] = useState("");
    const [form1, setForm1] = useState({});
    const [form2, setForm2] = useState({});  

    return ( 
        <>
            <div class="steps">
                <i className="fa-solid fa-check" />
                <p>Etape <span className="bold">{step}</span> sur <span className="bold">5</span></p>
                {step === 2 && <h3>Entrez les détails de l’article</h3>}
                {step === 3 && <h3>Ajoutez un chapitre à l'article</h3>}
                {step === 4 && <h3>Entrez les détails de l’article</h3>}
                {step === 5 && <h3>Ajouter des images</h3>}

            </div>

            {step === 2 && <News_1Form onUpdateForm={setForm1} onUpdateStep={setStep} />}
            {step === 3 && (
                <>
                    <ShowImagesNews onUpdate={form2} newsUuid={newsUuid} />
                    <News_2Form onUpdateForm={setForm2} onUpdateStep={setStep} newsUuid={newsUuid} />
                </>
            )}

        </>
    );
}