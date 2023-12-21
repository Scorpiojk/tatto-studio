// JavaScript to set the modal image source when an image is clicked
$(".img-thumbnail").click(function () {
  var imgSrc = $(this).attr("src");
  $("#modalImage").attr("src", imgSrc);
});
