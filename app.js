// animation souris
const blob = document.getElementById("blob");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

// animation title
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.target.className == "right") {
      const animation = entry.target.animate(
        [
          {
            opacity: 0,
            transform: "translateX(50%)",
          },
          {
            opacity: 1,
            transform: "translateX(0%)",
          },
        ],
        { duration: 1500 }
      );
    }
    if (entry.target.className == "left") {
      entry.target.animate(
        [
          { opacity: 0, transform: "translateX(-50%)" },
          { opacity: 1, transform: "translateX(0%)" },
        ],
        { duration: 1500 }
      );
    }
  }
});

observer.observe(document.querySelector("#profil h2"));
observer.observe(document.querySelector("#skills h2"));
observer.observe(document.querySelector("#formation h2"));
observer.observe(document.querySelector("#portfolio h2"));
observer.observe(document.querySelector("#contact h2"));

// Partie contact

const flexContacts = document.querySelectorAll(".flex-contact");

flexContacts.forEach((contact) => {
  const text = contact.querySelector(" p");
  const icon = contact.querySelector(".icon");
  const logo = contact.querySelector(".icon i");

  icon.addEventListener("mouseenter", () => {
    icon.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.5)" },
        { transform: "scale(1)" },
      ],
      {
        duration: 1000,
      }
    );
    logo.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
      {
        duration: 700,
      }
    );
    text.style.display = "block";
  });
});

// Navigation

window.addEventListener("scroll", (e) => {
  const navBar = document.querySelector(".nav");
  if (scrollY > 550) {
    navBar.classList.add("white-nav");
  }
  if (scrollY < 550) {
    navBar.classList.remove("white-nav");
  }
});
