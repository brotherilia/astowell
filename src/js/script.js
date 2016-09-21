$(document).ready(function(){

  // Всплывающее окно с изображением

  var popupLink = $(".js-img-link");
  var firstPopupLink = popupLink.first();
  var lastPopupLink = popupLink.last();
  var firstPopupIdx = popupLink.index(firstPopupLink);
  var lastPopupIdx = popupLink.index(lastPopupLink);
  var lastSlideNumber = lastPopupIdx + 1;
  var popupIdx;
  var popupBgr;
  var popupBlock = $(".popup");
  var popupOldSlide = $(".js-old-slide");
  var popupNewSlide = $(".js-new-slide");
  var popupHeader = $(".popup__header");
  var popupFooter = $(".popup__footer");
  var popupPrev = $(".js-prev-img");
  var popupNext = $(".js-next-img");
  var slideDuration = 400;

  var setupSlide = function(){
    var popupCurrent = popupLink.eq(popupIdx);
    var popupTitle = popupCurrent.attr("title");
    var popupAlt = popupCurrent.attr("alt");
    var popupName = popupCurrent.attr("name");
    var currentSlideNumber = popupIdx + 1;
    var popupCounter = currentSlideNumber+" из "+lastSlideNumber;
    popupBgr = popupCurrent.attr("id");
    popupNewSlide.css({"background-image": "url('../"+popupBgr+"')"});
    if (popupTitle){
      popupHeader.text(popupTitle).css({"opacity": "1"});
    }
    else {
      popupHeader.css({"opacity": "0"});
    }
    if (popupAlt){
      popupFooter.text(popupCounter+": "+popupAlt);
    }
    else if (popupName){
      popupFooter.text(popupCounter+": "+popupName);
    }
    else {
      popupFooter.text(popupCounter);
    }
  }

  var prevSlide = function(){
    popupOldSlide.css({"left": "0", "background-image": "url('../"+popupBgr+"')", "opacity": "1"});
    popupNewSlide.css({"left": "-100%", "opacity": "0"});
    if (popupIdx == firstPopupIdx){
      popupIdx = lastPopupIdx;
    }
    else {
      popupIdx--;
    }
    $(setupSlide);
    popupOldSlide.animate({"left": "100%", "opacity" : "0"}, slideDuration);
    popupNewSlide.animate({"left": "0", "opacity" : "1"}, slideDuration);
  }

  var nextSlide = function(){
    popupOldSlide.css({"left": "0", "background-image": "url('../"+popupBgr+"')", "opacity": "1"});
    popupNewSlide.css({"left": "100%", "opacity": "0"});
    if (popupIdx == lastPopupIdx){
      popupIdx = firstPopupIdx;
    }
    else {
      popupIdx++;
    }
    $(setupSlide);
    popupOldSlide.animate({"left": "-100%", "opacity" : "0"}, slideDuration);
    popupNewSlide.animate({"left": "0", "opacity" : "1"}, slideDuration);
  }

  popupLink.click(function(event){
    popupIdx = popupLink.index(this);
    $(setupSlide);
    popupBlock.fadeIn().css({"display": "block"});
  });

  popupPrev.click(function(event){
    event.stopImmediatePropagation();
    $(prevSlide);
  });

  popupBlock.on("swiperight",function(event){
    $(prevSlide);
  });

  popupNext.click(function(event){
    event.stopImmediatePropagation();
    $(nextSlide);
  });

  popupBlock.on("swipeleft",function(event){
    $(nextSlide);
  });

  popupBlock.click(function(event){
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
      $(".to-top-btn").fadeIn();
    }
    else {
      $(".to-top-btn").fadeOut();
    }
  });

  $(".to-top-btn").click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
