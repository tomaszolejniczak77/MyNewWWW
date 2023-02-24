let checkBox = document.getElementById("check");
let menuActive = document.getElementById("menu");
let myPhoto = document.getElementById("footer");

let openMenu = () => {
  if (checkBox != true) {
    menuActive.classList.toggle("active");
  }

  if (myPhoto.style.display === "block") {
    myPhoto.style.display = "none";
  } else {
    myPhoto.style.display = "block";
  }
};

checkBox.addEventListener("click", openMenu);
