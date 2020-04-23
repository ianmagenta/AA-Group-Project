import { handleErrors } from "./utils.js";

document.addEventListener("DOMContentLoaded", async (e) => {
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);
    try {
        const res = await fetch(`http://localhost:8080/story/${id}`);
        if (!res.ok) {
            throw res;
        } else {
            const { story, readTime, parsedBody } = await res.json();
            console.log(story, readTime);
            document.querySelector(".story-title").innerHTML = story.title;
            document.querySelector(".story-subheader").innerHTML = story.subHeading;
            document.querySelector(".story-author").innerHTML = `${story.User.firstName} ${story.User.lastName}`;
            document.querySelector(".story-date").innerHTML = new Date(story.createdAt.replace(' ', 'T')).toDateString();
            document.querySelector(".story-read-time").innerHTML = readTime.text;
            document.querySelector(".story-body").innerHTML += parsedBody;
            document.querySelector(".author-name").innerHTML = `${story.User.firstName} ${story.User.lastName}`;
            document.querySelector(".author-bio").innerHTML = story.User.bio;
        }
    } catch (err) {
        handleErrors(err);
    }
})

document.addEventListener("DOMContentLoaded", (e) => {

});
