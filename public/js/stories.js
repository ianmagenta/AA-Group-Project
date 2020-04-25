import { handleErrors, api } from "./utils.js";

document.addEventListener("DOMContentLoaded", async (e) => {
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);
    try {
        // load story
        const res = await fetch(`${api}story/${id}`);
        if (!res.ok) {
            window.location.href = "/"
            return;
        }
        const { story, readTime, parsedBody, storyLikes } = await res.json();
        // console.log(storyLikes);
        document.querySelector(".story-title").innerHTML = story.title;
        document.querySelector(".story-subheader").innerHTML = story.subHeading;
        document.querySelector(".story-author").innerHTML = `By ${story.User.firstName} ${story.User.lastName}`;
        document.querySelector(".story-date").innerHTML = new Date(story.createdAt.replace(' ', 'T')).toDateString();
        document.querySelector(".story-read-time").innerHTML = readTime.text;
        document.querySelector(".story-body").innerHTML += parsedBody;
        document.querySelector(".author-name").innerHTML = `${story.User.firstName} ${story.User.lastName}`;
        document.querySelector(".author-bio").innerHTML = story.User.bio;
        document.querySelector(".story-likes").innerHTML = `Likes: ${storyLikes.length}`;
        document.title = story.title;

        // Edit story
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

        // load comments
        const otherRes = await fetch(`${api}comment/storyId/${id}`);
        if (!otherRes.ok) {
            throw otherRes;
        }
        const { comment } = await otherRes.json();

        const commentContainer = document.querySelector(".comments-container");
        commentContainer.innerHTML = `<div class="comments-label">Comments:</div>`;
        comment.forEach(comment => {
            let div = document.createElement("div");
            div.setAttribute("id", `${comment.id}`)
            div.classList.add("comment")
            div.innerHTML = `
                <div class="commenter-name">${comment.User.firstName} ${comment.User.lastName}</div>
                <div class="commenter-date">${new Date(comment.createdAt.replace(' ', 'T')).toDateString()}</div>
                <div class="commenter-body">${comment.body}</div>
                <div class="commenter-likes">Likes: ${comment.commentLikes.length}</div>
                <button type="button" class=like-comment-button>Like this comment</button>
                `
            commentContainer.appendChild(div);

            // Comment like button
            // const commentLikeButton = document.querySelector(".like-comment-button");
            // commentLikeButton.addEventListener("click", async (e) => {

            //     e.preventDefault();
            //     const userId = localStorage.getItem("RARE_USER_ID");
            //     const commentRes = await fetch(`http://localhost:8080/comment/${comment.id}/likes/${userId}`, { method: 'POST' });
            //     if (!commentRes.ok) {
            //         throw res;
            //     }
            //     const newCommentLike = await commentRes.json();
            //     comment.commentLikes[comment.commentLikes.length] = newCommentLike;
            //     document.querySelector(".commenter-likes").innerHTML = `Likes: ${comment.commentLikes.length}`;
            //     commentLikeButton.setAttribute("disabled", "");
            //     commentLikeButton.innerHTML = `Comment Liked`
            // });
        });

        // Story Like Button
        const userId = localStorage.getItem("RARE_USER_ID");
        const storyLikeButton = document.querySelector(".like-story-button");
        let storyLiked = false;
        storyLikes.forEach(element => {
            if (element.userId == userId) {
                storyLiked = true;
            }
        });
        if (storyLiked) {
            storyLikeButton.setAttribute("disabled", "");
            storyLikeButton.innerHTML = `Story Liked`
        } else {
            storyLikeButton.addEventListener("click", async (e) => {
                e.preventDefault();
                const likeRes = await fetch(`http://localhost:8080/story/${id}/likes/${userId}`, { method: 'POST' });
                if (!likeRes.ok) {
                    throw likeRes;
                }
                const newLike = await likeRes.json();
                storyLikes[storyLikes.length] = newLike
                document.querySelector(".story-likes").innerHTML = `Likes: ${storyLikes.length}`;
                storyLikeButton.setAttribute("disabled", "");
                storyLikeButton.innerHTML = `Story Liked`
            });
        }

    } catch (err) {
        handleErrors(err);
    }
})


document.addEventListener("DOMContentLoaded", (e) => {

});
