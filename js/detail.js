window.onload = function () {
  var swiper = new Swiper(".detailSwiper", {
    direction: "vertical",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  let counter = document.querySelector("#ordCnt_140104227");
  let increase = document.querySelector("#plusbtn");
  let decrease = document.querySelector("#minusbtn");
  let count = 0;
  increase.addEventListener("click", function () {
    console.log("click");
    count++;
    counter.value = count;
  });
  decrease.addEventListener("click", function () {
    console.log("click");
    count--;
    counter.value = count;
  });
};
