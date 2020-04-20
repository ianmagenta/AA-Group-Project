const registerForm = document.querySelector(".register-form");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(registerForm);
  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");

  const body = { email, password, username, firstName, lastName };

  try {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (!res.ok) {
      throw res;
    }

    // JWT???
    // const { token, user: { id }, } = await res.json();
    // localStorage.setItem("RARE_ACCESS_TOKEN", token);
    // localStorage.setItem("RARE_USER_ID", id);
    // window.location.href = "/";
  } catch (err) {
    //handle errors bette later
    console.log(err);
  }
})
