var $ideation = $('.ideation')
var $system = $('.system')
var $colour = $('.colour')
var $typography = $('.typography')
var $iconography = $('.iconography')
var $usability_1 = $('.usability-1')
var $usability_2 = $('.usability-2')
var $usability_3 = $('.usability-3')
var $usability_4 = $('.usability-4')


$ideation.addClass('js-allow-work-animation')
$system.addClass('js-allow-work-animation')
$colour.addClass('js-allow-work-animation')
$typography.addClass('js-allow-work-animation')
$iconography.addClass('js-allow-work-animation')
$usability_1.addClass('js-allow-work-animation')
$usability_2.addClass('js-allow-work-animation')
$usability_3.addClass('js-allow-work-animation')
$usability_4.addClass('js-allow-work-animation')

$ideation.waypoint(function (direction) {
  if (direction == 'down') {
    $ideation.addClass('js-work-animate');
  } else {
    $ideation.removeClass('js-work-animate');
  }
}, {offset: '60%'});

$system.waypoint(function (direction) {
  if (direction == 'down') {
    $system.addClass('js-work-animate');
  } else {
    $system.removeClass('js-work-animate');
  }
}, {offset: '60%'});

$colour.waypoint(function (direction) {
  if (direction == 'down') {
    $colour.addClass('js-work-animate');
  } else {
    $colour.removeClass('js-work-animate');
  }
}, {offset: '70%'});

$typography.waypoint(function (direction) {
  if (direction == 'down') {
    $typography.addClass('js-work-animate');
  } else {
    $typography.removeClass('js-work-animate');
  }
}, {offset: '70%'});

$iconography.waypoint(function (direction) {
  if (direction == 'down') {
    $iconography.addClass('js-work-animate');
  } else {
    $iconography.removeClass('js-work-animate');
  }
}, {offset: '70%'});

$usability_1.waypoint(function (direction) {
  if (direction == 'down') {
    $usability_1.addClass('js-work-animate');
  } else {
    $usability_1.removeClass('js-work-animate');
  }
}, {offset: '60%'});

$usability_2.waypoint(function (direction) {
  if (direction == 'down') {
    $usability_2.addClass('js-work-animate');
  } else {
    $usability_2.removeClass('js-work-animate');
  }
}, {offset: '60%'});

$usability_3.waypoint(function (direction) {
  if (direction == 'down') {
    $usability_3.addClass('js-work-animate');
  } else {
    $usability_3.removeClass('js-work-animate');
  }
}, {offset: '60%'});

$usability_4.waypoint(function (direction) {
  if (direction == 'down') {
    $usability_4.addClass('js-work-animate');
  } else {
    $usability_4.removeClass('js-work-animate');
  }
}, {offset: '60%'});
