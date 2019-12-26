"use strict";

(function(){
    var numberList = document.querySelectorAll(".statistics__digets td");

    function update_users_count(data, count, time) {
        $(data).animate({
            counter: count
        }, {
            duration: time,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            },
            complete: update_users_count
        });
    };

    window.addEventListener("scroll", function (evt) {
        if (window.scrollY > 2700 && window.scrollY < 3150) {
            update_users_count(numberList[0], 1230, Math.floor((Math.random() * 3000) + 1000));
            update_users_count(numberList[1], 961, Math.floor((Math.random() * 3000) + 1000));
            update_users_count(numberList[2], 1322, Math.floor((Math.random() * 3000) + 1000));
            update_users_count(numberList[3], 9650, Math.floor((Math.random() * 3000) + 1000)); 
        }
    });

})();
