import marchantiqLogo from "../../assets/pictures/logo/marchantiq_logo.png";
import logoAntic from "../../assets/pictures/logo/logo_antic.png";
import chopeGer from "../../assets/pictures/logo/chopeGer.png";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchBarHeader } from "../forms/SearchBarHeader.jsx";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext.jsx";
import { isUserConnected, disconnect } from "../../services/users.js";
import { useWindowSize } from "../../hooks/useWindowSize.js";

export function Header() {

    const [searchBarContent, setSearchBarContent] = useState();
    const [searchBarMenuState, setSearchBarMenuState] = useState(false);
    const searchBarMenuRef = useRef(null);
    const { state, dispatch } = useAuth();
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileMenu, setIsMobileMenu] = useState(true);
    const { width } = useWindowSize();
    const navigate = useNavigate();
    const miniMenuRef = useRef(null);

    useEffect(() => {
        if (width <= 1067) {
            setIsMobile(true)
        } else {
            setIsMobile(false);
        }
    }, []);

    function displaySearchBarMenu() {
        searchBarMenuRef.current.style.animationName = `${searchBarMenuState ? "remonteAuCiel" : "descendDuCiel"}`;
        setSearchBarMenuState(!searchBarMenuState);
    }

    function hideSearchBarMenu() {
        displaySearchBarMenu();
    }

    useEffect(() => {
        if (!searchBarContent) return;
        navigate(`/items/searchedItems/${searchBarContent}`);
    }, [searchBarContent]);


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

    async function handleDisconnect() {
        const res = await disconnect();
        console.log(res);
        navigate("/");
    }

    function togglePageMini() {
        setIsMobileMenu(!isMobileMenu);
    }

    return (
        <header>
            <div className="header__logo">
                <div className="header__logo__content">
                    <img src={marchantiqLogo} alt="logo_principale" />
                    <i className="fa-solid fa-right-from-bracket" onClick={handleDisconnect} />
                </div>
            </div>
            <div className="header__menu">
                {/* <img src={logoAntic} className="logoAntic" /> */}
                <div className="header__menu__pagesMini">

                    {isMobileMenu && <i className="fa-solid fa-bars" onClick={togglePageMini} />}
                    {!isMobileMenu && <i className="fa-solid fa-xmark" onClick={togglePageMini} />}
                    <div className={`header__menu__pagesMini__menu${!isMobileMenu ? " open" : ""}`}>

                        <ul>
                            <NavLink to="/" onClick={togglePageMini}><li><span>Accueil</span></li></NavLink>
                            <NavLink to="/presentation" onClick={togglePageMini}><li><span>Presentation</span></li></NavLink>
                            <NavLink to="/news" onClick={togglePageMini}><li><span>Le coin des collectionneurs</span></li></NavLink>
                            <NavLink to="/contact" onClick={togglePageMini}><li><span>Contact</span></li></NavLink>
                            <NavLink to="/auth" onClick={togglePageMini}><li><span>Auth</span></li></NavLink>
                            {state.isConnected && <NavLink to="/admin/addItems" onClick={togglePageMini}><li><span>Ajouter un objet</span></li></NavLink>}
                        </ul>
                        <div className="border"></div>
                    </div>


                </div>

                <div className="header__menu__pages">
                    <ul>
                        <NavLink to="/"><li data-text="Accueil" style={{ width: "90px" }}><span>Accueil</span></li></NavLink>
                        <NavLink to="/presentation"><li data-text="Presentation" style={{ width: "98px" }}><span>Presentation</span></li></NavLink>
                        <NavLink to="/news"><li data-text="Le coin des collectionneurs" style={{ width: "220px" }}><span>Le coin des collectionneurs</span></li></NavLink>
                        <NavLink to="/contact"><li data-text="Contact" style={{ width: "85px" }}><span>Contact</span></li></NavLink>
                        <NavLink to="/auth"><li data-text="Auth" style={{ width: "80px" }}><span>Auth</span></li></NavLink>
                        {state.isConnected && <NavLink to="/admin/addItems"><li data-text="Ajouter un objet" style={{ width: "124px" }}><span>Ajouter un objet</span></li></NavLink>}
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