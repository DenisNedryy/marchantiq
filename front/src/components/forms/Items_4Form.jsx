import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addImage, createItem } from "../../services/items";

export function Items_4Form({ onUpdateForm, uuid, isFirstImgAdd, mergedItemsForms, setIsFirstImgAdd }) {

    const [isNew, setIsNew] = useState(true);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const imgUrl = form.elements['img_url'].files[0];
        const formData = new FormData();
        formData.append("img_url", imgUrl);

        // Vérification d'une première image lié à l'items
        if (isFirstImgAdd) {
            await addMyImg(formData);
        } else {
            const res = await createItem(mergedItemsForms);
            console.log(res);
            const res2 = await addMyImg(formData);
            console.log(res2);
            setIsFirstImgAdd(true);
        }

        form.reset();
    }

    function handleClick() {
        navigate("/");
    }

    async function addMyImg(data) {
        const res = await addImage(data, uuid);
        onUpdateForm(data);
        console.log(res);
    }

    return (
        <form onSubmit={handleSubmit} className="createForm">
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