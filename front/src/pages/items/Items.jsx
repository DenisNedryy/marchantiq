import { useState, useEffect, useRef } from "react";
import { getItemsByCategory } from "../../services/items";
import { NavLink, useParams, useLocation } from "react-router-dom";
import { HOST } from "../../host/host";
import { PaginationBottom } from "../../components/commons/PaginationBottom";

export function Items({itemsData=[]}) {

    const { category } = useParams();
    const [items, setItems] = useState([]); 
    const location = useLocation();
    const itemsPerPage = 6;
    const [myCurrentPage, setMyCurrentPage] = useState(1);
    const [nbPage, setNbPage] = useState();
    const itemContainerRef = useRef(null);

    const categoryMap = {
        "furniture": "mobilier",
        "knick-knacks": "bibelot",
        "militaria": "militaria",
        "books": "livre",
        "numismatics": "numismatique",
        "paintings": "tableau",
        "postcards": "carte-postale",
        "miscellaneous": "divers"
    };


    useEffect(() => {
        controller();
    }, [category, location, itemsData]);

    async function controller() {
        const itemsByCategory = itemsData.length===0 ? await getMyItemsByCategory() : itemsData;
        const currentPage = getQueryStringPage();
        setMyCurrentPage(currentPage);
        const myPageLength = Math.ceil(itemsByCategory.length / itemsPerPage);
        setNbPage(myPageLength);

        const itemsPerPagination = getItemsPerPagination(itemsByCategory, itemsPerPage, currentPage);
         
        setItems(itemsPerPagination); 
    }

    async function getMyItemsByCategory() {
        const myCategory = categoryMap[category];
        const res = await getItemsByCategory(myCategory);
        return res.items || [];
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
        <div className="items">
            <div className="box">
                <h2>{categoryMap[category]}</h2>
              <div className="items__container" key={myCurrentPage}>
                    {items && items.length > 0 && items.map((item, index) => (
                        <NavLink to={`/items/${category}/items-details/${item.uuid}`} key={index} className="items__container__item item-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }} ref={itemContainerRef}>
                            {item.isNew && <div className="items__container__item--banner">Nouveau</div>}
                            <img src={`${HOST}/api/images/items/${item.images[0].img_url}`} />
                            <div className="items__container__item__text">
                                <p className="items__container__item__text--name">{item.name}</p>
                                <p className="items__container__item__text--price">{item.price}<span className="symbol-euro">€</span></p>
                            </div>
                        </NavLink>
                    ))}
                </div>
                
                <PaginationBottom pageLength={nbPage} currentPage={myCurrentPage} route={`/items/${category}`} itemsPerPage={itemsPerPage}/>
            </div>
        </div>
    );
}