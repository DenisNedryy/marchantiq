import { NavLink } from "react-router-dom";

export function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <div className="footerContainer__top">
                    <div className="footerContainer__top__left">
                        <img src="src/assets/pictures/logo/marchantiq_logo_black.png" alt="logo" />
                    </div>
                    <div className="footerContainer__top__right">
                        <div className="footerContainer__top__right--category">
                            <p className="description">Informations de contact</p>
                            <ul>
                                <li>Adresse postale</li>
                                <li>Numéro de téléphone: 06 12 36 00 87</li>
                                <li>Adresse e-mail: march.js@orange.fr</li>
                                <NavLink to="/contact"><li>Contact</li></NavLink>
                            </ul>
                        </div>
                        <div className="footerContainer__top__right--category">
                            <p className="description">Liens utiles</p>
                            <ul>
                                <NavLink to="/presentation"><li>À propos / Qui sommes-nous</li></NavLink>
                                <NavLink to="/"><li>Accueil</li></NavLink>
                                <NavLink to="//items/furniture"><li>Mobilier</li></NavLink>
                                <NavLink to="/news"><li>Le coin des collectionneurs</li></NavLink>
                            </ul>
                        </div>
                        <div className="footerContainer__top__right--category">
                            <p className="description">Obligations légales</p>
                            <ul>
                                <li>EDITEUR: Marchais Jean-François</li>
                                <li>HERBERGEUR: o2switch</li>
                                <li>SIRET: EI RCS SIREN 818279408 poitiers</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footerContainer__bot"></div>
            </div>
        </footer>
    );
}