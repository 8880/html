// 注册
$("#login-b, #login").mouseover(function(){
  $("#login-b").css("background-color", "#fff");
  $("#login").css("color", "#367ae0")
  $("#login-b").mouseout(function(){
    $("#login-b").css("background-color", "")
    $("#login").css("color", "#fff")
  });
});

$(".top-nav li").mouseover(function(){
  sy = $(this).index(".top-nav li")
  $(".ss .top1").eq(sy).show()
  $(".top-nav ul li div").eq(sy).show()
  $(".ss .top1").not($(".ss .top1").eq(sy)).hide()
  $(".top-nav ul li div").not($(".top-nav ul li div").eq(sy)).hide()

  $(".top-nav li").mouseout(function(){
    sy = $(this).index(".top-nav li")
    $(".ss .top1").eq(sy).hide()
    $(".top-nav ul li div").eq(sy).hide()
  });

});
