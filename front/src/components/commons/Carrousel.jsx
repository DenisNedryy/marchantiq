import { NavLink } from "react-router-dom";
import { HOST } from "../../host/host";
import { useState, useEffect, useRef } from "react";
import { useWindowSize } from "../../hooks/useWindowSize.js";

export function Carrousel({ items }) {
    const [cpt, setCpt] = useState(0);
    const itemsRef = useRef(null);
    const containerRef = useRef(null);
    const { width } = useWindowSize();
    const [ficheWidth, setFicheWidth] = useState(217);
    const [nbItemsDisplayed, setNbItemsDisplayed] = useState(1);

    useEffect(() => {

        if (containerRef.current && itemsRef.current && items.length > 0) {
            const slide = itemsRef.current.querySelector('.carrousel__slides__slide');
            if (slide) {
                const slideWidth = slide.offsetWidth;
                setFicheWidth(slideWidth + 12);
                // Utilise floor ici pour ne jamais dépasser la largeur du container
                if (width < 422) {
                    setNbItemsDisplayed(1);
                } else {
                    setNbItemsDisplayed(Math.floor(containerRef.current.offsetWidth / slideWidth));
                }
            }
        }
        setCpt(0);
    }, [width, items]);

    useEffect(() => {
        if (itemsRef.current) {
            itemsRef.current.style.transitionDuration = "1s";
            itemsRef.current.style.transform = `translateX(-${ficheWidth * cpt}px)`;
        }
    }, [cpt, ficheWidth]);

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

    // On ne doit pas scroller au-delà du dernier item aligné à droite
    const maxCpt = Math.max(0, items.length - nbItemsDisplayed);

    function turnLeft() {
        setCpt(prevCpt => (prevCpt > 0 ? prevCpt - 1 : 0));
    }

    function turnRight() {
        setCpt(prevCpt => (prevCpt < maxCpt ? prevCpt + 1 : prevCpt));
    }

    return (
        <div className="carrousel" ref={containerRef}>
            <div className="carrousel__slides" ref={itemsRef}>
                {items.map((item, index) => (
                    <NavLink
                        to={`/items/${invertedCategoryMap[item.category]}/items-details/${item.uuid}`}
                        key={index}
                        className="carrousel__slides__slide"
                    >
                        {item && item.img_url.length > 0 && (
                            <img src={`${HOST}/api/images/items/${item.img_url[0].img_url}`} alt={item.name} />
                        )}
                        <p className="carrousel__slides__slide--name">{item.name}</p>
                        <p className="carrousel__slides__slide--price">
                            {item.price}
                            <span className="symbol-euro">€</span>
                        </p>
                    </NavLink>
                ))}
            </div>
            <i className="fa-solid fa-angles-left newsTurnLeft" onClick={turnLeft} />
            <i className="fa-solid fa-angles-right newsTurnRight" onClick={turnRight} />
        </div>
    );
}
