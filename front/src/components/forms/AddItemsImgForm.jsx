import { addImage } from "../../services/items";
import { useNavigate } from "react-router-dom";

export function AddItemsImgForm({ itemUuid, onUpdate, category }) {

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData();
        formData.append("img_url", form.elements['img_url'].files[0]);
        const res = await addImage(formData, itemUuid);
        onUpdate()
        form.reset();
    }

    async function handleClick() {
        navigate(`/items/${category}/items-details/${itemUuid}`);
    }

    return (
        <form onSubmit={handleSubmit} className="createImg">
            <div>
                <label>Image</label>
                <input type="file" name="img_url" />
            </div>

            <div className="form-buttons">
                <button type="submit" className="btn">Ajouter une image</button>
                <button type="button" className="btn" onClick={handleClick}>Terminer</button>
            </div>
        </form>
    );
}