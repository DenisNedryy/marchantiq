import { HOST } from "../../host/host";

export function Carrousel_mini({ images }) {

    return (
        <div className="carrouselMini">
            <div className="carrouselMini__pictures">
                <div className="carrouselMini__pictures__view" >
                    <div className="carrouselMini__pictures__view__slides">
                        {images.map((image, index) => (
                            <div className="carrouselMini__pictures__view__slides__slide" key={index}>
                                <img src={`${HOST}/api/images/items/${image.img_url}`}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}