const check = document.querySelector("#check");
const box= document.querySelector(".box");
const ball= document.querySelector(".ball");
const humburgarMenuContainerTag = document.querySelector(".humburgarMenuContainer");
const humburgerline1Tag = document.querySelector(".line1");
const humburgerline2Tag = document.querySelector(".line2");
const humburgerline3Tag = document.querySelector(".line3");
const screenWidth = screen.width;

//For menu icon
humburgarMenuContainerTag.addEventListener("click",()=>{
    if (humburgarMenuContainerTag.classList.contains("isOpened")){
        humburgarMenuContainerTag.classList.remove("isOpened");
        humburgerline2Tag.classList.remove("hideLine2");
        humburgerline1Tag.classList.remove("rotatePlus45deg");
        humburgerline3Tag.classList.remove("rotateMinus45deg");

    }else{
        humburgarMenuContainerTag.classList.add("isOpened");
        humburgerline1Tag.classList.add("rotatePlus45deg");
        humburgerline3Tag.classList.add("rotateMinus45deg");
        humburgerline2Tag.classList.add("hideLine2");
    }
});

//For Tabs underline

let tabsMenu = document.querySelectorAll(".nav-item a");
const sliderTag = document.getElementById("slider");

    tabsMenu.forEach((el,index)=>{
        el.id = index;
        
        if(index == 0) {
            sliderTag.style.width = el.offsetWidth + "px";
        }
    
        el.addEventListener("click",function (event) {
            const clickTagId = event.target.id;
            console.log(clickTagId)
            const clickLiTag = document.getElementById(clickTagId);
            const clickLiTagWidth = clickLiTag.offsetWidth;
            sliderTag.style.width = clickLiTagWidth + "px";
            const clickedTagOfOffsetLeft = clickLiTag.offsetLeft;
            sliderTag.style.transform = `translateX(${clickedTagOfOffsetLeft}px)`;
        })
        
    })
    



let screenHeight = $(window).height();
// console.log(screenHeight);

$(window).scroll(function () {
    let currentPosition = $(this).scrollTop();
   
    // console.log(currentPosition);
    if(currentPosition > screenHeight-150){
        $(".site-nav").addClass("site-nav-scroll");
    }else{
        $(".site-nav").removeClass("site-nav-scroll");
    }

});

function setClassForLowerScreenWidth(current) {

    $(".nav-link").removeClass("current-section");
    $(`.nav-link[href='#${current}']`).addClass('current-section');

}

    function setActive(current) {
        //   $(".nav-link").removeClass("slider");
         
        let clickedLiTag = $(`.nav-link[href='#${current}']`);
        let clickLiTagId = clickedLiTag.attr('id');
        let clickLiTagIdWidth = document.getElementById(clickLiTagId).offsetWidth;
        sliderTag.style.width = clickLiTagIdWidth + "px";
        let clickLiTagOffsetTag = document.getElementById(clickLiTagId).offsetLeft
        sliderTag.style.transform = `translateX(${clickLiTagOffsetTag}px)`;
        
          
       }




function navScroll() {
    let currentSection = $("section[id]");
    console.log(currentSection);
        currentSection.waypoint(function(direction) {       
            if(direction == "down"){
                let currentElementId = $(this.element).attr('id')
                console.log(currentElementId)
                setActive(currentElementId);
                setClassForLowerScreenWidth(currentElementId)
            }
      }, {
        offset: '40%'
      })

    currentSection.waypoint(function (direction) {
        if(direction == "up"){
            let currentElementId = $(this.element).attr('id');
            console.log(currentElementId)
            setActive(currentElementId);
            setClassForLowerScreenWidth(currentElementId)
        }
    }, {
        offset: -200
      });
}

navScroll();



check.addEventListener("change",function () {
    if(this.checked){
        ball.setAttribute('style','transform:translatex(100%);')
        let element = document.body;
        element.classList.toggle("dark-mode");
    }
    
    if(!this.checked) {
        ball.setAttribute('style','transform:translatex(0%);');
        let element = document.body;
        element.classList.toggle("dark-mode");
    }

})

$(".noPhotoHoverEffect").mouseenter(function () {
    $(".noPhoto").attr("src","images/Web Developer_Monochromatic.svg")
    $(".noPhoto").toggleClass("img-fluid skill-img d-inline-block")
})

$(".noPhotoHoverEffect").mouseleave(function () {
    $(".noPhoto").attr("")
    $(".noPhoto").toggleClass("img-fluid skill-img d-inline-block")
})


wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

new VenoBox({
    selector: ".my-venobox",
    navigation:true,
    titleattr: 'data-title',
    spinner:'grid',
});

$(".single-item").slick({
    arrows:false,
    dots: true,
    infinite: true,
    speed: 300,
    autoplay:true,
});

$('.autoplay').slick({
    arrows:false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

/* for animation */

var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

