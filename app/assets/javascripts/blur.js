$(document).ready(function() {
  $('.appstore').click(function() {
    if($('.appstore').hasClass('blur'))
       $('.appstore').removeClass('blur');
    else($('.appstore')).addClass('blur');
  });
});
