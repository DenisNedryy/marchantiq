import { NavLink } from "react-router-dom";
import { HOST } from "../../host/host";

export function Carrousel({ items }) {

    return (
        <>
            <div className="carrousel">
                <div className="carrousel__slides">
                    {items.map((item, index) => (
                        <NavLink to={``} key={index} className="carrousel__slides__slide">
                            {item && item.img_url.length > 0 && <img src={`${HOST}/api/images/items/${item.img_url[0].img_url}`} />}
                            <p className="carrousel__slides__slide--name">{item.name}</p>
                            <p className="carrousel__slides__slide--price">Prix: {item.price}<span className="symbol-euro">€</span></p>
                        </NavLink>
                    ))}
                    <i class="fa-solid fa-angles-left newsTurnLeft"/>
                    <i class="fa-solid fa-angles-right newsTurnRight"/>
                </div>
            </div>
        </>
    );
}