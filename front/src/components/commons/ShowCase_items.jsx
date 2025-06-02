import { getItems } from "../../services/items";
import { useState, useEffect } from "react";
import { Carrousel} from "./Carrousel";

export function ShowCase_items(){

    const [ items, setItems ] = useState([]);

    useEffect(()=>{
        getMyItems();
        async function getMyItems(){
            const res = await getItems();
            setItems(res.items);
        }
    },[]);

    return (
        <div className="showCaseArticles">
            <div className="box">
                <h2>Nouveautés</h2>
                <Carrousel items={items} />
            </div>
        </div>
    );
}