export function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <div className="footerContainer__top">
                    <div className="footerContainer__top__left">
                        <img src="src/assets/pictures/logo/marchantiq_logo_black.png" alt="logo" />
                        {/* <!-- <div className="footerContainer__top__left__text">
                            <div className="footerContainer__top__left__text--titre">Marchantiq</div>
                            <div className="footerContainer__top__left__text--description">Achat - Vente - Estimation</div>
                        </div> --> */}
                    </div>
                    <div className="footerContainer__top__right">
                        <div className="footerContainer__top__right--category">
                            <p className="description">Accueil</p>
                            <ul>
                                <li><a href="http://localhost/api_jf/presentation">Présentation</a></li>
                                <li><a href="http://localhost/api_jf/recueil?category=tous&page=1">Le coin des collectionneurs</a></li>
                                <li><a href="http://localhost/api_jf/contact">Contact-Coordonnées</a></li>
                            </ul>
                        </div>
                        <div className="footerContainer__top__right--category">
                            <p className="description">Antiquités</p>
                            <ul>
                                <li><a href="http://localhost/api_jf/objets?category=mobilier">Mobilier</a></li>
                                <li><a href="http://localhost/api_jf/objets?category=monnaie">Monnaie</a></li>
                                <li><a href="http://localhost/api_jf/objets?category=militaria">Militaria</a></li>
                            </ul>
                        </div>
                        <div className="footerContainer__top__right--category">
                            <p className="description">Infos utiles</p>
                            <ul>
                                <li><a href="http://localhost/api_jf/contact">Expertise / Estimation</a></li>
                                <li><a href="">Conditions générales</a></li>
                                <li><a href="">Mentions légales</a></li>
                                <li><a href="">Politique de confidentialité</a></li>
                                <li><a target="_blank" href="https://icons8.com/icon/12830/sofa">Meubles</a> icône par <a target="_blank" href="https://icons8.com">Icons8</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footerContainer__bot"></div>
            </div>
        </footer>
    );
}