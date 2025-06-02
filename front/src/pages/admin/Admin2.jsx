import { useState } from "react";
import { News } from "./news/News";

export function Admin2() {

    const [newsStep, setNewsStep] = useState(1);

    return (
        <>
            <div className="box">
                <h2>Ajouter un article</h2>
                <News step={newsStep} setStep={setNewsStep} /> 
            </div>
        </>
    );
}