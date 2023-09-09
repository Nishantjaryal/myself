document.getElementById("hamburgerOf").style.display = "none";
document.getElementById("popHam").style.display = "none";

let show = () => {
  document.getElementById("popHam").style.display = "block";
  document.getElementById("hamburger").style.display = "none";
  document.getElementById("hamburgerOf").style.display = "block";

};
let hide = () => {
  document.getElementById("popHam").style.display = "none";
  document.getElementById("hamburger").style.display = "block";
  document.getElementById("hamburgerOf").style.display = "none";
};