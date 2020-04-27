import { handleErrors, api } from "./utils.js";
const commentForm = document.querySelector(".comment-form");

commentForm.addEventListener("submit", async (e) => {

    e.preventDefault();
    const formData = new FormData(commentForm);


    const body = formData.get("body");
    const url = window.location.pathname;
    const storyId = url.substring(url.lastIndexOf('/') + 1);
    const userId = localStorage.getItem("RARE_USER_ID");

    const jsonBody = { storyId, body, userId };


    try {
        const res = await fetch(`${api}comment`, {
            method: "POST",
            body: JSON.stringify(jsonBody),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}`
            }
        });
        if (!res.ok) {
            throw res;
        } else {

            window.location.href = `/stories/${storyId}`
        }
    } catch (err) {
        handleErrors(err);
    }
})
