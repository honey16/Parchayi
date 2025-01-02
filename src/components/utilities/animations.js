// animations.js
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const cardAnimations = {
  rightFadeIn: (cards, options = {}) => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const { initialX = 1000, initialScale = 1, duration = 2} = options;

    gsap.set(cards, {
      x: initialX,
      scale: initialScale,
      opacity: 0,
    });

    cards.forEach((card, index) => {
      gsap.to(card, {
        x: 0,
        scale: 1,
        opacity: 1,
        duration: duration,
        ease: "power4.out",
        delay: 0.3 * 1.2*index,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          once: false,
        },
      });
    });
  },

  cleanup: () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  },
};
