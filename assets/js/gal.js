
$('.menu-toggle').click(function(){
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});

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

function openImageOverlay(image) {
  // Create the image overlay element
  var overlay = document.createElement("div");
  overlay.classList.add("image-overlay");

  // Create the image element inside the overlay
  var overlayImage = document.createElement("img");
  overlayImage.src = image.src;
  overlayImage.alt = image.alt;
  overlay.appendChild(overlayImage);

  // Add the overlay to the body
  document.body.appendChild(overlay);

  // Add the 'active' class to display the overlay
  overlay.classList.add("active");

  // Close the overlay when clicked
  overlay.addEventListener("click", closeImageOverlay);
}

function closeImageOverlay() {
  // Remove the overlay from the body
  var overlay = document.querySelector(".image-overlay");
  overlay.parentNode.removeChild(overlay);
}

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");

  sections.forEach(function(section, index) {
    setTimeout(function() {
      section.classList.remove("opacity-0", "translate-y-5");
      section.classList.add("opacity-100", "translate-y-0");
    }, index * 500);
  });
});

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Prevent image drag and drop
document.addEventListener('dragstart', function (e) {
  e.preventDefault();
});

