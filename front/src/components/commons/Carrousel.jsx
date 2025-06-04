import { NavLink } from "react-router-dom";
import { HOST } from "../../host/host";
import { useState, useEffect, useRef } from "react";

export function Carrousel({ items }) {

    const [cpt, setCpt] = useState(0);
    const itemsRef = useRef(null);
    const containerRef = useRef(null);
    const [myItems, setMyItems] = useState([]);

    let ficheWidth = 217; // 205w + 12 margin-right
    let turn = 0;
    let nbArticlePerVision = 3;

    // useEffect(() => {
    //     if (items && items.length > 0) setMyItems(items);
    //     // if (items && items.length > 0) createClones();
    //     updateVisionWidth();
    // }, [items]);


    // function updateVisionWidth() {
    //     const articleContainerWidth = itemsRef.current.offsetWidth;
    //     ficheWidth = Math.floor(articleContainerWidth / nbArticlePerVision);
    //     if (items.length === 3) {
    //         containerRef.current.style.width = "546px"; // 174*3 + 24
    //     } else if (items.length === 2) {
    //         containerRef.current.style.width = "360px"; // 174*2 + 12
    //     } else if (items.length === 1) {
    //         containerRef.current.style.width = "174px";
    //     }
    // }

    function createClones() {
        for (let i = 0; i < 4; i++) {
            setMyItems(prevState => ([...prevState, prevState[i]]));
        }
    }

    function turnLeft() {
        turn--;
        if (turn <= 0) turn = 0;
        itemsRef.current.style.transform = `translateX(-${ficheWidth * turn}px)`;
    }

    function turnRight() {
        itemsRef.current.style.transitionDuration = "1s";
        if(turn+2>=items.length-1) return;
        turn++;
        itemsRef.current.style.transform = `translateX(-${ficheWidth * turn}px)`;
        // if (turn === items.length + 1 - nbArticlePerVision) {
        //     setTimeout(() => {
        //         itemsRef.current.style.transitionDuration = "1s";
        //         turn = 1;
        //         itemsRef.current.style.transform = `translateX(-${ficheWidth * turn}px)`;
        //     }, 10);
        //     itemsRef.current.style.transitionDuration = "0s";
        //     turn = 0;
        //     itemsRef.current.style.transform = `translateX(${0}px)`;
        //     return;
        // }
    }

    return (
        <>
            <div className="carrousel" ref={containerRef}>
                <div className="carrousel__slides" ref={itemsRef}>
                    {items.map((item, index) => (
                        <NavLink to={`/items/${item.category}/items-details/${item.uuid}`} key={index} className="carrousel__slides__slide">
                            {item && item.img_url.length > 0 && <img src={`${HOST}/api/images/items/${item.img_url[0].img_url}`} />}
                            <p className="carrousel__slides__slide--name">{item.name}</p>
                            <p className="carrousel__slides__slide--price">Prix: {item.price}<span className="symbol-euro">€</span></p>
                        </NavLink>
                    ))}
                </div>
                <i className="fa-solid fa-angles-left newsTurnLeft" onClick={turnLeft} />
                <i className="fa-solid fa-angles-right newsTurnRight" onClick={turnRight} />
            </div>
        </>
    );
}