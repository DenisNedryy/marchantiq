import { HOST } from "../../host/host";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { PaginationBottom } from "./PaginationBottom";

export function DisplayNews({ data }) {

    const location = useLocation();
    const itemsPerPage = 6;
    const [myCurrentPage, setMyCurrentPage] = useState(1);
    const [nbPage, setNbPage] = useState();
    const [items, setItems] = useState([]);

    function truncate(str, n) {
        return str && str.length > n ? str.substr(0, n) + "..." : str;
    }

    useEffect(() => {
        controller();
    }, [location]);

    async function controller() {
        const currentPage = getQueryStringPage();
        setMyCurrentPage(currentPage);
        const myPageLength = Math.ceil(data.length / itemsPerPage);
        setNbPage(myPageLength);

        const itemsPerPagination = getItemsPerPagination(data, itemsPerPage, currentPage);

        setItems(itemsPerPagination);
    }


    function getQueryStringPage() {
        const str = window.location.href;
        const url = new URL(str);
        return url.searchParams.get("page") || 1;
    }

    function getItemsPerPagination(items, itemsPerPage, page) {
        const itemsForThisPage = [];
        for (let i = (itemsPerPage) * (page - 1); i < itemsPerPage * page; i++) {
            if (items[i] == undefined) break;
            itemsForThisPage.push(items[i]);
        }
        return itemsForThisPage;
    }

    return (
        <>
            <div className="displayNews" key={myCurrentPage}>
                {[...items].reverse().map((news, index) => (
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
            <PaginationBottom pageLength={nbPage} currentPage={myCurrentPage} route={`/news`} itemsPerPage={itemsPerPage} />
        </>
    );
}