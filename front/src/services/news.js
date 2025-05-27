import { HOST } from "../host/host.js";

export async function getNews() {
    try {
        const preRes = await fetch(`${HOST}/api/news`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};

export async function getOneNews() {
    try {
        const preRes = await fetch(`${HOST}/api/news/${uuid}`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};

export async function createNews() {
    try {
        const preRes = await fetch(`${HOST}/api/news`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
            body: data
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};

export async function updateNews() {
    try {
        const preRes = await fetch(`${HOST}/api/news/${uuid}`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
            body: data
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};

export async function deleteNews() {
    try {
        const preRes = await fetch(`${HOST}/api/news/${uuid}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};