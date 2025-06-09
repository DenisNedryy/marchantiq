import { updateThreadImg } from "../../services/threads";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function AdminUpdateThreadImg() {

    const navigate = useNavigate();
    const [newsUuid, setNewsUuid] = useState("");
    const [threadImgId, setThreadImgId] = useState("");

    useEffect(() => {
        controller();
    }, []);

    async function controller() {
        const params = getUuidParams();
        setNewsUuid(params.newsId);
        setThreadImgId(params.threadImgId);
    }

    function getUuidParams() {
        const str = window.location.href;
        const url = new URL(str);
        return { newsId: url.searchParams.get('newsId'), threadImgId: url.searchParams.get('threadImgId') };
    }

    async function handleSubmitThreadImg(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData();
        formData.append("img_url", form.elements['img_url'].files[0]);
        formData.append("commentaire", form.elements['commentaire'].value);
        form.reset();
        const res = await updateThreadImg(threadImgId, formData);
        console.log(res);
        navigate(`/news/news-details/${newsUuid}`);
    }

    return (
        <>
            <div className="box">
                <h2>Modification de l'image</h2>

                <form onSubmit={handleSubmitThreadImg}>
                    <div>
                        <label>Image</label>
                        <input type="file" name="img_url" />
                    </div>
                    <div>
                        <label>Légende</label>
                        <input type="text" name="commentaire" placeholder="ex: voici une bague Gauloise en or" />
                    </div>
                    <div className="form-buttons">
                        <button type="submit" className="btn">Modifier</button>
                    </div>
                </form>
            </div>
        </>
    );
}