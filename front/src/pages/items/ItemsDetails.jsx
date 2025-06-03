import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HOST } from "../../host/host";
import { getOneItem } from "../../services/items";
import { Carrousel_mini } from "../../components/commons/Carrousel_mini";
import { NavLink } from "react-router-dom";

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
        <div className="box">
            {item && item !== null && (
                <>
                    <h2>{item.name}</h2>
                    <div className="itemDetails">
                        <div className="itemsDetails__text">
                            <p><span className="bold">Prix:</span> {item.price} €</p>
                            {item.artist && (
                                <p><span className="bold">Artiste:</span> {item.artist}</p>
                            )}
                            {item.state && (
                                <p><span className="bold">État:</span> {item.state}</p>
                            )}
                            {item.matiere && (
                                <p><span className="bold">Matière:</span> {item.matiere}</p>
                            )}
                            {item.longeur && (
                                <p><span className="bold">Longueur:</span> {item.longeur} cm</p>
                            )}
                            {item.largeur && (
                                <p><span className="bold">Largeur:</span> {item.largeur} cm</p>
                            )}
                            {item.hauteur && (
                                <p><span className="bold">Hauteur:</span> {item.hauteur} cm</p>
                            )}
                            {item.diam && (
                                <p><span className="bold">Diamètre:</span> {item.diam} cm</p>
                            )}
                            {item.profondeur && (
                                <p><span className="bold">Profondeur:</span> {item.profondeur} cm</p>
                            )}
                            {item.style && (
                                <p><span className="bold">Style:</span> {item.style}</p>
                            )}
                            {item.epoque && (
                                <p><span className="bold">Époque:</span> {item.epoque}</p>
                            )}
                            {item.year && (
                                <p><span className="bold">Année:</span> {item.year}</p>
                            )}
                            {item.category && (
                                <p><span className="bold">Catégorie:</span> {item.category}</p>
                            )}
                            {item.description && (
                                <p><span className="bold">Description:</span> {item.description}</p>
                            )}
                            <NavLink to="/contact"><button className="btn">Me contacter</button></NavLink>
                        </div>
                        <div className="itemsDetails__img">
                            <Carrousel_mini images={item.img_url}/>
                        </div>
                    </div>

                </>
            )
            }
        </div>
    );
}