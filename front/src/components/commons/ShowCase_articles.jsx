import { getNews } from "../../services/news";
import { useState, useEffect } from "react";
import { HOST } from "../../host/host";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { isUserConnected } from "../../services/users";

export function ShowCase_articles() {

    const [news, setNews] = useState([]);
    const { state, dispatch } = useAuth();

    useEffect(() => {
        checkAuthStatus();
    }, []);

    async function checkAuthStatus() {
        const resUser = await isUserConnected();
        if (resUser.ok && resUser.data.isUser) {
            dispatch({ type: "SET_USER", payload: true });
        } else {
            dispatch({ type: "LOGOUT" });
        }
    }


    useEffect(() => {
        getMyNews();
        async function getMyNews() {
            const res = await getNews();
            if (res && res.news) {
                setNews(res.news[res.news.length - 1]);
            }
        }
    }, []);

    function truncate(str, n) {
        return str && str.length > n ? str.substr(0, n) + "..." : str; 
    }

    return (
        // Object.keys(news).length>0 ? (
            <div className="showCaseArticles">
                <div className="box">
                    <h2>À la une</h2>
                    <div className="showCaseArticles__container">
                        <img src={`${HOST}/api/images/news/${news.img_url}`} />
                        <NavLink to={`/news/news-details/${news.uuid}`}><button className="btn jump">Visiter</button></NavLink>
                        <div className="showCaseArticles__container__textContainer">
                            <p className="showCaseArticles__container__textContainer--title">{news.titre}</p> 
                            <p className="showCaseArticles__container__textContainer--description">{truncate(news.description, 235)}</p>
                        </div>
                    </div>
                </div>
            </div>
        // ) : (
        //     state.isConnected && <NavLink to="/admin/addArticles"><button className="btn">Créer un article</button></NavLink>
        // )



    );
}