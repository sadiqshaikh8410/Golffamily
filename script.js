var crsr = document.querySelector("#cursor")
var crsrblur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    crsrblur.style.left = dets.x - 200 + "px"
    crsrblur.style.top = dets.y - 200 + "px"

})
gsap.to(".nav", {
    backgroundColor: "rgba(0, 0, 0, 1)",
    height: "120px",
    duration: 0.1,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
        //markers: true
    }
});
gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroll: "body",
        start: "top -20%",
        end: "top -60%",
        duration: 0.10,
        // markers: true,
        scrub: 2
    }
})
var h4all = document.querySelectorAll(".nav h4")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.transform = "scale(3)"
        crsr.style.border = "2px solid #fff"
        crsr.style.backgroundColor = "transparent"

    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.transform = "scale(1)"
        crsr.style.border = "none"
        crsr.style.backgroundColor = "#95c11e"

    })

})
gsap.from("#about-us img, .about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        //markers:true,
        start: "top 60%",
        end: "top 65%",
        scrub: 1

    }
})
gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
       // markers: true,
        start: "top 70%",
        end: "top 58%",
        scrub: 2

    }
})
gsap.from(".colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: ".colon1",
        scroll: "body",
        start: "top 50%",
        end: "top 45%",
       // markers: true,
        scrub: 4

    }
})
gsap.from(".page4 h1",{
    y: 50,
    scrollTrigger: {
        trigger: ".page4 h1",
        scroll: "body",
        start: " top 75%",
        end: " top 70%",
        //markers: true,
        scrub: 3
    }


    })




