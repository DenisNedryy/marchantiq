import { HOST } from "../../host/host";
import { NavLink } from "react-router-dom";

export function DisplayNews({ data }) {

    return (
        <div className="displayNews">
            {[...data].reverse().map((news, index) => (
                <div key={index} className="displayNews__container" data-id={news.uuid}>
                    <div className="displayNews__container__img">
                        <img src={`${HOST}/api/images/news/${news.img_url}`} />
                    </div>
                    <div className="displayNews__container__text">
                        <p>{news.titre}</p>
                        <NavLink to={`/newsCorner/news?id=${news.uuid}`}><button className="btn">Visiter</button></NavLink>
                    </div>
                </div>
            ))}
        </div>
    );
}