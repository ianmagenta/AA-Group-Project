import { handleErrors, generateArticleHtml, generateUserHtml } from "./utils.js";

document.addEventListener("DOMContentLoaded", async (e) => {
  const topStoriesContainer = document.querySelector(".top-stories-container");
  const mainStoriesLeft = document.querySelector(".main-stories-left");
  const mainStoriesRight = document.querySelector(".main-stories-right");

  try {
    const res = await fetch(`http://localhost:8080/story`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
    const data = await res.json();
    const { stories, readTimes, storyLikes } = data;

    //TODO these stories should be the most recent?
    let firstThreeStories = stories.slice(0, 3);
    let firstThreeReadTimes = readTimes.slice(0, 3);
    topStoriesContainer.innerHTML = `${generateArticleHtml(firstThreeStories, firstThreeReadTimes, storyLikes)}`;

    //TODO rewrite after likes are working properly, these should be most liked
    let nextThreeStories = stories.slice(3, 6);
    let nextThreeReadTimes = readTimes.slice(3, 6);
    mainStoriesRight.innerHTML = `<div class="heading-text text-style1">Popular Stories</div> ${generateArticleHtml(nextThreeStories, nextThreeReadTimes, storyLikes)}`;

    //capture the rest of the stories and put in left container
    let restOfStories = stories.slice(6);
    let restOfReadTimes = readTimes.slice(6);
    mainStoriesLeft.innerHTML = `${generateArticleHtml(restOfStories, restOfReadTimes, storyLikes)}`;
  } catch (e) {
    handleErrors(e);
  }
});
