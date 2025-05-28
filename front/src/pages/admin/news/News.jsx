export function News({ step, setStep }) {

    return (
        <>
            <h3>News - Étape {step}</h3>

            {step === 1 && <div>Étape 1 : Choix du produit</div>}
            {step === 2 && <div>Étape 2 : Détails</div>}
            {step === 3 && <div>Étape 3 : Validation</div>}

            <div style={{ marginTop: "1rem" }}>
                {step > 1 && <button onClick={() => setStep(step - 1)}>Précédent</button>}
                {step < 3 && <button onClick={() => setStep(step + 1)}>Suivant</button>}
            </div>
        </>
    );
}