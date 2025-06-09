import { ShowCase_articles } from "../components/commons/ShowCase_articles";
import { ShowCase_items } from "../components/commons/ShowCase_items";
import { Flyers } from "../components/commons/Flyers";
import { useState, useEffect } from "react";

export function Accueil() {

    const [isArticlesLoaded, setIsArticlesLoaded] = useState(true);
    const [isItemsLoaded, setIsItemsLoaded] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsArticlesLoaded(false);
        }, [100]);
        setTimeout(() => {
            setIsItemsLoaded(false);
        }, [200]);
    }, []);

    return (
        <div className="accueil">
            <ShowCase_articles />
            {!isArticlesLoaded && <ShowCase_items />}
            {!isItemsLoaded && <Flyers />}
        </div>
    );
}