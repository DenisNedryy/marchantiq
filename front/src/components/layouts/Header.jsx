import marchantiqLogo from "../../assets/pictures/logo/marchantiq_logo.png";
import logoAntic from "../../assets/pictures/logo/logo_antic.png";
import chopeGer from "../../assets/pictures/logo/chopeGer.png";
import { NavLink } from "react-router-dom";
import { SearchBarHeader } from "../forms/SearchBarHeader.jsx";
import { useState } from "react";

export function Header() {
    
    const [searchBarContent, setSearchBarContent] = useState();

    return (
        <header>
            <div className="header__logo">
                <div className="header__logo__content">
                    <img src={marchantiqLogo} alt="logo_principale" />
                </div>
            </div>
            <div className="header__menu">
                <img src={logoAntic} className="logoAntic" />
                <div className="header__menu__pages">
                    <ul>
                        <NavLink to="/"><li data-text="Accueil"><span>Accueil</span></li></NavLink>
                        <NavLink to="/presentation"><li data-text="Presentation"><span>Presentation</span></li></NavLink>
                        <NavLink to="/newsCorner"><li data-text="Le coin des collectionneurs"><span>Le coin des collectionneurs</span></li></NavLink>
                        <NavLink to="/contact"><li data-text="Contact"><span>Contact</span></li></NavLink>
                        <NavLink to="/auth"><li data-text="Auth"><span>Auth</span></li></NavLink>
                    </ul>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <img src={chopeGer} className="chopeGer" />
            </div>
            <div className="header__searchBar">
                < SearchBarHeader onUpdate={setSearchBarContent}/>
            </div>
        </header>
    );
}