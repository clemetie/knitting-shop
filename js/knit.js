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
        right: -200,
      },
      300
    );
  });
});
