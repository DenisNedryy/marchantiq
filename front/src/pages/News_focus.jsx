import { useState, useEffect } from "react";
import { getOneNews } from "../services/news";
import { HOST } from "../host/host";

export function News_focus() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        getMyNews();
        async function getMyNews() {
            const uuid = getIdParams();
            const res = await getOneNews(uuid);
            if (res) setNews(res.oneNews);
        }
    }, []);

    function getIdParams() {
        const str = window.location.href;
        const url = new URL(str);
        return url.searchParams.get("id");
    }

    return (
        <div className="newsFocus">
            <div className="box">
                <h2>Actualité</h2>
                {news && news.length !== 0 && (
                    <div className="actuality">
                        <div className="actuality__news">
                            <p>{news.titre}</p>
                            <img src={`${HOST}/api/images/news/${news.img_url}`} />
                        </div>
                        <p className="news-description">{news.description}</p>
                        <div className="actuality__threads">
                            {news.threads && news.threads.map((thread, index2) => (
                                <div key={index2} className="actuality__threads__thread">
                                    <p className="thread-soustitre inter">{thread.sous_titre}</p>
                                    <p className="thread-description inter-regular">{thread.description}</p>
                                    <div className="actuality__threads__thread__img">
                                        {thread.images.length > 1 &&
                                            thread.images.map((cell, index3) => (
                                                <div key={index3} className="actuality__threads__thread__img__imgETlegend">
                                                    <img src={`${HOST}/api/images/threads/${cell.img_url}`} />
                                                    <p>{cell.commentaire}</p>
                                                </div>
                                            ))

                                        }
                                        {thread.images.length === 1 &&
                                            <div className="actuality__threads__thread__img__imgETlegend" style={{width:"100%"}}>
                                                <img src={`${HOST}/api/images/threads/${thread.images[0].img_url}`} style={{height:"337px",width:"100%"}}/>
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