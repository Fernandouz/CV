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
      //observer.disconnect(entry.target);
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

/*
if (entry.className == "right") {
      console.log("right");
    }
    if (entry.className == "left") {
      console.log("left");
    }
*/
