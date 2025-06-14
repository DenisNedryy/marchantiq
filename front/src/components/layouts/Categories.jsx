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
            <button className="btn categories__miniMenu" onClick={toggleCategoriesMini}>Categories</button>

            <div className="categories__origin">

                <div className={`categories${!isMobileCategories ? " open" : ""}`}>
                    <h2>Categories</h2>
                    <ul>
                        <NavLink to="/items/furniture" onClick={toggleCategoriesMini}><li>Mobilier</li></NavLink>
                        <NavLink to="/items/knick-knacks" onClick={toggleCategoriesMini}><li>Bibelots</li></NavLink>
                        <NavLink to="/items/militaria" onClick={toggleCategoriesMini}><li>Militaria</li></NavLink>
                        <NavLink to="/items/books" onClick={toggleCategoriesMini}><li>Livres</li></NavLink>
                        <NavLink to="/items/numismatics" onClick={toggleCategoriesMini}><li>Numismatiques</li></NavLink>
                        <NavLink to="/items/paintings" onClick={toggleCategoriesMini}><li>Tableaux</li></NavLink>
                        <NavLink to="/items/postcards" onClick={toggleCategoriesMini}><li>Cartes postales</li></NavLink>
                        <NavLink to="/items/miscellaneous" onClick={toggleCategoriesMini}><li>Divers</li></NavLink>
                    </ul>
                </div>
                <img src={horloge} />
            </div>
        </>
    );
}