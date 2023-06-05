window.addEventListener('load', function() {
    // Find the loading screen element
    var loadingScreen = document.querySelector('.loadingScreen');
    
    // Remove the loading screen element
    if (loadingScreen) {
      loadingScreen.parentNode.removeChild(loadingScreen);
    }
  });   