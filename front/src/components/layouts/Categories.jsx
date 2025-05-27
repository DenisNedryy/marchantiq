import mobilier from "../../assets/pictures/icon/categories/cabinet.png";
import bibelots from "../../assets/pictures/icon/categories/bibelots.png";
import militaria from "../../assets/pictures/icon/categories/militaria.png";
import livre from "../../assets/pictures/icon/categories/livre.png";
import numismatique from "../../assets/pictures/icon/categories/numismatique.png";
import tableaux from "../../assets/pictures/icon/categories/chevalet.png";
import poste from "../../assets/pictures/icon/categories/poste.png";
import divers from "../../assets/pictures/icon/categories/divers.png";

export function Categories() {

    return (

        <div className="categories">
            <h2>Categories</h2>
            <ul>
                <li><img src={mobilier} />Mobilier</li>
                <li><img src={bibelots} />Bibelots</li>
                <li><img src={militaria} />Militaria</li>
                <li><img src={livre} />Livres</li>
                <li><img src={numismatique} />Numismatiques</li>
                <li><img src={tableaux} />Tableaux</li>
                <li><img src={poste} />Cartes postales</li>
                <li><img src={divers} />Divers</li>
            </ul>
        </div>

    );
}