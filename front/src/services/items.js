import { HOST } from "../host/host.js";

export async function getItems() {
    try {
        const preRes = await fetch(`${HOST}/api/items`, {
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

export async function getOneItem(uuid) {
    try {
        const preRes = await fetch(`${HOST}/api/items/${uuid}`, {
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

export async function getItemsByCategory(category) {
    try {
        const preRes = await fetch(`${HOST}/api/items/byCategory/${category}`, {
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




export async function createItem(data) {
    try {
        const preRes = await fetch(`${HOST}/api/items`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
            body: JSON.stringify(data),
        });
        const res = await preRes.json();
        return res;
    } catch (err) {
        console.error(err);
    }
};


export async function addImage(data, uuid) {
    try {
        const preRes = await fetch(`${HOST}/api/items/images/${uuid}`, {
            method: "POST",
            headers: {
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

export async function updateItem(uuid, data) {
    try {
        const preRes = await fetch(`${HOST}/api/items/${uuid}`, {
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

export async function updateItemImage(uuid, imgUuid, data) {
    try {
        const preRes = await fetch(`${HOST}/api/items/images${uuid}/${imgUuid}`, {
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

export async function deleteItem(uuid) {
    try {
        const preRes = await fetch(`${HOST}/api/items/${uuid}`, {
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

export async function deleteItemImg(uuid, imgUuid) {
    try {
        const preRes = await fetch(`${HOST}/api/items/images/${uuid}/${imgUuid}`, {
            method: "DELETE",
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