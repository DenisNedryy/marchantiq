import { updateItemImage } from "../../services/items";
import { useNavigate } from "react-router-dom";

export function UpdateItemsImgForm({ itemsUuid, imgUuid, category }) {

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData();
        formData.append("img_url", form.elements['img_url'].files[0]);
        const res = await updateItemImage(imgUuid, formData);
        console.log(res);
        form.reset();
        navigate(`/items/${category}/items-details/${itemsUuid}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>image</label>
                    <input type="file" name="img_url" />
                </div>
                <button type="submit" className="btn">Modifier l'image</button>
            </form>
        </>
    );
}