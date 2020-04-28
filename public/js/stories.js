import { handleErrors, api } from "./utils.js";

document.addEventListener("DOMContentLoaded", async (e) => {
    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);
    const userId = localStorage.getItem("RARE_USER_ID");
    const easyMDE = new EasyMDE({ element: document.getElementById('markdown-story-editor') });
    try {
        // load story
        const res = await fetch(`${api}story/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
        if (!res.ok) {
            window.location.href = "/"
            return;
        }
        const { story, readTime, parsedBody, storyLikes } = await res.json();
        document.querySelector(".story-title").innerHTML = story.title;
        document.querySelector(".story-subheader").innerHTML = story.subHeading;
        document.querySelector(".story-author").innerHTML = `By <a class="article-author text-style2" href=/profile/${story.User.id}>${story.User.firstName} ${story.User.lastName}</a>`;
        document.querySelector(".story-date").innerHTML = new Date(story.createdAt.replace(' ', 'T')).toDateString();
        document.querySelector(".story-read-time").innerHTML = readTime.text;
        document.querySelector(".story-category").innerHTML += ` <a name="searchButton" class="category-italics" style="color:#000000;" href='/category/${story.StoryCategory.categoryName}'>${story.StoryCategory.categoryName}<\a>`;
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
                window.location.href = `/stories/${id}/edit`;
            })
        }

        // load comments
        const otherRes = await fetch(`${api}comment/storyId/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
        if (!otherRes.ok) {
            throw otherRes;
        }
        const { comment } = await otherRes.json();

        const commentContainer = document.querySelector(".comments-container");
        if (comment.length > 0) {
            commentContainer.innerHTML = `<div class="comments-label">Comments:</div>`;
        } else {
            commentContainer.innerHTML = `<div class="comments-label">Be the first to comment!</div>`;
        }
        comment.forEach(comment => {

            // Add existing comments and button
            let div = document.createElement("div");
            div.setAttribute("id", `${comment.id}`)
            div.classList.add("comment")
            div.innerHTML = `
                <div class="commenter-name"><a class="article-author text-style2" href=/profile/${comment.User.id}>${comment.User.firstName} ${comment.User.lastName}</a></div>
                <div class="commenter-date">${new Date(comment.createdAt.replace(' ', 'T')).toDateString()}</div>
                <div class="commenter-body">${comment.body}</div>
                <div class="commenter-likes" id=likes:${comment.id}>Likes: ${comment.commentLikes.length}</div>
                `
            let alreadyLikedComment = false
            comment.commentLikes.forEach(like => {
                if (like.userId == userId) {
                    alreadyLikedComment = true;
                }
            });
            if (alreadyLikedComment) {
                div.innerHTML += `<button type="button" class="like-comment-button site-button button-disabled" id=button:${comment.id}><i class="fas fa-thumbs-up"></i></button>`
            } else {
                div.innerHTML += `<button type="button" class="like-comment-button site-button" id=button:${comment.id}><i class="fas fa-thumbs-up"></i></button>`
            }

            let userComment = false

            if (comment.userId == userId) {
                userComment = true;
            }

            if (userComment) {
                div.innerHTML += `<button type="button" class="delete-comment-button site-button" id=deletebutton:${comment.id}><i class="fas fa-trash"></i></button>`
            } else {
                div.innerHTML += `<button type="button" class="delete-comment-button site-button button-disabled" id=deletebutton:${comment.id}><i class="fas fa-trash"></i></button>`
            }
            commentContainer.appendChild(div);

            // Comment like button behavior
            const commentLikeButton = document.getElementById(`button:${comment.id}`);
            commentLikeButton.addEventListener("click", async (e) => {
                e.preventDefault();
                if (alreadyLikedComment) {
                    const commentRes = await fetch(`${api}comment/${comment.id}/likes/${userId}`, { method: "DELETE", headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
                    if (!commentRes.ok) {
                        throw res;
                    }
                    comment.commentLikes.pop();
                    document.getElementById(`likes:${comment.id}`).innerHTML = `Likes: ${comment.commentLikes.length}`;
                    commentLikeButton.innerHTML = `<i class="fas fa-thumbs-up"></i>`
                    commentLikeButton.classList.remove("button-disabled");
                    alreadyLikedComment = false;
                } else {
                    const commentRes = await fetch(`${api}comment/${comment.id}/likes/${userId}`, { method: "POST", headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
                    if (!commentRes.ok) {
                        throw res;
                    }
                    comment.commentLikes[comment.commentLikes.length] = {}
                    document.getElementById(`likes:${comment.id}`).innerHTML = `Likes: ${comment.commentLikes.length}`;
                    commentLikeButton.innerHTML = `<i class="fas fa-thumbs-up"></i>`
                    commentLikeButton.classList.add("button-disabled");
                    alreadyLikedComment = true;
                }

            });

            // Comment delete button behavior

            const commentDeleteButton = document.getElementById(`deletebutton:${comment.id}`);
            commentDeleteButton.addEventListener("click", async (e) => {
                if (userComment) {
                    e.preventDefault();
                    const commentLikesRes = await fetch(`${api}comment/${comment.id}/likes`, { method: 'DELETE', headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
                    if (!commentLikesRes.ok) {
                        throw commentLikesRes;
                    }
                    const commentUserRes = await fetch(`${api}comment/${comment.id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
                    if (!commentUserRes.ok) {
                        throw commentLikesRes;
                    }

                    window.location.href = `/stories/${id}`
                }

            });
        });


        // Story Like Button
        const storyLikeButton = document.querySelector(".like-story-button");
        storyLikeButton.innerHTML = `<i class="fas fa-thumbs-up"></i>`
        let storyLiked = false;
        storyLikes.forEach(element => {
            if (element.userId == userId) {
                storyLiked = true;
            }
        });

        if (storyLiked) {
            storyLikeButton.classList.add("button-disabled");
        }
        storyLikeButton.addEventListener("click", async (e) => {
            e.preventDefault();
            if (storyLiked) {
                const likeRes = await fetch(`${api}story/${id}/likes/${userId}`, { method: "DELETE", headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
                if (!likeRes.ok) {
                    throw likeRes;
                }
                storyLikes.pop()
                document.querySelector(".story-likes").innerHTML = `Likes: ${storyLikes.length}`;
                storyLikeButton.classList.remove("button-disabled");
                storyLiked = false
            } else {
                const likeRes = await fetch(`${api}story/${id}/likes/${userId}`, { method: "POST", headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
                if (!likeRes.ok) {
                    throw likeRes;
                }
                storyLikes[storyLikes.length] = {}
                document.querySelector(".story-likes").innerHTML = `Likes: ${storyLikes.length}`;
                storyLikeButton.classList.add("button-disabled");
                storyLiked = true;
            }
        });

        const storyDeleteButton = document.querySelector(".delete-story-button");
        storyDeleteButton.innerHTML = `<i class="fas fa-trash"></i>`
        let storyDelete = false;

        if (story.userId == userId) {
            storyDelete = true;
        }

        if (!storyDelete) {
            storyDeleteButton.classList.add("button-disabled");
        } else {
            storyDeleteButton.addEventListener("click", async (e) => {
                e.preventDefault();
                const storyDelRes = await fetch(`${api}comment/storyId/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
                if (!storyDelRes.ok) {
                    throw storyDelRes;
                }
                const { comment } = await storyDelRes.json();

                let commentLikesToDelete = [];
                comment.forEach(commentelem => {
                    if (commentelem.commentLikes.length > 0) {

                        commentLikesToDelete.push(commentelem.id)

                    }
                })
                commentLikesToDelete = [... new Set(commentLikesToDelete)]
                console.log(commentLikesToDelete)
                const deleteCommentLikeRes = await fetch(`${api}comment/likes`, { method: 'DELETE', body: JSON.stringify(commentLikesToDelete), headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
                if (!deleteCommentLikeRes.ok) {
                    throw deleteCommentLikeRes;
                }
                const deleteCommentRes = await fetch(`${api}comment/story/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
                if (!deleteCommentRes.ok) {
                    throw deleteCommentRes;
                }

                const deleteLikeRes = await fetch(`${api}story/storyLikes/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
                if (!deleteLikeRes.ok) {
                    throw deleteLikeRes;
                }

                const deleteStoryRes = await fetch(`${api}story/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
                if (!deleteStoryRes.ok) {
                    throw deleteStoryRes;
                }
                window.location.href = `/profile/${userId}`

            });
        }

        document.querySelector(".comment-form").addEventListener("submit", async (e) => {
            // Add new comment once submitted.
            e.preventDefault();
            const jsonBody = { storyId: id, body: easyMDE.value(), userId }
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
                //commentContainer.innerHTML = `<div class="comments-label">Comments:</div>`;
                const { comment: newComment, user: newUser } = await res.json();
                let div = document.createElement("div");
                div.setAttribute("id", `${newComment.id}`)
                div.classList.add("comment")
                div.innerHTML = `
                <div class="commenter-name"><a class="article-author text-style2" href=/profile/${newUser.id}>${newUser.firstName} ${newUser.lastName}</a></div>
                <div class="commenter-date">${new Date(newComment.createdAt.replace(' ', 'T')).toDateString()}</div>
                <div class="commenter-body">${newComment.body}</div>
                <div class="commenter-likes" id=likes:${newComment.id}>Likes: 0</div>
                <button type ="button" class="like-comment-button site-button" id=button:${newComment.id}><i class="fas fa-thumbs-up"></i></button>
                <button type ="button" class="delete-comment-button site-button" id=deletebutton:${newComment.id}><i class="fas fa-trash"></i></button>
                `
                commentContainer.appendChild(div);
                window.location.href = `${window.location.href.split('#')[0]}#${newComment.id}`;
                easyMDE.value('')
                const commentLikeButton = document.getElementById(`button:${newComment.id}`);
                let alreadyLikedComment = false;
                commentLikeButton.addEventListener("click", async (e) => {
                    e.preventDefault();
                    if (alreadyLikedComment) {
                        const commentRes = await fetch(`${api}comment/${newComment.id}/likes/${userId}`, { method: "DELETE", headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
                        if (!commentRes.ok) {
                            throw res;
                        }
                        document.getElementById(`likes:${newComment.id}`).innerHTML = `Likes: ${0}`;
                        commentLikeButton.innerHTML = `<i class="fas fa-thumbs-up"></i>`
                        commentLikeButton.classList.remove("button-disabled");
                        alreadyLikedComment = false;
                    } else {
                        const commentRes = await fetch(`${api}comment/${newComment.id}/likes/${userId}`, { method: "POST", headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
                        if (!commentRes.ok) {
                            throw res;
                        }
                        document.getElementById(`likes:${newComment.id}`).innerHTML = `Likes: ${1}`;
                        commentLikeButton.innerHTML = `<i class="fas fa-thumbs-up"></i>`
                        commentLikeButton.classList.add("button-disabled");
                        alreadyLikedComment = true;
                    }

                });
                const commentDeleteButton = document.getElementById(`deletebutton:${newComment.id}`);

                commentDeleteButton.addEventListener("click", async (e) => {
                    e.preventDefault();
                    const commentLikesRes = await fetch(`${api}comment/${newComment.id}/likes`, { method: 'DELETE', headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
                    if (!commentLikesRes.ok) {
                        throw commentLikesRes;
                    }
                    const commentUserRes = await fetch(`${api}comment/${newComment.id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
                    if (!commentUserRes.ok) {
                        throw commentLikesRes;
                    }

                    window.location.href = `/stories/${id}`

                });

            }
        });

    } catch (err) {
        handleErrors(err);
    }
})


document.addEventListener("DOMContentLoaded", (e) => {

});
