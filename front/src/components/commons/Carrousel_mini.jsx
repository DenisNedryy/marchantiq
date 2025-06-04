import { useState, useRef } from "react";

import { HOST } from "../../host/host";

export function Carrousel_mini({ images }) {

    const [preview, setPreview] = useState(0);
    const slideRef = useRef(null);
    const bigImgRef = useRef(null);
    const bigImgNinjaRef = useRef(null);

    let ficheWidth = 50; // 205w + 12 margin-right
    let turn = 0;

    async function handleShow(e) {
        const img = e.target;
        const index = img.getAttribute("data-index");

        setPreview(index);

        bigImgRef.current.style.animation = "none";
        void bigImgRef.current.offsetWidth;

        bigImgRef.current.style.animation = "myAnim .6s ease 0s 1 normal forwards";

        setTimeout(() => {
            bigImgRef.current.style.animation = "";
        }, 600);
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
            <div className="carrouselMini__previewContainer">
                <img src={`${HOST}/api/images/items/${images[preview>0? preview-1 : preview].img_url}`} className="carrouselMini--previewNinja" onClick={showImgFromApi} ref={bigImgNinjaRef} />
                <img src={`${HOST}/api/images/items/${images[preview].img_url}`} className="carrouselMini--preview" onClick={showImgFromApi} ref={bigImgRef} />
            </div>
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