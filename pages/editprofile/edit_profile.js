function onShowAddAddress() {
  document.getElementById("add_address_popup").classList.add("show");
  document.getElementById("main").classList.add("blur");
  document.getElementById("main").classList.add("total_blur");
  console.log("show");
}

function onShowUpdateAddress() {
  document.getElementById("update_address_popup").classList.add("show");
  document.getElementById("main").classList.add("blur");
  document.getElementById("main").classList.add("total_blur");
  console.log("show");
}

function onConfirmDeleteAddress() {
  document.getElementById("delete_address_popup").classList.add("show");
  document.getElementById("main").classList.add("blur");
  document.getElementById("main").classList.add("total_blur");
  console.log("show");
} 

function onShowChangePhone() {
  document.getElementById("change_phone").classList.add("show");
  document.getElementById("main").classList.add("blur");
  document.getElementById("main").classList.add("total_blur");
  console.log("show");
}

function onShowResetPassword() {
  document.getElementById("reset_pass_popup").classList.add("show");
  document.getElementById("main").classList.add("blur");
  document.getElementById("main").classList.add("total_blur");
  console.log("show");
}

function onBlur() {
  console.log("clicked");
  document.getElementById("add_address_popup").classList.remove("show");
  document.getElementById("update_address_popup").classList.remove("show");
  document.getElementById("delete_address_popup").classList.remove("show");
  document.getElementById("change_phone").classList.remove("show");
  document.getElementById("reset_pass_popup").classList.remove("show");
  document.getElementById("main").classList.remove("blur");
  document.getElementById("main").classList.remove("total_blur");
}