import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemsByResearch } from "../../services/items";
import { Items } from "./Items";
import notFound404 from "../../assets/pictures/photos/notFound404.png";

export function SearchedItems() {
    const { searchedValue } = useParams();
    const [items, setItems] = useState([]);
    const [itemsVide, setItemsVide] = useState(false);

    useEffect(() => {
        controller();
    }, [searchedValue]);

    async function controller() {
        const res = await getItemsByResearch(searchedValue);
        const foundItems = res.items || [];
        setItems(foundItems);
        setItemsVide(foundItems.length === 0);
    }

    return (
        <>
            <div className="searchItems">
                {items && items.length > 0 && <Items itemsData={items} />}
                {itemsVide && (
                    <div className="box">
                        <h2>Objets - 404</h2>
                        <img src={notFound404} />
                    </div>
                )}
            </div>
        </>
    );
}