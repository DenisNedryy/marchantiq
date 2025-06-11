import { useState, useEffect } from "react";
import { getOneNews, deleteNews } from "../services/news";
import { deleteThreadImg, deleteThread } from "../services/threads";
import { HOST } from "../host/host";
import { useAuth } from "../contexts/AuthContext";
import { NavLink, useParams, useNavigate } from "react-router-dom";

export function News_focus() {

    const [news, setNews] = useState([]);
    const { state, dispatch } = useAuth();
    const { uuid } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getMyNews();
    }, []);

    async function getMyNews() {
        const res = await getOneNews(uuid);
        if (res) setNews(res.oneNews);
    }

    function showImgFromApi(e) {
        window.open(e.target.src);
    }

    async function deleteMyThreadImg(e) {
        e.preventDefault();
        const btnEl = e.target;
        const img_uuid = btnEl.getAttribute("data-id");

        const res = await deleteThreadImg(img_uuid);
        console.log(res);
        await getMyNews();
    }

    async function deleteMyArticle(e) {
        e.preventDefault();
        const res = await deleteNews(uuid);
        console.log(res);
        navigate("/news");
    }

    async function deleteMyThread(e) {
        e.preventDefault();
        const thread_uuid = e.target.getAttribute("data-id");
        const res = await deleteThread(thread_uuid);
        console.log(res);
        await getMyNews();
    }

    return (
        <div className="newsFocus">
            <div className="box">
                <h2>Actualité</h2>
                {news && news.length !== 0 && (
                    <div className="actuality">
                        <div className="actuality__news">
                            <p className="actuality__news--title">{news.titre}</p>
                            <p className="news-description">{news.description}</p>
                            <img src={`${HOST}/api/images/news/${news.img_url}`} onClick={showImgFromApi} />
                            {state.isConnected && <button className="btn btn-deleteNews" onClick={deleteMyArticle}>Suprimer l'article</button>}
                            {state.isConnected && <NavLink to={`/admin/updateArticle?id=${uuid}`}><button className="btn btn-updateNews">Modifier l'article</button></NavLink>}
                        </div>

                        {/*------threads-----*/}
                        <div className="actuality__threads">
                            {state.isConnected && <NavLink to={`/admin/addArticles?step=3&id=${news.uuid}`}><button className="btn btn-createThread">Ajouter un chapitre</button></NavLink>}
                            {news.threads && news.threads.map((thread, index2) => (
                                <div key={index2} className="actuality__threads__thread">

                                    {state.isConnected && <NavLink to={`/admin/updateThread?newsId=${news.uuid}&threadId=${thread.uuid}`}><button className="btn btn-updatedThread">Modifier</button></NavLink>}
                                    {state.isConnected && <button className="btn btn-deleteThread" onClick={deleteMyThread} data-id={thread.uuid}>Supprimer</button>}
                                    <p className="thread-soustitre inter">{thread.sous_titre}</p>
                                    <p className="thread-description inter-regular">{thread.description}</p>
                                    {/*------threads img-----*/}
                                    <div className="actuality__threads__thread__img">
                                        {thread.images.length > 1 &&
                                            thread.images.map((cell, index3) => (
                                                <div key={index3} className="actuality__threads__thread__img__imgETlegend">
                                                    {state.isConnected && <NavLink to={`/admin/updateThreadImg?newsId=${news.uuid}&threadImgId=${cell.uuid}`}><button className="btn btn-createThread">Modifier l'image</button></NavLink>}
                                                    {state.isConnected && <button className="btn btn-deleteThreadImg" data-id={cell.uuid} onClick={deleteMyThreadImg}>Supprimer l'image</button>}
                                                    <img src={`${HOST}/api/images/threads/${cell.img_url}`} onClick={showImgFromApi} />
                                                    <p>{cell.commentaire}</p>
                                                </div>
                                            ))
                                        }
                                        {thread.images.length === 1 &&
                                            <div className="actuality__threads__thread__img__imgETlegend" style={{ width: "100%" }}>
                                                {state.isConnected && <NavLink to={`/admin/updateThreadImg?newsId=${news.uuid}&threadImgId=${thread.images[0].uuid}`}><button className="btn btn-createThread">Modifier l'image</button></NavLink>}
                                                {state.isConnected && <button className="btn btn-deleteThreadImg" data-id={thread.images[0].uuid} onClick={deleteMyThreadImg}>Supprimer l'image</button>}
                                                <img src={`${HOST}/api/images/threads/${thread.images[0].img_url}`} className="soloImgThread" onClick={showImgFromApi} />
                                                <p>{thread.images[0].commentaire}</p>
                                            </div>
                                        }




                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
}