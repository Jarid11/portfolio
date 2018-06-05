console.log(window.innerWidth);

function scrollToHome() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToAbout() {
  if (window.innerWidth > 600) {
    window.scrollTo({ top: 880, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 435, behavior: "smooth" });
  }
}

function scrollToProjects() {
  window.scrollTo({ top: 1150, behavior: "smooth" });
}

function scrollToSkills() {
  if (window.innerWidth > 600) {
    window.scrollTo({ top: 1850, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 2600, behavior: "smooth" });
  }
}

function scrollToContact() {
  if (window.innerWidth > 600) {
    window.scrollTo({ top: 4000, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 4600, behavior: "smooth" });
  }
}
