import { useState } from "react";

export function Items_4Form({ onUpdateForm }) {
    const [ isNew, setIsNew ] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const imgUrl = form.elements['img_url'].files[0];
        onUpdateForm(imgUrl);
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit} className="createForm">
            <div>
                <label>Image</label>
                <input type="file" name="img_url" />
            </div>
          
            <button type="submit" className="btn">Terminer</button>
        </form>
    );
}