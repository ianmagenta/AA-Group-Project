import { handleErrors } from "./utils.js";

document.addEventListener("DOMContentLoaded", async (e) => {
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);
    try {
        const res = await fetch(`http://localhost:8080/story/${id}`);
        if (!res.ok) {
            throw res;
        } else {
            const { story } = await res.json();
            console.log(story);
            document.querySelector(".story-title").innerHTML = story.title;
            document.querySelector(".story-subheader").innerHTML = story.subHeading;
            document.querySelector(".story-author").innerHTML = `${story.User.firstName} ${story.User.lastName}`;
            document.querySelector(".story-date").innerHTML = new Date(story.createdAt.replace(' ', 'T')).toLocaleFormat('%A, %B %e, %Y');
        }
    } catch (err) {
        handleErrors(err);
    }
})

document.addEventListener("DOMContentLoaded", (e) => {

});
