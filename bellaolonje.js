const playstorebtn = document.querySelector(".playstore-btn");
const appstorebtn = document.querySelector(".appstore-btn");

playstorebtn.addEventListener("click", function (e) {
  window.location.href = "https://play.google.com/store";
});
appstorebtn.addEventListener("click", function (e) {
  window.location.href = "https://apps.apple.com";
});

const twittericon = document.querySelector("twitter-icon");

twittericon.addEventListener("click", function () {
  window.location.href = "";
});

const fruits = ["orange", "mango", " Banana", " stawberry"];
fruits.splice()
console.log(fruits);
