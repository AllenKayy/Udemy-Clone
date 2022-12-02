let slideIndex = 5;
showSlides(slideIndex);

// Next/previous controls
function slides(n) {
  showSlides(slideIndex += n);
}

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("carousel_items");
// //   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 5}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i <= 5; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-5].className += " active";
}