import { useState } from "react";

export function Items_3Form({ onUpdateForm }) {
    const [ isNew, setIsNew ] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            longuer: form.elements['longuer'].value,
            largeur: form.elements['largeur'].value,
            dia: form.elements['dia'].value,
            profondeur: form.elements['profondeur'].value,
            isNew: isNew
        }
    }

    return (
        <form onSubmit={handleSubmit} className="createForm">
            <div>
                <label>Longeur</label>
                <input type="text" name="longuer" placeholder="ex: 23cm" />
            </div>
            <div>
                <label>Largeur</label>
                <input type="text" name="largeur" placeholder="ex: 4cm" />
            </div>
            <div>
                <label>Diamètre</label>
                <input type="text" name="dia" placeholder="ex: 12cm" />
            </div>
            <div>
                <label>Profondeur</label>
                <input type="text" name="profondeur" placeholder="ex: Bon état" />
            </div>
            <div>
                <label>Nouveau ?</label>
                <button type="button" className="btn" onClick={()=>setIsNew(!isNew)}>{isNew ? "Oui" : "Non"}</button>
            </div>
            <button type="submit">Valider</button>
        </form>
    );
}