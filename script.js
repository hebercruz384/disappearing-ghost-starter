$(".hide-button").click(function(){
  $(".ghost-image").hide();
});

$(".show-button").click(function(){
  $(".ghost-image").show();
});

$(".update-img-button").click(function(){
  $("img").attr("src","https://cdn.glitch.com/c8fa84e9-fbd9-4cae-8c0a-0fcf25227667%2FDimple.png?v=1605827518167")
});

$(".message-button").click(function(){
  let input = $(".input").val();