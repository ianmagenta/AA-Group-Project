const signInOrUsername = document.querySelector(".sign-in-top");
const RegisterOrLogout = document.querySelector(".register-top");
signInOrUsername.innerHTML = `<a href="/login">Sign in</a>`;
RegisterOrLogout.innerHTML = `<a href="/register">Register</a>`;

document.addEventListener("DOMContentLoaded", async () => {
  const userId = localStorage.getItem("RARE_USER_ID");
  // console.log('this runs');
  try {
    // if (userId) {
    const res = await fetch(`http://localhost:8080/users/${userId}`, { headers: { Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}` } });
    const data = await res.json();
    // console.log(data);
    const { user } = data;
    // console.log(user);
    if (res.status >= 401) {
      window.location.href = "./login";
      return;
    }

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
