// Esercizio n°1

let twitter = document.querySelector(
  ".col-md-4.blog-sidebar .p-4:last-of-type .list-unstyled:first-of-type li:nth-of-type(2) "
);
console.log(twitter);
const removeTwitter = function () {
  twitter.remove();
};
removeTwitter();

// Esercizio n°2

const linkForElimination = document.querySelector(
  ".position-static:first-of-type"
);
const link = document.querySelector(
  ".position-static:first-of-type a:first-of-type"
);

link.addEventListener("click", function () {
   linkForElimination.parentNode.parentNode.remove(linkForElimination)
  
});


// link.addEventListener("click", function() {
//   linkForElimination.closest(".col-md-6").remove()
// })

//    Esercizio n°3

const alertName = function (ev) {
  let author = ev.target.innerText;
  alert(`Author: ${author}`);
}

let authorName = document.querySelectorAll(".blog-post-meta a")
for (let i = 0; i < authorName.length; i++) {
  authorName[i].addEventListener("mouseover", alertName)
}

