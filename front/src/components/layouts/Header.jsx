import marchantiqLogo from "../../assets/pictures/logo/marchantiq_logo.png";
import logoAntic from "../../assets/pictures/logo/logo_antic.png";
import chopeGer from "../../assets/pictures/logo/chopeGer.png";

export function Header() {
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
                        <li>Accueil</li>
                        <li>Presentation</li>
                        <li>Le coin des collectionneurs</li>
                        <li>Contact</li>
                        <li>Auth</li>
                        <li><i className="fa-solid fa-magnifying-glass"/></li>
                    </ul>
                </div>
                <img src={chopeGer} className="chopeGer" />
            </div>
        </header>
    );
}