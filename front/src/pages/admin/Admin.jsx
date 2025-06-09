import { useState } from "react";
import { Items } from "./items/Items.jsx";

export function Admin() {

    const [itemStep, setItemStep] = useState(1);

    return (
        <>
            <div className="box">
                <h2>Ajouter un objet</h2>
                <Items step={itemStep} setStep={setItemStep} /> 
            </div>
        </>
    );
}