import mobilier from "../../assets/pictures/icon/categories/cabinet.png";
import bibelots from "../../assets/pictures/icon/categories/bibelots.png";
import militaria from "../../assets/pictures/icon/categories/militaria.png";
import livre from "../../assets/pictures/icon/categories/livre.png";
import numismatique from "../../assets/pictures/icon/categories/numismatique.png";
import tableaux from "../../assets/pictures/icon/categories/chevalet.png";
import poste from "../../assets/pictures/icon/categories/poste.png";
import divers from "../../assets/pictures/icon/categories/divers.png";
import horloge from "../../assets/pictures/logo/horloge.png";
import horloge2 from "../../assets/pictures/logo/horloge_0.jpg";
import blason_1 from "../../assets/pictures/icon/blasons/blason_1.png";
import blason_2 from "../../assets/pictures/icon/blasons/blason_2.png";

import blason_3 from "../../assets/pictures/icon/blasons/blason_3.png";
import blason_4 from "../../assets/pictures/icon/blasons/blason_4.png";
import blason_5 from "../../assets/pictures/icon/blasons/blason_5.png";
import blason_6 from "../../assets/pictures/icon/blasons/blason_6.png";
import blason_7 from "../../assets/pictures/icon/blasons/blason_7.png";
import blason_8 from "../../assets/pictures/icon/blasons/blason_8.png";
import etendard_button from "../../assets/pictures/photos/etendard_button.png";

import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";

export function Categories() {

    const [isMobileCategories, setIsMobileCategories] = useState(true);

    function toggleCategoriesMini() {
        setIsMobileCategories(!isMobileCategories);
    }

    // { isMobileMenu && <i className="fa-solid fa-bars" onClick={togglePageMini} /> }
    // { !isMobileMenu && <i className="fa-solid fa-xmark" onClick={togglePageMini} /> }
    // <div className={`header__menu__pagesMini__menu${!isMobileMenu ? " open" : ""}`}></div>

    return (
        <>
            <div className="categories__miniMenu" onClick={toggleCategoriesMini}>
                <img src={etendard_button} alt="etendard"/>
                <p>C</p>
            </div>

            <div className="categories__origin"> 

                <div className={`categories${!isMobileCategories ? " open" : ""}`}>
                    <h2>Categories</h2>
                    <ul>
                        <NavLink to="/items/furniture" onClick={toggleCategoriesMini} className={({ isActive }) => isActive ? "categoryActive" : ""}><li> <img src={blason_1} /> <p>Mobilier</p></li></NavLink>
                        <NavLink to="/items/knick-knacks" onClick={toggleCategoriesMini} className={({ isActive }) => isActive ? "categoryActive" : ""}><li>  <img src={blason_2} /> <p>Bibelots</p></li></NavLink>
                        <NavLink to="/items/militaria" onClick={toggleCategoriesMini} className={({ isActive }) => isActive ? "categoryActive" : ""}><li>  <img src={blason_3} /> <p>Militaria</p></li></NavLink>
                        <NavLink to="/items/books" onClick={toggleCategoriesMini} className={({ isActive }) => isActive ? "categoryActive" : ""}><li>  <img src={blason_4} /><p>Livres</p></li></NavLink>
                        <NavLink to="/items/numismatics" onClick={toggleCategoriesMini} className={({ isActive }) => isActive ? "categoryActive" : ""}><li> <img src={blason_5} /><p>Numismatiques</p></li></NavLink>
                        <NavLink to="/items/paintings" onClick={toggleCategoriesMini} className={({ isActive }) => isActive ? "categoryActive" : ""}><li> <img src={blason_6} /><p>Tableaux</p></li></NavLink>
                        <NavLink to="/items/postcards" onClick={toggleCategoriesMini} className={({ isActive }) => isActive ? "categoryActive" : ""}><li> <img src={blason_7} /><p>Cartes postales</p></li></NavLink>
                        <NavLink to="/items/miscellaneous" onClick={toggleCategoriesMini} className={({ isActive }) => isActive ? "categoryActive" : ""}><li> <img src={blason_8} /><p>Divers</p></li></NavLink>
                    </ul>
                </div>
                <img src={horloge} className="horloge"/>
            </div>
        </>
    );
}