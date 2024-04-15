$(document).ready(function () {
  const tabtitle = $(".tab-nav li a");
  tabtitle.click(function (e) {
    e.preventDefault();
    tabtitle.removeClass("active");
    $(this).addClass("active"); // 클래스 이름을 전달하여 수정
    $(".tabitem").hide();
    let target = $(this).attr("href");
    $(target).show();
  });
  tabtitle.eq(0).trigger("click"); //  특정 탭을 자동으로 활성화하는 데 사용
});
