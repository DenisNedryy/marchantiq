import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HOST } from "../../host/host";
import { getOneItem } from "../../services/items";
import { Carrousel_mini } from "../../components/commons/Carrousel_mini";
import { NavLink } from "react-router-dom";
import { deleteItem } from "../../services/items";
import { useAuth } from "../../contexts/AuthContext";

export function ItemsDetails() {

    const { uuid, category } = useParams();
    const [item, setItem] = useState(null);
    const navigate = useNavigate();
    const { state, dispatch } = useAuth();

    const invertedCategoryMap = {
        "mobilier": "furniture",
        "bibelot": "knick-knacks",
        "militaria": "militaria",
        "livre": "books",
        "numismatique": "numismatics",
        "tableau": "paintings",
        "carte-postale": "postcards",
        "divers": "miscellaneous"
    };

    useEffect(() => {
        getMyItem();
    }, [uuid]);


    async function getMyItem() {
        const res = await getOneItem(uuid);
        setItem(res.item);
    }

    async function handleDeleteItem(e) {
        const btn = e.target;
        const id = btn.getAttribute("data-id");
        const res = await deleteItem(id);
        console.log(res);
        navigate(`/items/${category}`);
    }

    async function handleUpdateItem() {
        navigate(`/admin/updateItems?id=${uuid}`);
    }

    function aeration(val) {
        const valArr = val.split(".");
        return valArr
            .filter(sentence => sentence.trim() !== "")
            .map((sentence, index) => (
                <span key={index}>
                    {sentence.trim()}.<br />
                </span>
            ));
    }

    return (
        <div className="box">
            {item && item !== null && (
                <>
                    <h2>{item.name}</h2>
                    <div className="itemDetails">
                        <div className="itemsDetails__text">
                            {state.isConnected && (<div className="itemsDetails__text__buttons">
                                <i className="fa-solid fa-pen btn-modify-items" data-id={item.uuid} onClick={handleUpdateItem} />
                                <i className="fa-solid fa-trash btn-delete-items" data-id={item.uuid} onClick={handleDeleteItem} />
                            </div>)}
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
                                <div><span className="bold">Description:</span> {aeration(item.description)}</div>
                            )}
                            <NavLink to={`/contact/${uuid}`}><button className="btn jump">Me contacter</button></NavLink>
                        </div>
                        <div className="itemsDetails__img">
                            <Carrousel_mini itemUuid={item.uuid} images={item.img_url} onUpdateItems={getMyItem} />
                        </div>
                    </div>

                </>
            )
            }
        </div>
    );
}