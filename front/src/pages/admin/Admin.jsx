import { useState } from "react";
import hawai from "../../assets/pictures/photos/hawai.png";
import { NavLink } from "react-router-dom";
import { Category } from "./Category";
import { Items } from "./items/Items.jsx";
import { News } from "./news/News.jsx";

export function Admin() {

    const [view, setView] = useState("category"); // 'category' | 'items' | 'news'
    const [itemStep, setItemStep] = useState(2);

    const handleSelect = (section) => {
        setView(section);
        if (section === "items") {
            setItemStep(2); // reset to step 1
        }else if(section === "news"){
            setItemStep(2);
        }else if(section ==="category"){
            setItemStep(2);
        }
    };

    return (
        <>
            <div className="box">
                <h2>Administration</h2>
                <button onClick={() => handleSelect("category")} className="btn">Category</button>

                {view === "category" && <Category setView={setView} />}
                {view === "items" && <Items step={itemStep} setStep={setItemStep} />}
                {view === "news" && <News  step={itemStep} setStep={setItemStep}/>}
            </div>
        </>
    );
}