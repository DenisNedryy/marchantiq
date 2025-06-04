import { HOST } from "../../host/host";
import { NavLink } from "react-router-dom";

export function DisplayNews({ data }) {

    function truncate(str, n) {
        return str && str.length > n ? str.substr(0, n) + "..." : str;
    }

    return (
        <div className="displayNews">
            {[...data].reverse().map((news, index) => (
                <div key={index} className="displayNews__container item-fade-in" data-id={news.uuid} 
                            style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="displayNews__container__img">
                        <img src={`${HOST}/api/images/news/${news.img_url}`} />
                    </div>
                    <div className="displayNews__container__text">
                        <p>{truncate(news.titre, 135)}</p>
                        <NavLink to={`/news/news-details/${news.uuid}`}><button className="btn">Visiter</button></NavLink>
                    </div>
                </div>
            ))}
        </div>
    );
}