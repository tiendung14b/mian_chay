function onShowAddAddress() {
  document.getElementById("add_address_popup").classList.add("show");
  document.getElementById("main").classList.add("blur");
  console.log("show");
}

function onBlur() {
  console.log("clicked");
  document.getElementById("add_address_popup").classList.remove("show");
  document.getElementById("main").classList.remove("blur");
}