import { ShowCase_articles } from "../components/commons/ShowCase_articles";
import { ShowCase_items } from "../components/commons/ShowCase_items";

export function Accueil() {
    return (
        <div className="accueil">

            <ShowCase_articles />
            <ShowCase_items />
        </div>
    );
}