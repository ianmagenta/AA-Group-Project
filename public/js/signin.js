import { handleErrors, api } from "./utils.js";
const registerForm = document.querySelector(".register-form");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(registerForm);
    const userName = formData.get("userName");
    const password = formData.get("password");

    const body = { userName, password };

    try {
        console.log(`${api}session`);
        const res = await fetch(`${api}session`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!res.ok) {
            throw res;
        }
        const { token, user: { id }, } = await res.json();
        localStorage.setItem("RARE_ACCESS_TOKEN", token);
        localStorage.setItem("RARE_USER_ID", id);
        window.location.href = "/";
    } catch (err) {
        handleErrors(err);
    }
});
