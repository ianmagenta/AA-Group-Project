import { handleErrors } from "./utils.js";

document.addEventListener("DOMContentLoaded", async (e) => {
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);
    try {
        // load story
        const res = await fetch(`http://localhost:8080/story/${id}`);
        if (!res.ok) {
            window.location.href = "/"
        } else {
            const { story, readTime, parsedBody } = await res.json();
            document.querySelector(".story-title").innerHTML = story.title;
            document.querySelector(".story-subheader").innerHTML = story.subHeading;
            document.querySelector(".story-author").innerHTML = `By ${story.User.firstName} ${story.User.lastName}`;
            document.querySelector(".story-date").innerHTML = new Date(story.createdAt.replace(' ', 'T')).toDateString();
            document.querySelector(".story-read-time").innerHTML = readTime.text;
            document.querySelector(".story-body").innerHTML += parsedBody;
            document.querySelector(".author-name").innerHTML = `${story.User.firstName} ${story.User.lastName}`;
            document.querySelector(".author-bio").innerHTML = story.User.bio;
            document.title = story.title;
        }

        // load comments
        const res = await fetch(`http://localhost:8080/comment/storyId/${id}`);
        if (!res.ok) {
            console.log("no data!");
        } else {
            const data = await res.json();
            console.log(data);
        }

    } catch (err) {
        handleErrors(err);
    }
})

document.addEventListener("DOMContentLoaded", (e) => {

});
