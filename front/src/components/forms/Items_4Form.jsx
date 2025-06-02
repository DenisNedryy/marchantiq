import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addImage } from "../../services/items";

export function Items_4Form({ onUpdateForm, uuid }) {
    const [isNew, setIsNew] = useState(true);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const imgUrl = form.elements['img_url'].files[0];
        const formData = new FormData();
        formData.append("img_url", imgUrl);
        console.log(formData);
        addMyImg(formData);
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