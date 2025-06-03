import mobilier from "../../assets/pictures/icon/categories/cabinet.png";
import bibelots from "../../assets/pictures/icon/categories/bibelots.png";
import militaria from "../../assets/pictures/icon/categories/militaria.png";
import livre from "../../assets/pictures/icon/categories/livre.png";
import numismatique from "../../assets/pictures/icon/categories/numismatique.png";
import tableaux from "../../assets/pictures/icon/categories/chevalet.png";
import poste from "../../assets/pictures/icon/categories/poste.png";
import divers from "../../assets/pictures/icon/categories/divers.png";
import { NavLink, useParams } from "react-router-dom";

export function Categories() {

    return (

        <div className="categories">
            <h2>Categories</h2>
            <ul>
                <NavLink to="/objets/mobilier"><li>Mobilier</li></NavLink>
                <NavLink to="/objets/bibelots"><li>Bibelots</li></NavLink>
                <NavLink to="/objets/militaria"><li>Militaria</li></NavLink>
                <NavLink to="/objets/livres"><li>Livres</li></NavLink>
                <NavLink to="/objets/numismatiques"><li>Numismatiques</li></NavLink>
                <NavLink to="/objets/tableaux"><li>Tableaux</li></NavLink>
                <NavLink to="/objets/cartes-postales"><li>Cartes postales</li></NavLink>
                <NavLink to="/objets/divers"><li>Divers</li></NavLink>
            </ul>
        </div>

    );
}