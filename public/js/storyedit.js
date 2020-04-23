import { handleErrors } from "./utils.js";
const storyForm = document.querySelector(".story-form");
let easyMDE;

document.addEventListener("DOMContentLoaded", async () => {
    const userId = localStorage.getItem("RARE_USER_ID");
    const url = window.location.pathname;
    const id = url.match(/\d+/)[0];
    // console.log('this runs');
    try {
        const res = await fetch(`http://localhost:8080/story/${id}`);
        if (!res.ok) {
            throw res;
        } else {
            const { story, readTime, parsedBody } = await res.json();
            if (userId == story.User.id) {
                document.getElementById('markdown-title-editor').value = story.title;
                document.getElementById('markdown-subheader-editor').value = story.subHeading;
                document.getElementById('markdown-story-editor').value = story.body;
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
    const body = easyMDE.value();
    const userId = localStorage.getItem("RARE_USER_ID");

    const jsonBody = { title, subHeading, body, userId, categoryId: 1 };
    console.log(jsonBody)
    try {
        const res = await fetch(`http://localhost:8080/story/${id}`, {
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
