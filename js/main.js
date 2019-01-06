function toggleNav() {
  var current_style = document.getElementsByClassName("list")[0];


  if (current_style.style.display === "none") {
    current_style.style.display = "flex";
  } else {
    current_style.style.display = "none";
  }
}
