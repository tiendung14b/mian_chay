function showText(item) {
  document.getElementById("post_relative").innerHTML = item.innerHTML;
  document.getElementById("post_relative").classList.add("clicked");
}

function showText2(item) {
  document.getElementById("product_price").innerHTML = item.innerHTML;
  document.getElementById("product_price").classList.add("clicked");
}

function on_blur() {
  console.log("clicked");
  document.getElementById("main").classList.add("blur");
}

function on_out() {
  console.log("clicked");
  document.getElementById("main").classList.remove("blur");
}