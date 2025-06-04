import { useState, useEffect } from "react";
import { getItemsByCategory } from "../../services/items";
import { NavLink, useParams } from "react-router-dom";
import { HOST } from "../../host/host";

export function Items() {

    const { category } = useParams();
    const [items, setItems] = useState([]);

    const categoryMap = {
        "furniture": "Mobilier",
        "knick-knacks": "Bibelots",
        "militaria": "Militaria",
        "books": "Livres",
        "numismatics": "Numismatiques",
        "paintings": "Tableaux",
        "postcards": "Cartes postales",
        "miscellaneous": "Divers"
    };



    useEffect(() => {
        getMyItemsByCategory();
        async function getMyItemsByCategory() {
            const myCategory = categoryMap[category];
            const res = await getItemsByCategory(myCategory);
            if (res && res.items) {
                setItems(res.items)
            } else {
                setItems([]);
            }
        }
    }, [category]);

    return (
        <div className="items">
            <div className="box">
                <h2>{categoryMap[category]}</h2>
                <div className="items__container">
                    {items && items.length > 0 && items.map((item, index) => (
                        <NavLink to={`/items/${category}/items-details/${item.uuid}`} key={index} className="items__container__item item-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}>
                            {item.isNew && <div className="items__container__item--banner">Nouveau</div>}
                            <img src={`${HOST}/api/images/items/${item.images[0].img_url}`} />
                            <div className="items__container__item__text">
                                <p className="items__container__item__text--name">{item.name}</p>
                                <p className="items__container__item__text--price">{item.price}<span className="symbol-euro">€</span></p>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}