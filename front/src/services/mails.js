import { HOST } from "../host/host.js";

export async function sendMail(body) {
    try {
        const preRes = await fetch(`${HOST}/api/mails`, { 
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
            body: JSON.stringify(body),
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err); 
    }
};