import { updateThreads } from "../../services/threads";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function AdminUpdateThreads() {

    const navigate = useNavigate();
    const [newsUuid, setNewsUuid] = useState("");
    const [threadUuid, setThreadUuid] = useState("");

    useEffect(() => {
        controller();
    }, []);

    async function controller() {
        const params = getUuidParams();
        setNewsUuid(params.newsId);
        setThreadUuid(params.threadId);
    }

    function getUuidParams() {
        const str = window.location.href;
        const url = new URL(str);
        return { newsId: url.searchParams.get('newsId'), threadId: url.searchParams.get('threadId') };
    }

    async function handleSubmitThreadText(e) {
        e.preventDefault();
        const form = e.target;
        const data = {
            sous_titre: form.elements['sous_titre'].value,
            description: form.elements['description'].value
        }
        form.reset();
        const res = await updateThreads(threadUuid, data);
        console.log(res);
        navigate(`/news/news-details/${newsUuid}`);
    }

    return (
        <>
            <div className="box">
                <h2>Modification du chapitre</h2>
                <form onSubmit={handleSubmitThreadText}>
                    <div>
                        <label>Titre du chapitre</label>
                        <input type="text" name="sous_titre" />
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" name="description" />
                    </div>
                    <button type="submit" className="btn">Modifier</button>
                </form>
            </div>
        </>
    );
}