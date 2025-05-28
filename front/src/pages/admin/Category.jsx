import { useState } from "react";
import { Items } from "../../pages/admin/items/Items";
import hawai from "../../assets/pictures/photos/hawai.png";
import jf from "../../assets/pictures/photos/jf.jpg";
import { NavLink } from "react-router-dom";

export function Category({ setView }) {

    const [items, setItems] = useState(true);

    return (
        <>
            <div class="steps">
                <img src={jf} />
                <p>Etape <span className="bold">1</span> sur <span className="bold">5</span></p>
                <h3>Choisir une categorie</h3>

                <div className="steps__category">
                    <button className="btn" onClick={()=>setView("items")}>Objets</button><button className="btn" onClick={()=>setView("news")}>Articles</button>
                </div>
            </div>
        </>
    );
}