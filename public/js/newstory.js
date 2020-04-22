import { handleErrors } from "./utils.js";
const storyForm = document.querySelector(".story-form");

storyForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(storyForm);
    const title = formData.get("title");
    const subHeading = formData.get("subHeading");
    const body = formData.get("body");

    const body = { title, subHeading, body };

    try {
        const res = await fetch("http://localhost:8080/story", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!res.ok) {
            throw res;
        } else {
            const { story } = await res.json();
            window.location.href = `/story/${story.id}`
        }
    } catch (err) {
        handleErrors(err);
    }
})
