document.addEventListener("DOMContentLoaded", function() {
    // Header Animation
    gsap.from("header", { 
        duration: 1, 
        y: -100, 
        opacity: 0, 
        ease: "bounce.out" 
    });

    // Hero Section Animation
    gsap.from("#hero h2", {
        duration: 1.5,
        x: -200,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5
    });
    gsap.from("#hero p", {
        duration: 1.5,
        x: 200,
        opacity: 0,
        ease: "power3.out",
        delay: 1
    });

    // Service Cards Animation (staggered)
    gsap.from(".service-card", {
        duration: 1.2,
        scale: 0.8,
        opacity: 0,
        ease: "power3.out",
        stagger: 0.2,  // delay each card
        delay: 1.5
    });

    // About Section Animation
    gsap.from("#about", {
        duration: 1.2,
        opacity: 0,
        y: 50,
        ease: "power3.out",
        delay: 2
    });

    // Contact Form Animation
    gsap.from("#contact-form", {
        duration: 1.5,
        opacity: 0,
        y: 100,
        ease: "power3.out",
        delay: 2.5
    });
});
