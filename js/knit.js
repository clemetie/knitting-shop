$(document).ready(function () {
  // 햄버거바 누르면 메뉴가 슝 ..

  $("#hamburger-menu").click(function () {
    $(".mobile-nav").animate(
      {
        right: 0,
      },
      300
    );
  });
  //   close버튼 누르면 메뉴가 저~멀리 돌아감
  $(".close").click(function () {
    $(".mobile-nav").animate(
      {
        right: -300,
      },
      300
    );
  });
  $("#hamburger-menu").on("click", function () {
    $(".mobile-wrap").addClass("active");
  });
  $(".close").on("click", function () {
    $(".mobile-wrap").removeClass("active");
  });

  // 모달 닫기 (배경 클릭)
  $(".mobile-wrap").on("click", function (e) {
    if ($(e.target).is(".mobile-wrap")) {
      $(".mobile-wrap").removeClass("active");
    }
  });
});
window.onload = function(){
  var swiper = new Swiper(".bestSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    Loop: true,
    grid: {
      rows: 3,
      fill: "row",
    },
    breakpoints: {
      // centeredSlides: true,

      480: {
        slidesPerView: 3,
        grid: {
          rows: 2, // 행: 2개
        },
       
      },

      768: {
        slidesPerView: 3.5,
        grid: {
          rows: 1, // 행: 2개
        },
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".visualSwiper", {
    centeredSlides: true,
    roop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".mobileSwiper", {
    centeredSlides: true,
    Loop: true,
    rewind: true,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}