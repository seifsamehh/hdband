$(document).ready(function () {
    // start drop 
    $(".click").click((e) => { 
        e.preventDefault();
        $(".drop-down").fadeToggle(700);
    });
    // end drop down
    // start navmenu
    const navMenu = $('#nav-menu');
    $(navMenu).on("click", () => {
        $(navMenu).toggleClass("active");
    });
    // end navmenu
    // start navbar
    $("#nav-menu").click(function () { 
        $(".nav-bar").slideToggle(700);
        $(".nav-bar").css("display", "flex");
    });
    // end navbar
    // start split
    console.clear();
    let s = Splitting();
    // end split
    // start swiper
    var swiper = new Swiper(".mySwiper", {
        speed: 600,
        parallax: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    //end swiper
    // start scroll
    $('.image').smoove({offset: '40%'});
    $('.content').smoove({offset: '40%'});
    $('.box-1').smoove({offset: '40%'});
    $('.box-2').smoove({offset: '40%'});
    $('.box-3').smoove({offset: '40%'});
    $('.box-4').smoove({offset: '40%'});
    $('.box-5').smoove({offset: '40%'});
    $('.box-6').smoove({offset: '40%'});
    $('.song').smoove({offset: '40%'});
    $('.album-content').smoove({offset: '40%'});
    $('.video-content').smoove({offset: '40%'});
    $('.form').smoove({offset: '40%'});
    $('.img-content').smoove({offset: '40%'});
    // end scroll
    // start change image
    let img = $(".img");
    let change = $(".change");
    let changeTwo = $(".change-2");
    $(change).on("click", _ => $(img).attr("src", "/images/track-2.webp"));
    $(changeTwo).on("click", _ => $(img).attr("src", "/images/track-3.webp"));
    // end change image
    // start writing
    let text = $(".text-area");
    let para = $(".first");
    $(text).on({
      "keypress" : _ => {
        $(para).text("You Are Writing");
      },
      "change" : _ => {
        $(para).text("Finished!");
      }
    });
    // end writing
});