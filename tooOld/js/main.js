$('.slider1').slick({
    autoplay: false,
    centerMode: true,
    centerPadding: '80px',
    dots: true,
    arrows: false,
    infinite: false,
    initialSlide: 1,
    asNavFor: '.slider2',
    responsive:[
        {
            breakpoint: 450,
            settings:{
                centerPadding: '34px',
            }
        }
    ]
});
$('.slider2').slick({
    autoplay: false,
    infinite: false,
    arrows: false,
    initialSlide: 1,
    asNavFor: '.slider1'
});
$('.slider3').slick({
    autoplay: false,
    initialSlide: 7
});
$('.slider4').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '8.5rem',
    centerMode: true,
    dots: true,
    arrows: true,
    responsive:[
        {
            breakpoint: 1270,
            settings:{
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 900,
            settings:{
                slidesToShow: 2,
                centerPadding: '15.5rem',
            },
        }
    
    ]
});
