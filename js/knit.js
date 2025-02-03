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
window.onload = function () {
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
          rows: 1, // 행: 1개
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
  var swiper = new Swiper(".btbannerSwiper", {
    centeredSlides: true,
    Loop: true,
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
  var swiper = new Swiper(".barSwiper", {
    direction: "vertical",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
 
  const BestBt = document.querySelector(".best-tab");
  BestBt.addEventListener("click", function () {
    scrollToSection("#best");
  });
  function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  const NewBt = document.querySelector(".new-tab");
  NewBt.addEventListener("click", function () {
    scrollToSection("#new");
  });
  function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  const NoticeBt = document.querySelector(".notice-tab");
  NoticeBt.addEventListener("click", function () {
    scrollToSection("#notice");
  });
  function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  const ReviewBt = document.querySelector(".review-tab");
  ReviewBt.addEventListener("click", function () {
    scrollToSection("#review");
  });
  function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  const topBtn = document.querySelector(".top-btn");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    // a href#은 가장 위로 가면서 새로고침하는 기본 event가 있는데 기본 event를 default 없애주는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

