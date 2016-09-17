$(document).ready(function(){

  // Всплывающее окно с изображением

  $(".js-img-link").click(function(event){
    event.preventDefault();
    var popupBgr = $(this).attr("id");
    var popupTitle = $(this).attr("title");
    var popupComment = $(this).attr("alt");
    $(".img-popup").css({"background-image": "url('../"+popupBgr+"')"});
    if (popupTitle){
      $(".img-popup__header").text(popupTitle).css({"display": "block"});
    }
    else {
      $(".img-popup__header").css({"display": "none"});
    }
    if (popupComment){
      $(".img-popup__footer").text(popupComment).css({"display": "block"});
    }
    else {
      $(".img-popup__footer").css({"display": "none"});
    }
    $(".img-popup").fadeIn().css({"display": "flex"});
  });

  $(".img-popup").click(function(event){
    $(this).fadeOut();
  });

  // Всплывающее меню

  $(".js-menu-link").click(function(event){
    var displayMode  = $(".js-menu-popup").css("position");
    if (displayMode == "fixed"){
      event.preventDefault();
      $(".js-menu-popup").fadeIn();
    }
  });

  $(".js-menu-popup").click(function(event){
    $(this).fadeOut();
  });

  $(".main-nav__items").click(function(event){
    event.stopImmediatePropagation();
  });

  $(window).resize(function(){
    var displayMode  = $(".js-menu-popup").css("position");
    if (displayMode == "fixed"){
      $(".js-menu-popup").hide();
    }
    else {
      $(".js-menu-popup").show();
    }
  });

  // Плавная прокрутка страницы наверх

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100){
      $(".to-top-arrow").fadeIn();
    }
    else {
      $(".to-top-arrow").fadeOut();
    }
  });
  $(".to-top-arrow").click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
