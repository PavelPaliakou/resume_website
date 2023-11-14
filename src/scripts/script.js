$(document).ready(function () {

    var inview = new Waypoint.Inview({
        element: $('.jump-when-visible'),
        enter: function (direction) {
            if(direction === "up") {
                $('.jump-when-visible').addClass('jump-animation-up');
            } else {
                $('.jump-when-visible').addClass('jump-animation-down');
            }
            // console.log("enter function direction: " + direction);
        },
        entered: function (direction) {
        },
        exit: function (direction) {
            $('.jump-when-visible').removeClass('jump-animation-up');
            $('.jump-when-visible').removeClass('jump-animation-down');
        },
        exited: function (direction) {
        }
    });

});