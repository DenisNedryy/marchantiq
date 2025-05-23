const btn = document.querySelector(".btn-addItem");
btn.addEventListener("click", async (e) => {
    e.preventDefault();
    addItem();
});

const btnCo = document.querySelector(".btn-connection");
btnCo.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
        const preRes = await fetch("http://localhost:1989/api/auth/signIn", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                email: "thibault@gmx.fr",
                password: "thibault"
            })
        });
        const res = await preRes.json();
        console.log(res);
    } catch (err) {
        console.error(err);
    }
});

async function addItem() {
    try {
        const preRes = await fetch("http://localhost:1989/api/items", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                name: "bracelet de Diane",
                price: 15.66,
                category: "mobilier",
                artist: "thibault"
            })
        });
        const res = await preRes.json();
        console.log(res);
    } catch (err) {
        console.error(err);
    }
}


const formImg = document.querySelector("#sendImg");
formImg.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const inputEl = form.elements['inputImg']
    const file = inputEl.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("item_uuid", "95460645-afd0-45eb-b877-22930912bbb7");
    formData.append("img_url", file);
    try {
        const preRes = await fetch("http://localhost:1989/api/items/images", {
            method: "POST",
            headers: {
            },
            credentials: "include",
            body: formData
        });
        const res = await preRes.json();
        console.log(res);
    } catch (err) {
        console.error(err);
    }
});

const btnUpdateImg = document.querySelector("#updateImg");
btnUpdateImg.addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const inputEl = form.elements["inputImgUpdate"];
    const file = inputEl.files[0];
    const formData = new FormData();
    formData.append("item_uuid", "60ef5a1b-3920-449a-95a7-03d000037d56");
    formData.append("img_url", file);
    try {
        const preRes = await fetch("http://localhost:1989/api/items/images/60ef5a1b-3920-449a-95a7-03d000037d56/bc780b3e-3bdf-4eae-88f0-2a93a1b1d8da", {
            method: "PUT",
            headers: {
            },
            credentials: "include",
            body: formData
        });
        const res = await preRes.json();
        console.log(res);
    } catch (err) {
        console.error(err);
    }

});