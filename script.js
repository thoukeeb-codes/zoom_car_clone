const aboutHeading1 = document.getElementById("about-heading1");
const aboutHeading2 = document.getElementById("about-heading2");
const aboutHeading3 = document.getElementById("about-heading3");
const aboutHeading4 = document.getElementById("about-heading4");
const aboutHeading5 = document.getElementById("about-heading5");
const aboutDescription1 = document.getElementById("about-description1");
const aboutDescription2 = document.getElementById("about-description2");
const aboutDescription3 = document.getElementById("about-description3");
const aboutDescription4 = document.getElementById("about-description4");
const aboutDescription5 = document.getElementById("about-description5");
const hamburgerBox = document.getElementById("hamburger-box");
const transparentHoverScreen = document.getElementById(
  "transparent-hover-screen"
);
const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");

hamburgerBox.addEventListener("click", function () {
  // Show transparent hover screen
  transparentHoverScreen.style.display = "block";
});

// Add click event listener to message2
message2.addEventListener("click", function () {
  // Hide transparent hover screen when message2 is clicked
  transparentHoverScreen.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const headings = [
    document.getElementById("about-heading1"),
    document.getElementById("about-heading2"),
    document.getElementById("about-heading3"),
    document.getElementById("about-heading4"),
    document.getElementById("about-heading5"),
  ];

  const descriptions = [
    document.getElementById("about-description1"),
    document.getElementById("about-description2"),
    document.getElementById("about-description3"),
    document.getElementById("about-description4"),
    document.getElementById("about-description5"),
  ];

  function hideAllDescriptions() {
    descriptions.forEach((description) => {
      description.style.display = "none";
    });
  }

  function removeUnderlineFromAllHeadings() {
    headings.forEach((heading) => {
      heading.classList.remove("underline");
    });
  }

  function showDescription(index) {
    hideAllDescriptions();
    removeUnderlineFromAllHeadings();
    descriptions[index].style.display = "block";
    headings[index].classList.add("underline");
  }

  headings.forEach((heading, index) => {
    heading.addEventListener("click", function () {
      showDescription(index);
    });
  });

  showDescription(0);
});
