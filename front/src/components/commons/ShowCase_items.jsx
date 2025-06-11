import { getItems } from "../../services/items";
import { useState, useEffect } from "react";
import { Carrousel } from "./Carrousel";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { isUserConnected } from "../../services/users";

export function ShowCase_items() {

    const [items, setItems] = useState([]);
    const { state, dispatch } = useAuth();

      useEffect(() => {
        checkAuthStatus();
      }, []);
    
      async function checkAuthStatus() {
        const resUser = await isUserConnected();
        if (resUser.ok && resUser.data.isUser) {
          dispatch({ type: "SET_USER", payload: true });
        } else {
          dispatch({ type: "LOGOUT" });
        }
      }


    useEffect(() => {
        getMyItems();
        async function getMyItems() {
            const res = await getItems();
            if (res && res.items) setItems(res.items);
        }
    }, []);

    return (
        // items && items.length > 0 ? (
            <div className="showCaseItems">
                <div className="box">
                    <h2>Nouveautés</h2>
                    <Carrousel items={items} />
                </div>
            </div>
        // ) : (
        //    state.isConnected && <NavLink to="/admin/addItems"><button className="btn">Créer un objet</button></NavLink>
        // )
    );
}