import { useState } from "react";
import { Inscription } from "./Inscription";
import { Connexion } from "./Connexion";

export function Auth() {

    const [auth, setAuth] = useState(true);


    function toggleAuth() {
        setAuth((prevState) => !prevState);
    }
    return (
        <div className="auth">
            <div className="box">
                {auth ? (
                    <Connexion onUpdateAuthState={toggleAuth} />
                ) : (
                    <Inscription onUpdateAuthState={toggleAuth} />
                )}
            </div>
        </div>
    );
}