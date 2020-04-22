const signInOrUsername = document.querySelector(".sign-in-top");
const RegisterOrLogout = document.querySelector(".register-top");

document.addEventListener("DOMContentLoaded", async () => {

  const userId = localStorage.getItem("RARE_USER_ID");
  try {
    if (userId) {
      const res = await fetch(`http://localhost:8080/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("RARE_ACCESS_TOKEN")}`
        }
      });
      console.log(res);
      if (res.status === 401) {
        // window.location.href = "/login";
        // return;
      }
      if (res.ok) {
        signInOrUsername.innerHTML = res.userName;
        RegisterOrLogout.innerHTML = "Logout";
      }
    }


    // const { tweets } = await res.json();
    // const tweetsContainer = document.querySelector(".tweets-container");
    // const tweetsHtml = tweets.map(({ message, id }) =>
    //   `<div class="card" id="tweet-${id}">
    //     <div class="card-body">
    //       <p class="card-text">${message}</p>
    //     </div>
    //   </div>`
    // );
    // console.log("Tweets:", tweetsHtml);
    // tweetsContainer.innerHTML = tweetsHtml.join("");

  } catch (err) {
    console.error(err);
  }
});
