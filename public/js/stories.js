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

            if (story.userId === parseInt(localStorage.getItem("RARE_USER_ID"), 10)) {
                const editButton = document.querySelector(".edit-story-button");
                editButton.classList.remove("edit-story-button-hidden");
                editButton.addEventListener("click", (e) => {
                    e.preventDefault();
                    let storyId = window.location.href;
                    storyId = storyId.split("stories/")[1];
                    window.location.href = `/stories/${storyId}/edit`;
                })
            }
        }

        // load comments
        const otherRes = await fetch(`http://localhost:8080/comment/storyId/${id}`);
        if (!otherRes.ok) {
            throw otherRes;
        } else {
            const { comment } = await otherRes.json();
            const commentContainer = document.querySelector(".comments-container");
            commentContainer.innerHTML = `<div class="comments-label">Comments:</div>`;
            comment.forEach(comment => {
                let div = document.createElement("div");
                div.classList.add("comment")
                div.innerHTML = `
                <div class="commenter-name">${comment.User.firstName} ${comment.User.lastName}</div>
                <div class="commenter-date">${new Date(comment.createdAt.replace(' ', 'T')).toDateString()}</div>
                <div class="commenter-body">${comment.body}</div>
                <div class="commenter-likes">Likes: ${comment.commentLikes.length}</div>
                `
                commentContainer.appendChild(div);
            });
        }

    } catch (err) {
        handleErrors(err);
    }
})

document.addEventListener("DOMContentLoaded", (e) => {

});
