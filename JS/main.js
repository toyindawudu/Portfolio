// // When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

//Starting again

$(window).on('scroll', function() {
    if($(window).scrollTop()) {
        $(nav).addClass('black');
    }
    else {
        $(nav).removeClass('black');
    }
})

// $window = $(window);
// $window.scroll(function() {
//   $scroll_position = $window.scrollTop();
//     if ($scroll_position > 300) { // if body is scrolled down by 300 pixels
//         $('.myHeader').addClass('sticky');

//         // to get rid of jerk
//         header_height = $('.myHeader').innerHeight();
//         $('body').css('padding-top' , header_height);
//     } else {
//         $('body').css('padding-top', '0');
//         $('.myHeader').removeClass('sticky');
//     }
//  });