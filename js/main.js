function toggleNav() {
  var current_style = document.getElementsByClassName("list")[0];


  if (current_style.style.display === "none") {
    current_style.style.display = "flex";
  } else {
    current_style.style.display = "none";
  }
}

function showQuestion() {
  var current_style = document.getElementById("question-form").style.display = "block";

}

function showComment() {
  var current_style = document.getElementById("comment-form").style.display = "block";

}
