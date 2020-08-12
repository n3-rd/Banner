$('document').ready(function(){
    const circleType = new CircleType(document. getElementById ('y' ));
    circleType. radius( 150);
    options = {
        "cursorOuter": "circle-basic",
        "hoverEffect": "pointer-overlay",
        "hoverItemMove": true,
        "defaultCursor": false,
        "outerWidth": 30,
        "outerHeight": 30
          };
        magicMouse(options);
    var $l = $('.main-link')
    $('.main-link').mouseover(function(){
        TweenLite.to(this, 0.1, {letterSpacing: '8px',rotation: 27})
    })
    $('.main-link').mouseleave(function(){
        TweenLite.to(this, 0.1, {letterSpacing: '2px', rotation: 0})
    })
    $('.links li').mouseover(function(){
        $(this).css('margin-right','33px')
    })
    $('.links li').mouseleave(function(){
        $(this).css('margin-right','0')
    })
    $('#text-container').mouseover(function(){
let re = gsap.to(this, 4, {rotation: 360, duration: 500})
    })
    $('#text-container').mouseleave(function(){
       let te = gsap.to(this, 6, {rotation: 0})
       te.repeat(0)
    })  
})