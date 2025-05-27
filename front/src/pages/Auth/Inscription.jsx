import { useState, useEffect } from "react";
import { InscriptionForm } from "../../components/forms/InscriptionForm";
import { signOut } from "../../services/users";

export function Inscription({ onUpdateAuthState }) {

    const [formData, setFormData] = useState({});

    useEffect(() => {
        inscriptionManager();
    }, [formData]);

    async function inscriptionManager() {
        if (Object.keys(formData).length === 0) return;
        const res = await signOut(formData);
        console.log(res);
    }

    return (
        <>
            <h2>Inscription</h2>
            <InscriptionForm onUpdateAuthState={onUpdateAuthState} onUpdateForm={setFormData} />
        </>
    );
}