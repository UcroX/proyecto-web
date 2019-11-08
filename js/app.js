$(document).ready(function () {
  $(document).on("scroll", onScroll);

  $('nav a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('nav a').each(function () {
      $(this).removeClass('active-button');
    })
    $(this).addClass('active-button');

    var target = this.hash;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event){
  var scrollPosition = $(document).scrollTop();
  $('nav a').each(function () {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
      $('nav a').removeClass("active-button");
      currentLink.addClass("active-button");
    }
    else{
      currentLink.removeClass("active-button");
    }
  });
}