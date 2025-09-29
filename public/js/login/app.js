document.addEventListener("DOMContentLoaded", () => {
  const indice = sessionStorage.getItem("indice");
  const container = document.querySelector(".container");

  if (indice === "count") {
    container.classList.add("sign-up-mode");
    sessionStorage.removeItem("indice");
  }

  const sign_in_btn = document.querySelectorAll(".signin-link");
  const sign_up_btn = document.querySelectorAll(".signup-link");

  sign_up_btn.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      container.classList.add("sign-up-mode");
    });
  });

  sign_in_btn.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      container.classList.remove("sign-up-mode");
    });
  });
});
