function on_focus() {
  console.log("clicked");
  document.getElementById("main").classList.add("blur");
}

function on_blur() {
  console.log("clicked");
  document.getElementById("main").classList.remove("blur");
}