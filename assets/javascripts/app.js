$(document).ready(function(){
  $('header nav').affix({
    offset: {
    top: 100,
    }
  });

  $('body').scrollspy({ 
    target: '#nav-link-container',
    offset: 55 
  })
});
