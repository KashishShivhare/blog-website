
document.querySelectorAll(".comment-form").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    
    const name = this.querySelector("input").value.trim();
    const comment = this.querySelector("textarea").value.trim();

    
    if (name && comment) {
      
      const commentList = this.previousElementSibling;

      
      const newComment = document.createElement("li");
      newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;

      
      commentList.appendChild(newComment);

    
      this.reset();
    } else {
      alert("Please enter both your name and a comment.");
    }
  });
});
