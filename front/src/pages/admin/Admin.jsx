import { useState } from "react";

export function Admin() {

    const [admin, setAdmin] = useState(true);

    return (
        <>
            <div className="box">
                <h2>Administration</h2>
            </div>
        </>
    );
}