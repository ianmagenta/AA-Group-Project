import { handleErrors, generateArticleHtml, api } from "./utils.js";


document.addEventListener("DOMContentLoaded", async () => {
  const userId = localStorage.getItem("RARE_USER_ID");
  const userName = document.querySelector('.username');
  const memberSince = document.querySelector('.member-since');
  const bio = document.querySelector('.bio');
  const articleContainer = document.querySelector('.articles-container');
  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf('/') + 1);
  try {
    const res = await fetch(`${api}user/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
    const { user } = await res.json();
    if (res.status >= 401) {
      window.location.href = "/login";
      return;
    }

    if (res.ok) {
      let newJoinTime = new Date(user.createdAt.replace("T", " ")).toDateString();
      document.title = `${user.userName}'s Profile`
      userName.innerHTML = `${user.userName}`;
      memberSince.innerHTML = `Rare member since ${newJoinTime}`;
      bio.innerHTML = `${user.bio}`;
    }
  } catch (err) {
    handleErrors(err);
  }

  //load stories by user
  try {
    const res = await fetch(`${api}story/by/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
    const data = await res.json();
    const { stories } = data;
    // console.log(stories);

    let articlesHTML = `<div class="heading-text text-style1">Authored Stories</div>` + generateArticleHtml(stories);
    articleContainer.innerHTML = articlesHTML;

  } catch (err) {
    handleErrors(err);
  }

  //load liked stories by user
  try {
    // console.log('log here');
    const res = await fetch(`${api}story/`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
    const data = await res.json();
    const { stories } = data;
    //console.log(stories);

    let likedStoriesHTML = `<div class="heading-text text-style1">Liked Stories</div>`;
    let storiesLiked = [];
    console.log("STORIES", stories);
    stories.forEach(story => {
      const { storyLikes } = story;
      storyLikes.forEach(like => {
        //console.log('LIKE', like);
        if (like.userId === parseInt(id, 10)) {
          //console.log('STORY', story);
          storiesLiked.push(story);
          //storiesLiked.push(stories[like.storyId]);
        }
      })
    });

    // filters out undefined variables from storiesLiked (which can occasionally appear)
    storiesLiked = storiesLiked.filter(function (el) {
      return el != null;
    });

    let popStories = [];
    storiesLiked.forEach(element => {
      if (element.storyLikes.length > 0) {
        popStories.push(element)
      }

    });
    popStories.sort((a, b) => {
      return new Date(b.storyLikes[0].createdAt.replace(' ', 'T')) - new Date(a.storyLikes[0].createdAt.replace(' ', 'T'));
    });

    likedStoriesHTML += generateArticleHtml(popStories);
    const likedStoriesContainer = document.querySelector(".likes-container");
    likedStoriesContainer.innerHTML = likedStoriesHTML;
  } catch (err) {
    handleErrors(err);
  }
});
