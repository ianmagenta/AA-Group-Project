import { handleErrors } from "./utils.js";
const signInOrUsername = document.querySelector(".sign-in-top");
const RegisterOrLogout = document.querySelector(".register-top");
signInOrUsername.innerHTML = `<a href="/login">Sign in</a>`;
RegisterOrLogout.innerHTML = `<a href="/register">Register</a>`;

document.addEventListener("DOMContentLoaded", async () => {
  const userId = localStorage.getItem("RARE_USER_ID");
  // console.log('this runs');
  try {
    // if (userId) {
    const res = await fetch(`http://localhost:8080/user/${userId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
    if (!res.ok) {
      // console.log(user);
      window.location.href = "/splash";
      return;
    }
    const data = await res.json();
    // console.log(data);
    const { user } = data;

    if (res.ok) {
      RegisterOrLogout.addEventListener("click", (e) => {
        localStorage.removeItem("RARE_ACCESS_TOKEN");
        localStorage.removeItem("RARE_USER_ID");
      });
      signInOrUsername.innerHTML = `<a href="/profile/${userId}">${user.userName}</a>`;
      RegisterOrLogout.innerHTML = `<a href="/splash">Logout</a>`;
    }
    // }
  } catch (err) {
    handleErrors(err);
  }
});
