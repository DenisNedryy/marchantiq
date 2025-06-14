import { NavLink } from "react-router-dom";
import { HOST } from "../../host/host";
import { useState, useEffect, useRef } from "react";
import { useWindowSize } from "../../hooks/useWindowSize.js";

export function Carrousel({ items }) {

    const [cpt, setCpt] = useState(0);
    const itemsRef = useRef(null);
    const containerRef = useRef(null);
    const [myItems, setMyItems] = useState([]);
    const { width } = useWindowSize();
    const [ficheWidth, setFicheWidth] = useState(217); // 205w + 12 margin-right

    let turn = 0;
    let nbArticlePerVision = 3;

    useEffect(() => {
        if (width < 750) {
            setFicheWidth(306);
        }
    }, [width]);

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



    function turnLeft() {
        turn--;
        if (turn <= 0) turn = 0;
        itemsRef.current.style.transform = `translateX(-${ficheWidth * turn}px)`;
    }

    function turnRight() {
        itemsRef.current.style.transitionDuration = "1s";
        if (width >= 1068) {
            if (turn + 2 >= items.length - 1) {
                return;
            }
        } else if (width >= 750 && width <= 1067) {
            if (turn + 1 >= items.length - 1) {
                return;
            }
        }else if(width<750){
              if (turn >= items.length - 1) {
                return;
            }
        }
        turn++;
        itemsRef.current.style.transform = `translateX(-${ficheWidth * turn}px)`;
    }

    return (
        <>
            <div className="carrousel" ref={containerRef}>
                <div className="carrousel__slides" ref={itemsRef}>
                    {items.map((item, index) => (
                        <NavLink to={`/items/${invertedCategoryMap[item.category]}/items-details/${item.uuid}`} key={index} className="carrousel__slides__slide">
                            {item && item.img_url.length > 0 && <img src={`${HOST}/api/images/items/${item.img_url[0].img_url}`} />}
                            <p className="carrousel__slides__slide--name">{item.name}</p>
                            <p className="carrousel__slides__slide--price">{item.price}<span className="symbol-euro">€</span></p>
                        </NavLink>
                    ))}
                </div>
                <i className="fa-solid fa-angles-left newsTurnLeft" onClick={turnLeft} />
                <i className="fa-solid fa-angles-right newsTurnRight" onClick={turnRight} />
            </div>
        </>
    );
}