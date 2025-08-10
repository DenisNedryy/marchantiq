import { useState } from "react";
import { ItemsUpdate } from "./items/ItemsUpdate";

export function AdminUpdate() {

    const [itemStep, setItemStep] = useState(1);

    return (
        <>
            <div className="box">
                <h2>Modifier un objet</h2>
                <ItemsUpdate step={itemStep} setStep={setItemStep} /> 
            </div> 
        </>
    );
}