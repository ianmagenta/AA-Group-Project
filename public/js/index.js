import { handleErrors, generateArticleHtml, generateUserHtml, generateCategoriesHTML } from "./utils.js";

document.addEventListener("DOMContentLoaded", async (e) => {
  const topStoriesContainer = document.querySelector(".top-stories-container");
  const mainStoriesLeft = document.querySelector(".main-stories-left");
  const mainStoriesRight = document.querySelector(".main-stories-right");
  const categoryContainer = document.querySelector(".categories-container");

  try {
    const res = await fetch(`http://localhost:8080/story`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
    const data = await res.json();
    const { stories } = data;

    //TODO these stories should be the most recent?
    let firstThreeStories = stories.slice(0, 3);
    topStoriesContainer.innerHTML = `${generateArticleHtml(firstThreeStories)}`;

    //TODO rewrite after likes are working properly, these should be most liked
    let nextThreeStories = stories.slice(3, 6);
    mainStoriesRight.innerHTML = `<div class="heading-text text-style1">Popular Stories</div> ${generateArticleHtml(nextThreeStories)}`;

    //capture the rest of the stories and put in left container
    let restOfStories = stories.slice(6);
    mainStoriesLeft.innerHTML = `${generateArticleHtml(restOfStories)}`;
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
