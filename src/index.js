import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLeaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  const addCommentButton = document.getElementById("add-comment");

  addCommentButton.addEventListener("click", function () {
    var commentsList = document.getElementById("comments-list");
    var comment = document.createElement("li");
    comment.appendChild(
      document.createTextNode(document.getElementById("new-comment").value)
    );
    commentsList.appendChild(comment);
  });
}
