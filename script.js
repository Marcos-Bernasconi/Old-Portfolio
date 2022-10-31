

let onOpening = gsap.timeline();

onOpening.from(".heroSection h1",{
    
    x:-10,
    opacity: 0,
    duration: 1,
    ease: "power4.out"
})




.from(".heroSection p",{

x:-5,
duration: 1,

ease:"power4.out",
opacity:0,

})

let hover= gsap.to(".pattern",{
    borderRadius: "23% 77% 17% 83% / 74% 14% 86% 26% ",
    duration: 20,
     ease: "power3.out"
 }).pause();












let colorAnimation = gsap.fromTo(".heroSection h1 .gradient",{

    backgroundImage: " linear-gradient(270deg, rgba(202,122,255,1) 0%, rgba(105,100,253,1) 56%, rgba(57,77,245,1) 100%)",
 duration: 5,
 ease:"power3.out",
},



{
duration: 5,
ease:"power3.out",
backgroundImage: "linear-gradient(90deg, rgba(202,122,255,1) 0%, rgba(105,100,253,1) 56%, rgba(57,77,245,1) 100%)",
yoyo: true,
repeat: -1,
yoyoEase: true,
})