import { useState, useEffect } from "react";
import { ConnexionForm } from "../../components/forms/ConnexionForm";
import { signIn } from "../../services/users";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function Connexion({ onUpdateAuthState }) {
    const [formData, setFormData] = useState({});
    const { state, dispatch } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        connectionManager();
    }, [formData]);

    async function connectionManager() {
        if (Object.keys(formData).length === 0) return;
        const res = await signIn(formData);
        console.log(res.ok);
        if (res.ok) {
            dispatch({ type: "SET_USER" });
            navigate("/");
        } else {
            dispatch({ type: "LOGOUT" });
        }
    }
    return (
        <>
            <h2>Connexion</h2>
            <ConnexionForm onUpdateAuthState={onUpdateAuthState} onUpdateForm={setFormData} />
        </>
    );
}