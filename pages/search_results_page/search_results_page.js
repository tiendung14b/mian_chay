function showText(item) {
  document.getElementById("post_relative").innerHTML = item.innerHTML;
  document.getElementById("post_relative").classList.add("clicked");
}