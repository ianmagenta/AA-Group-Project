import { handleErrors } from "./utils.js";
const registerForm = document.querySelector(".register-form");

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(registerForm);
  const email = formData.get("email");
  const password = formData.get("password");
  const userName = formData.get("userName");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");

  const body = { userName, password, firstName, lastName, email };

  try {
    const res = await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      }
    });

    if (!res.ok) {
      throw res;
    }
    const { token, user: { id }, } = await res.json();
    localStorage.setItem("RARE_ACCESS_TOKEN", token);
    localStorage.setItem("RARE_USER_ID", id);
    window.location.href = "/";
  } catch (err) {
    handleErrors(err);
  }
})
