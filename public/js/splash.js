import { handleErrors, generateCategoriesHTML, api } from "./utils.js";

const signInOrUsername = document.querySelector(".sign-in-top");
const RegisterOrLogout = document.querySelector(".register-top");
signInOrUsername.innerHTML = `<a href="/login">Sign in</a>`;
RegisterOrLogout.innerHTML = `<a href="/register">Register</a>`;
const categoryContainer = document.querySelector(".mid-container");

document.addEventListener("DOMContentLoaded", async () => {
    const userId = localStorage.getItem("RARE_USER_ID");
    // console.log('this runs');
    try {

        const res = await fetch(`${api}storycategories/`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
        const data = await res.json();
        const { categories } = data;

        if (res.ok) {
            categoryContainer.innerHTML = generateCategoriesHTML(categories);
        }

    } catch (err) {
        handleErrors(err);
    }
});
