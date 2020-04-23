import { handleErrors } from "./utils.js";


document.addEventListener("DOMContentLoaded", async () => {
  const userId = localStorage.getItem("RARE_USER_ID");
  const userName = document.querySelector('.username');
  const memberSince = document.querySelector('.member-since');
  const bio = document.querySelector('.bio');
  try {
    const res = await fetch(`http://localhost:8080/users/${userId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
    const data = await res.json();
    const { user } = data;
    console.log(user);
    if (res.status >= 401) {
      window.location.href = "./login";
      return;
    }

    if (res.ok) {
      let newJoinTime = new Date(user.createdAt.replace("T", " ")).toDateString();

      userName.innerHTML = `${user.userName}`;
      memberSince.innerHTML = `${newJoinTime}`;
      bio.innerHTML = `${user.bio}`;
    }
  } catch (err) {
    handleErrors(err);
  }
});
