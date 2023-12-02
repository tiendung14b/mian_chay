function showText(item) {
  document.getElementById("post_relative").innerHTML = item.innerHTML;
  document.getElementById("post_relative").classList.add("clicked");
}

function showText2(item) {
  document.getElementById("product_price").innerHTML = item.innerHTML;
  document.getElementById("product_price").classList.add("clicked");
}

document.getElementById("header__dropdown-menu").onfocus = function () {
  document.getElementById("main").classList.add("blur");
}