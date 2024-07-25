$(function () { // 문서준비이벤트 (삭제X)

  //depth2
  $(".depth2, .depth2_bg").hide();
  $(".gnb > li").mouseenter(function () {
    $("#header").addClass("active");
    $("#header h1 img").attr("src", "img/common/logo.svg");
    $("#header .util .btn_sch img").attr("src", "img/common/icon_sch_b.svg");
    $(this).find(".depth2").stop().fadeIn();
    $(".depth2_bg").stop().fadeIn();
  });
  $(".gnb > li").mouseleave(function () {
    $("#header").removeClass("active");
    $("#header h1 img").attr("src", "img/common/logo_white.svg");
    $("#header .util .btn_sch img").attr("src", "img/common/icon_sch_w.svg");
    $(this).find(".depth2").stop().fadeOut();
    $(".depth2_bg").stop().fadeOut();
  });

  // mobile-menu
  $(".mmenu").hide();

  $("#header .ham").click(function () {
    $(".mmenu").stop().fadeIn();
  });

  $(".mheader .mmenu_close").click(function () {
    $(".mmenu").stop().fadeOut();
    location.reload();
  });

  $(".mgnb > li").click(function () {
    $(this).find(".mdepth2").slideDown();
    $(this).find(".mdepth1 > a").css({ "color": "#2A4791" });
    $(this).find(".mdepth1 > .slide_down").css({ "color": "#2A4791" });
    $(this).find(".mdepth1 > .slide_down").css({ "transform": "rotate(0deg)" });
  });

  // banner
  const mb = new Swiper('.mb', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false, },
    speed: 1000,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev", },
  });

  //introduce
  $(".introduce ul li").mouseenter(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active").addClass("active_other");
  });
  $(".introduce ul li").mouseleave(function () {
    $(this).removeClass("active");
    $(this).siblings().removeClass("active_other");
  });

  //movie
  const movie_list = new Swiper('.movie_list', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false, },
    speed: 1000,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev", },
  });

  //notice
  const notice_list = new Swiper('.notice_list', {
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false, },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

  //daily
  $(".daily .daily_area .img_box img").not(":first").hide();

  $(".daily .daily_area .txt_box .daily_list li").mouseenter(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let num = $(this).index();
    $(".daily .daily_area .img_box img").eq(num).show().siblings().hide();
  });

  //quick-menu
  $(window).scroll(function () {
    let btnScroll = $(this).scrollTop();
    if (btnScroll > 750) {
      $(".quick_area").addClass("active");
    } else {
      $(".quick_area").removeClass("active");
    }
  });

  $(".gotop").click(function () {
    $(window).scrollTop(0);
  });

  // fab-btn
  $(".mbtn_list").hide();
  $(".btn_fab").click(function () {
    $(".mbtn_list").stop().fadeIn().css({ "transform": "translateY(0)" });
  });
  $(".btn_fab_close, .mbtn_gotop").click(function () {
    $(".mbtn_list").stop().fadeOut().css({ "transform": "translateY(0)" });
  });

  $(".btn_fab_close").hide();
  $(".btn_fab").click(function () {
    $(".btn_fab_close").stop().fadeIn();
    $(".btn_fab").stop().fadeOut();
  });
  $(".btn_fab_close, .mbtn_gotop").click(function () {
    $(".btn_fab_close").stop().fadeOut();
    $(".btn_fab").stop().fadeIn();
  });

  $(".mbtn_gotop").click(function () {
    $(window).scrollTop(0);
  });

  $(window).scroll(function () {
    let mbtnScroll = $(this).scrollTop();
    if (mbtnScroll > 600) {
      $(".fab").addClass("active");
    } else {
      $(".fab").removeClass("active");
    }
  });

}); // 문서준비이벤트 (삭제X)