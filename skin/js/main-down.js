//主打产品介绍
$('#introduceWrap .introduce-side1').click(function(){
    $(this).addClass('active');
    $('.introduce-side2').removeClass('active');
    $('#introduceWrap .border-line').addClass('one');
    $('#introduceWrap .border-line').removeClass('two');
    $('#introduceWrap .introduce-con.first').addClass('active');
    $('#introduceWrap .introduce-con.second').removeClass('active');
});
$('#introduceWrap .introduce-side2').click(function(){
    $(this).addClass('active');
    $('.introduce-side1').removeClass('active');
    $('#introduceWrap .border-line').addClass('two');
    $('#introduceWrap .border-line').removeClass('one');
    $('#introduceWrap .introduce-con.first').removeClass('active');
    $('#introduceWrap .introduce-con.second').addClass('active');
});
//banner控制代码
var swiper=new Swiper('#webBanner',{
    speed:500,
    autoplay:{
        delay:3000
    },
    loop:true,
    // parallax: true,
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
});

