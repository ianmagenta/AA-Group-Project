import { handleErrors } from "./utils.js";
const storyForm = document.querySelector(".story-form");

storyForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(storyForm);
    const title = formData.get("title");
    const subHeading = formData.get("subHeading");
    const body = formData.get("body");
    const categoryId = formData.get("categoryId");
    const userId = localStorage.getItem("RARE_USER_ID");

    const jsonBody = { title, subHeading, body, userId, categoryId };

    try {
        const res = await fetch("http://localhost:8080/story", {
            method: "POST",
            body: JSON.stringify(jsonBody),
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!res.ok) {
            throw res;
        } else {
            const { story } = await res.json();
            window.location.href = `/stories/${story.id}`
        }
    } catch (err) {
        handleErrors(err);
    }
})
