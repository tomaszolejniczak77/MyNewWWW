console.log("test");

let colorOfBackground = () => {
  document.getElementById("body").style.background = "green";
  document.getElementById("nav3").style.display = "none";
  document.getElementById("nav4").style.display = "block";
};

let defaultBackgrond = () => {
  document.getElementById("body").style.background = "#1e2939";
  document.getElementById("nav4").style.display = "none";
  document.getElementById("nav3").style.display = "block";
};
