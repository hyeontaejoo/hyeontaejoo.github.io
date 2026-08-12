/* =========================
   DARK MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;


if (savedTheme === "dark") {

  document.documentElement.setAttribute(
    "data-theme",
    "dark"
  );

} else if (
  savedTheme === null &&
  systemPrefersDark
) {

  document.documentElement.setAttribute(
    "data-theme",
    "dark"
  );

}


themeToggle.addEventListener("click", () => {

  const currentTheme =
    document.documentElement.getAttribute(
      "data-theme"
    );


  if (currentTheme === "dark") {

    document.documentElement.removeAttribute(
      "data-theme"
    );

    localStorage.setItem(
      "theme",
      "light"
    );

  } else {

    document.documentElement.setAttribute(
      "data-theme",
      "dark"
    );

    localStorage.setItem(
      "theme",
      "dark"
    );

  }

});



/* =========================
   MOBILE MENU
========================= */

const menuToggle =
  document.getElementById("menuToggle");

const navLinks =
  document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});


document
  .querySelectorAll(".nav-links a")
  .forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

    });

  });



/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          observer.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.08,
      rootMargin:
        "0px 0px -35px 0px"
    }

  );


revealElements.forEach(
  (element) => {

    observer.observe(element);

  }
);
