$(".aztec button").click(function() {
    $(".aztec img").fadeOut();
});

$(".buryButton").click(function() {
    $(".bury img").slideUp();
});

$(".poof button").click(function() {
    $(".poof img").show();
});

$(".r").click(function() {
    $(".poof img").hide();
    $(".bury img").slideDown();
    $(".aztec img").fadeIn();
});