import { useState, useRef } from "react";

import { HOST } from "../../host/host";

export function Carrousel_mini({ images }) {

    const [preview, setPreview] = useState(0);
    const slideRef = useRef(null);

    let ficheWidth = 50; // 205w + 12 margin-right
    let turn = 0;

    function handleShow(e) {
        const img = e.target;
        const index = img.getAttribute("data-index");
        setPreview(index);
    }

    function turnLeft() {
        turn--;
        if (turn <= 0) turn = 0;
        slideRef.current.style.transform = `translateX(-${ficheWidth * turn}px)`;
    }

    function turnRight() {
        slideRef.current.style.transitionDuration = "1s";
        if (turn + 4 >= images.length - 1) return;
        turn++;
        slideRef.current.style.transform = `translateX(-${ficheWidth * turn}px)`;
    }

    function showImgFromApi() {
        window.open(`${HOST}/api/images/items/${images[preview].img_url}`)
    }

    return (
        <div className="carrouselMini">
            <img src={`${HOST}/api/images/items/${images[preview].img_url}`} className="carrouselMini--preview" onClick={showImgFromApi} />
            <div className="carrouselMini__pictures">
                <div className="carrouselMini__pictures__view" >
                    <div className="carrouselMini__pictures__view__slides" ref={slideRef}>
                        {images.map((image, index) => (
                            <div className="carrouselMini__pictures__view__slides__slide" key={index}>
                                <img src={`${HOST}/api/images/items/${image.img_url}`} onClick={handleShow} data-index={index} />
                            </div>
                        ))}
                    </div>
                </div>
                <i className="fa-solid fa-caret-left turnLeft" onClick={turnLeft} />
                <i className="fa-solid fa-caret-right turnRight" onClick={turnRight} />
            </div>
        </div>
    );
}