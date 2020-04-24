import { handleErrors, generateArticleHtml, generateUserHtml } from "./utils.js";

document.addEventListener("DOMContentLoaded", async (e) => {
  const topStoriesContainer = document.querySelector(".top-stories-container");
  const mainStoriesLeft = document.querySelector(".main-stories-left");
  const mainStoriesRight = document.querySelector(".main-stories-right");

  try {
    const res = await fetch(`http://localhost:8080/story`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
    const data = await res.json();
    const { stories, readTimes } = data;

    //TODO these stories should be the most recent?
    let firstThreeStories = stories.slice(0, 3);
    let firstThreeReadTimes = readTimes.slice(0, 3);
    topStoriesContainer.innerHTML = `${generateArticleHtml(firstThreeStories, firstThreeReadTimes)}`;

    //TODO rewrite after likes are working properly, these should be most liked
    let nextThreeStories = stories.slice(3, 7);
    let nextThreeReadTimes = readTimes.slice(3, 7);
    mainStoriesRight.innerHTML = `<div class="heading-text text-style1">Popular Stories</div> ${generateArticleHtml(nextThreeStories, nextThreeReadTimes)}`;

    //capture the rest of the stories and put in left container
    let restOfStories = stories.slice(7);
    let restOfReadTimes = readTimes.slice(7);
    mainStoriesLeft.innerHTML = `${generateArticleHtml(restOfStories, restOfReadTimes)}`;
  } catch (e) {
    handleErrors(e);
  }
});
