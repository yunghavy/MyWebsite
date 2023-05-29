// Trigger fade-in animation on scroll
$(window).scroll(function() {
    var scrollPos = $(this).scrollTop();
    var sectionOffset = $('.parallax-section').offset().top;
  
    if (scrollPos >= sectionOffset - $(window).height() / 2) {
      $('.parallax-section').addClass('fade-in');
    }
  });

// button animation

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Youtube videos
// Loop selectors
var videos = document.querySelectorAll(".youtube");  
for (var i=0; i<videos.length; i++) {
  var youtube = videos[i];
  // Get function
  getVideos(youtube);
}

// Get videos function
function getVideos(el){
  var img = document.createElement("img");
  // Get images
  img.setAttribute('src', 'http://i.ytimg.com/vi/'+el.id+'/hqdefault.jpg');
  // Add class to img
  img.setAttribute('class', 'thumb');
  // Make div to embed videos
  var video = document.createElement("div");
  // Remove this if you like
  video.setAttribute("class","video_here");  
  // Insert tags
  el.appendChild(img);
  el.appendChild(video);
  // On click get video
  el.addEventListener('click',function(){ 
    var iframe = document.createElement("iframe");
    iframe.setAttribute('class','youtube_video');
    iframe.setAttribute('src','https://www.youtube.com/embed/'+
    this.id +'?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1'); 
    // Remplace img for video
    this.parentNode.replaceChild(iframe, this);
  },false);  
}