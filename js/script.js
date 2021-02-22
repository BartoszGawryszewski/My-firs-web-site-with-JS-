const hamburger = document.querySelector(".hamburger")

const iconBurger = document.querySelector(".fa-bars")
const iconPlus = document.querySelector(".fa-plus")
const Menu = document.querySelector(".menu-header")
const photoBgMaciekArek = document.querySelector("div.content-bg")

hamburger.addEventListener('click', function () {
    console.log("działa klik w div burger")
    iconBurger.classList.toggle('i-show');
    iconPlus.classList.toggle('i-show');
    Menu.classList.toggle('menu-show');
    photoBgMaciekArek.classList.toggle('content-bg-show');

})


// $('.hamburger').on('click', function () {
//     $('.fa-bars, .fa-plus').toggleClass('i-show');
//     $('.menu-header').toggleClass('menu-show')
// })


// menu przewijanie do sekcji po kliknieciu w menu
$('.menu-header a').on('click', function () {
    const clickMenu = "#" + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(clickMenu).offset().top
    }, 1000)


})
// scroll up button display
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
        $('.scroll-up').addClass('scroll-show');
    } else {
        $(window).scrollTop < 300
        $('.scroll-up').removeClass('scroll-show');
    }

})
// scroll up button function scroll up
$('.scroll-up').on('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 1000)
})


// show elements after scroll to sections 
$(document).on('scroll', function () {
            const $windowHeight = $(window).height();
            const scrollValue = $(this).scrollTop();

            const $contentBG = $('div.content-bg');
            const $contBgfromTop = $contentBG.offset().top
            const $contentBgHeight = $contentBG.outerHeight()

            if (scrollValue > 10) {
                $('div.content-bg-flex p').addClass('active')

            }
            // photo Maciek 
            const $PhotoMaciek = $('div.photo');
            const $maciekFromBotoom = $PhotoMaciek.offset().top;
            const $maciekHeight = $PhotoMaciek.outerHeight();

            if (scrollValue > $maciekHeight + $maciekFromBotoom - $windowHeight) {
                $PhotoMaciek.addClass('active-photo')
            }

            // photo Arek
            const $PhotoArek = $('div.photo-arek');
            const $arekFromBotoom = $PhotoArek.offset().top;
            const $arekHeight = $PhotoArek.outerHeight();

            if (scrollValue > $arekHeight + $arekFromBotoom - $windowHeight) {
                $PhotoArek.addClass('active-photo')
            }
            // photos how we work
            const $microphone = $('div.how-we-work-content:nth-of-type(1)');
            const $micFromBottom = $microphone.offset().top;
            const $micHeight = $microphone.outerHeight();

            if (scrollValue > $micHeight + $micFromBottom - $windowHeight ) {
                $microphone.addClass('active-photo');
            }
            // look
            const $look = $('div.how-we-work-content:nth-of-type(2)');
            const $lookFromBottom = $look.offset().top;
            const $lookHeight = $look.outerHeight();

            if (scrollValue > $lookHeight + $lookFromBottom - $windowHeight ) {
                $look.addClass('active-photo');
            }
            // gear
            const $gear = $('div.how-we-work-content:nth-of-type(3)');
            const $gearFromBottom = $gear.offset().top;
            const $gearHeight = $gear.outerHeight();

            if (scrollValue > $gearHeight + $gearFromBottom - $windowHeight ) {
                $gear.addClass('active-photo');
            }
            // suit
            const $suit = $('div.how-we-work-content:nth-of-type(4)');
            const $suitFromBottom = $suit.offset().top;
            const $suitHeight = $suit.outerHeight();

            if (scrollValue > $suitHeight + $suitFromBottom - $windowHeight ) {
                $suit.addClass('active-photo');
            }





            })