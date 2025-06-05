import { CategoryForm } from "../components/forms/CategoryForm";
import { useState, useEffect } from "react";
import { getNews, getNewsByCategory } from "../services/news";
import { DisplayNews } from "../components/commons/DisplayNews";
import { useAuth } from "../contexts/AuthContext";
import { NavLink, } from "react-router-dom";
import { isUserConnected } from "../services/users";
import { PaginationBottom } from "../components/commons/PaginationBottom";


export function NewsCorner() {

    const [category, setCategory] = useState("toutes");
    const [news, setNews] = useState([]);
    const { state, dispatch } = useAuth();

    // useEffect(() => {
    //     checkAuthStatus();
    // }, []);

    // async function checkAuthStatus() {
    //     const resUser = await isUserConnected();
    //     if (resUser.ok && resUser.data.isUser) {
    //         dispatch({ type: "SET_USER", payload: true });
    //     } else {
    //         dispatch({ type: "LOGOUT" });
    //     }
    // }

    useEffect(() => {
        category_ctrl();
    }, [category]);

    async function category_ctrl() {
        if (category === "toutes") {
            await displayAllCategories();
        } else {
            await displayNewsByCategory();
        }
    }

    async function displayAllCategories() {
        const res = await getNews();
        setNews(res.news);
    }

    async function displayNewsByCategory() {
        const res = await getNewsByCategory(category);
        setNews(res.news);
    }

    return (
        <div className="newsCorner">
            <div className="box">
                <h2>Le coin des collectionneurs</h2>
                <CategoryForm onUpdateCategory={setCategory} />
                {state.isConnected && <NavLink to="/admin/addArticles"><button className="btn">Créer un article</button></NavLink>}
                {news && news.length !== 0 ? (<DisplayNews data={news} />) : (<p style={{ marginTop: "50px" }}>Aucun article n’a été créé pour le moment.</p>)}
            </div>
        </div>
    );
}