$(document).ready(function() {
  var video     = $("video#awesome_video")[0];
  var audio     = $("audio#awesome_audio")[0];
  var bg        = $('div.black')
  var staticPic = $('div.static')

  $("div.sticker").click(function() {
    video.currentTime = 0;
    audio.currentTime = 0;
    bg.fadeOut('slow');
    staticPic.fadeOut('slow');
    video.play();
    audio.play();
  });
});