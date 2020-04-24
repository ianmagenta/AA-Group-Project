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
    const data = await res.json();
    const { user } = data;
    console.log(user);
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
    console.log(stories);

    let articlesHTML = generateArticleHtml(stories);
    articleContainer.innerHTML = articlesHTML;

  } catch (err) {
    handleErrors(err);
  }
});
