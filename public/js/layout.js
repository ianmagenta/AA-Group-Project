import { handleErrors, api } from "./utils.js";
const signInOrUsername = document.querySelector(".sign-in-top");
const RegisterOrLogout = document.querySelector(".register-top");
signInOrUsername.innerHTML = `<a href="/login">Sign in</a>`;
RegisterOrLogout.innerHTML = `<a href="/register">Register</a>`;
let perfEntries = performance.getEntriesByType("navigation");

if (perfEntries[0].type === "back_forward") {
  location.reload(true);
}

document.addEventListener("DOMContentLoaded", async () => {
  const userId = localStorage.getItem("RARE_USER_ID");
  if (!userId) {
    window.location.href = "/splash";
    return;
  }
  try {
    // if (userId) {
    const res = await fetch(`${api}user/${userId}`,
      {
        headers:
        {
          Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}`
        }
      }
    );
    if (!res.ok) {
      window.location.href = "/splash";
      return;
    }
    const data = await res.json();
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
