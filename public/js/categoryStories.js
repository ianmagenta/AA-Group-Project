import { handleErrors, generateArticleHtml, api } from "./utils.js";


document.addEventListener("DOMContentLoaded", async () => {


    const url = window.location.pathname;
    const id = url.substring(url.lastIndexOf('/') + 1);

    try {

        const res = await fetch(`${api}story/`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
        const data = await res.json();
        const { stories } = data;
        console.log(stories);

        let articleStoriesHTML = `<div class="heading-text text-style1">Further ${id} Stories</div>`;
        let storiesInCategory = [];
        stories.forEach(story => {
            const { StoryCategory } = story;

            console.log('LIKE', StoryCategory.categoryName);
            console.log(id)
            if (StoryCategory.categoryName === id) {

                storiesInCategory.push(story);

            }

        });

        // filters out undefined variables from storiesLiked (which can occasionally appear)
        storiesInCategory = storiesInCategory.filter(function (el) {
            return el != null;
        });


        storiesInCategory.sort((a, b) => {
            return new Date(b.storyLikes.length - a.storyLikes.length);
        });

        articleStoriesHTML += generateArticleHtml(storiesInCategory);
        const articleStoriesContainer = document.querySelector(".articles-container");
        articleStoriesContainer.innerHTML = articleStoriesHTML;
    } catch (err) {
        handleErrors(err);
    }
});
