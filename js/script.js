// paralax hero
$(window).scroll(function () {
  // navbar transparant to color on scrollTop
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 250);

  // hero Portofolio
  var wScroll = $(this).scrollTop();

  $(".hero img").css({
    transform: "translate(5px 0px, " + wScroll / 4 + "%)",
  });
  $(".hero h1").css({
    transform: "translate(0px, " + wScroll / 2.5 + "%)",
  });
  $(".hero p").css({
    transform: "translate(0px, " + wScroll / 1.2 + "%)",
  });
  $(".hero p").css({
    transform: "translate(0px, " + wScroll / 1.2 + "%)",
  });
});

// click trigger
$(".scroll-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});

$("button.navbar-toggler").click(function () {
  $(".navbar").addClass("scrolled");
});

// Contact Form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbywHVdJF2zQWLnBNgtqgyamyntHiNjQuv7CQpBJGtLJ3n7uViawgZy1_q0lAQdm9srhKQ/exec";
const form = document.forms["grading-group-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol sumbit diklik
  // tampilkan tombol loading dan hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // setelah tombol sumbit diklik
      // tampilkan tombol kirim dan hilangkan loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert pesan success
      myAlert.classList.toggle("d-none");
      // reset form nya
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

// footer
document.getElementById("year").innerHTML = new Date().getFullYear();

// Fake Loader JS
$(document).ready(function () {
  $.fakeLoader({
    bgColor: "#1d2b53",
    spinner: "spinner2",
  });
});

// tilt JS
VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 35,
  speed: 300,
});
