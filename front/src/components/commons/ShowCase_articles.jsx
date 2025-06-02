import { getNews } from "../../services/news";
import { useState, useEffect } from "react";
import { HOST } from "../../host/host";
import { NavLink } from "react-router-dom";

export function ShowCase_articles() {

    const [news, setNews] = useState([]);

    useEffect(() => {
        getMyNews();
        async function getMyNews() {
            const res = await getNews();
            setNews(res.news[res.news.length - 1]);
        }
    }, []);

    function truncate(str, n) {
        return str && str.length > n ? str.substr(0, n) + "..." : str;
    }

    return (
        <div className="showCaseArticles">
            <div className="box">
                <h2>À la une</h2>
                <div className="showCaseArticles__container">
                    <img src={`${HOST}/api/images/news/${news.img_url}`} />
                    <NavLink to={`/newsCorner/news?id=${news.uuid}`}><button className="btn">Visiter</button></NavLink>
                    <div className="showCaseArticles__container__textContainer">
                        <p className="showCaseArticles__container__textContainer--title">{news.titre}</p>
                        <p className="showCaseArticles__container__textContainer--description">{truncate(news.description, 235)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}