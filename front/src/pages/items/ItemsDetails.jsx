import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HOST } from "../../host/host";
import { getOneItem } from "../../services/items";


export function ItemsDetails() {

    const { uuid } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        getMyItem();
        async function getMyItem() {
            const res = await getOneItem(uuid);
            setItem(res.item);
        }
    }, [uuid]);

    return (
        <>
            <div className="box">
                {item && item !== null &&
                    <h2>{item.name}</h2>
                }
            </div>
        </>
    );
}