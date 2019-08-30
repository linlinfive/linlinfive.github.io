$(function () {
  //banne背景轮播
  var count = -1;
  var list = $('.banner li');
  $(".banner li").eq(0).show()
  setInterval(function () {
    count++;
    if (count > list.length) {
      count = 0
    }
    $(".banner li").eq(count).fadeIn().siblings().fadeOut()
  }, 3500)
  //导航栏固定
  $(document).scroll(function () {
    if ($(document).scrollTop() >= $('header').height()) {
      $('.nav').addClass('navbar-fixed-top')
      $('#aboutme').css('marginTop',"100px")

    } else {
      $('nav').removeClass('navbar-fixed-top')
      $('#aboutme').css('marginTop', "0")
    }
  })
})

