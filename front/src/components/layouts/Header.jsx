import marchantiqLogo from "../../assets/pictures/logo/marchantiq_logo.png";
import logoAntic from "../../assets/pictures/logo/logo_antic.png";
import chopeGer from "../../assets/pictures/logo/chopeGer.png";
import { NavLink } from "react-router-dom";
import { SearchBarHeader } from "../forms/SearchBarHeader.jsx";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { isUserConnected } from "../../services/users.js";

export function Header() {

    const [searchBarContent, setSearchBarContent] = useState();
    const [searchBarMenuState, setSearchBarMenuState] = useState(false);
    const searchBarMenuRef = useRef(null);
    const { state, dispatch } = useAuth();

    function displaySearchBarMenu() {
        searchBarMenuRef.current.style.animationName = `${searchBarMenuState ? "remonteAuCiel" : "descendDuCiel"}`;
        setSearchBarMenuState(!searchBarMenuState);
    }

    function hideSearchBarMenu() {
        displaySearchBarMenu();
    }


    useEffect(() => {
        checkAuthStatus();
    }, []);

    async function checkAuthStatus() {
        const resUser = await isUserConnected();
        if (resUser.ok && resUser.data.isUser) {
            dispatch({ type: "SET_USER", payload: true });
        } else {
            dispatch({ type: "LOGOUT" });
        }
    }

    return (
        <header>
            <div className="header__logo">
                <div className="header__logo__content">
                    <img src={marchantiqLogo} alt="logo_principale" />
                </div>
            </div>
            <div className="header__menu">
                {/* <img src={logoAntic} className="logoAntic" /> */}
                <div className="header__menu__pages">
                    <ul>
                        <NavLink to="/"><li data-text="Accueil" style={{ width: "90px" }}><span>Accueil</span></li></NavLink>
                        <NavLink to="/presentation"><li data-text="Presentation" style={{ width: "98px" }}><span>Presentation</span></li></NavLink>
                        <NavLink to="/newsCorner"><li data-text="Le coin des collectionneurs" style={{ width: "220px" }}><span>Le coin des collectionneurs</span></li></NavLink>
                        <NavLink to="/contact"><li data-text="Contact" style={{ width: "85px" }}><span>Contact</span></li></NavLink>
                        <NavLink to="/auth"><li data-text="Auth" style={{ width: "80px" }}><span>Auth</span></li></NavLink>
                        {state.isConnected && <NavLink to="/admin"><li data-text="Admin" style={{ width: "80px" }}><span>Admin</span></li></NavLink>}
                    </ul>
                    <i className="fa-solid fa-magnifying-glass" onClick={displaySearchBarMenu}></i>
                </div>
                {/* <img src={chopeGer} className="chopeGer" /> */}
            </div>
            <div className="header__searchBar" ref={searchBarMenuRef}>
                < SearchBarHeader onUpdate={setSearchBarContent} closeSearchBarMenu={hideSearchBarMenu} />
            </div>

        </header>
    );
}