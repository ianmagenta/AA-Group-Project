import { handleErrors, api } from "./utils.js";
const storyForm = document.querySelector(".story-form");
let easyMDE;

document.addEventListener("DOMContentLoaded", async () => {
    const userId = localStorage.getItem("RARE_USER_ID");
    const url = window.location.pathname;
    const id = url.match(/\d+/)[0];

    try {
        const res = await fetch(`${api}story/${id}`);
        if (!res.ok) {
            throw res;
        } else {
            const { story, readTime, parsedBody } = await res.json();
            if (userId == story.User.id) {
                document.getElementById('markdown-title-editor').value = story.title;
                document.getElementById('markdown-subheader-editor').value = story.subHeading;
                document.getElementById('markdown-story-editor').value = story.body;
                document.getElementById('category-select').value = story.categoryId;
                easyMDE = new EasyMDE({ element: document.getElementById('markdown-story-editor') });
                easyMDE.value(story.body);
            } else {
                window.location.href = `/stories/${id}`
            }
        }
    } catch (err) {
        handleErrors(err);
    }
});

storyForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const url = window.location.pathname;
    const id = url.match(/\d+/)[0];
    const formData = new FormData(storyForm);
    const title = formData.get("title");
    const subHeading = formData.get("subHeading");
    const categoryId = formData.get("categoryId");
    const body = easyMDE.value();
    const userId = localStorage.getItem("RARE_USER_ID");

    const jsonBody = { title, subHeading, body, userId, categoryId };

    try {
        const res = await fetch(`${api}story/${id}`, {
            method: "PUT",
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
