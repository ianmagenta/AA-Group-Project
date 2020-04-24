import { handleErrors, generateArticleHtml, generateUserHtml, generateCategoriesHTML, api } from "./utils.js";

document.addEventListener("DOMContentLoaded", async (e) => {
  const topStoriesContainer = document.querySelector(".top-stories-container");
  const mainStoriesLeft = document.querySelector(".main-stories-left");
  const mainStoriesRight = document.querySelector(".main-stories-right");
  const categoryContainer = document.querySelector(".categories-container");

  try {
    const res = await fetch(`${api}story`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
    if (!res.ok) {
      // console.log(user);
      window.location.href = "/splash";
      return;
    }
    const data = await res.json();
    const { stories } = data;
    //Most recent stories
    stories.sort((a, b) => {
      return new Date(b.createdAt.replace(' ', 'T')) - new Date(a.createdAt.replace(' ', 'T'));
    });
    const firstThreeStories = stories.splice(0, 3)
    topStoriesContainer.innerHTML = `${generateArticleHtml(firstThreeStories)}`;

    //TODO rewrite after likes are working properly, these should be most liked
    stories.sort((a, b) => {
      return b.storyLikes.length - a.storyLikes.length;
    });
    let nextThreeStories = stories.splice(0, 3);
    mainStoriesRight.innerHTML = `<div class="heading-text text-style1">Popular Stories</div> ${generateArticleHtml(nextThreeStories)}`;

    //capture the rest of the stories and put in left container
    stories.sort((a, b) => {
      return new Date(b.createdAt.replace(' ', 'T')) - new Date(a.createdAt.replace(' ', 'T'));
    });
    mainStoriesLeft.innerHTML = `${generateArticleHtml(stories)}`;
  } catch (e) {
    handleErrors(e);
  }

  //get categories and place in top container
  try {
    const res = await fetch(`http://localhost:8080/storycategories/`);
    const data = await res.json();
    const { categories } = data;
    let categories2 = categories.slice(0, 6);
    if (res.ok) {
      categoryContainer.innerHTML = generateCategoriesHTML(categories2);
    }
  } catch (e) {
    handleErrors(e);
  }
});
