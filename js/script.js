//スクロールイベント取得
$(window).on("scroll", function () {
  //スクロール位置を取得
  var scrollY = $(window).scrollTop();
  //background-size+(スクロール位置/10)
  var bgSize = 100 + scrollY / 10;

  //bgSizeが200より小さければ
  if (bgSize < 200) {
    //background-sizeにbgSizeを設定
    $(".keyvisual").css("background-size", bgSize + "%");
  }
});
