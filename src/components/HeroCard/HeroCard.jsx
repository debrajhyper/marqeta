import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import './heroCard-style.css';
import { LaptopBreakPoint, TabletBreakPoint, MobileBreakPoint } from "@/constants";

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export function HeroCard() {
  // GSAP animations
  useGSAP(() => {
    // Initial animation to make the card visible
    gsap.to("#hero-card", { opacity: 1, visibility: "visible", delay: 2 })

    let mediaQuery = gsap.matchMedia();
    // Media query based animations
    mediaQuery.add({
      isDesktop: `(min-width: ${LaptopBreakPoint}px)`,
      isLaptop: `(max-width: ${LaptopBreakPoint - 1}px) and (min-width: ${TabletBreakPoint + 1}px)`,
      isTablet: `(max-width: ${TabletBreakPoint}px) and (min-width: ${MobileBreakPoint + 1}px)`,
      isMobile: `(max-width: ${MobileBreakPoint}px)`,
      reduceMotion: "(prefers-reduced-motion: reduce)",
    }, (context) => {
      let { isDesktop, isLaptop, isTablet, isMobile } = context.conditions;
      // Animation for the card element based on scroll triggered
      gsap.fromTo("#hero-card",
        {
          background: "linear-gradient(#5e5ab7, #463ba7)",
          x: isDesktop ? 235 : isLaptop ? 144 : isTablet ? 102 : 101,
          y: isDesktop ? 215 : isLaptop ? 215 : isTablet ? 160 : 141,
          rotateX: -10,
          rotateY: -2,
          rotateZ: 0,
          skewX: -4,
          skewY: 0,
          scale: 1,
          opacity: isMobile ? 1 : 1,
          borderRadius: isMobile ? '10px' : '15px 22px'
        },
        {
          x: isDesktop ? 321 : isLaptop ? 226.1 : isTablet ? 166 : 99,
          y: isDesktop ? 91.5 : isLaptop ? 163.6 : isTablet ? 199 : 333,
          rotateX: 0,
          rotateY: 0,
          rotateZ: isMobile ? -17 : -159.52,
          skewX: 0,
          skewY: 0,
          scale: 0.5,
          width: isDesktop ? 280 : isLaptop ? 249 : isTablet ? 191 : 205,
          height: isDesktop ? 450 : isLaptop ? 408 : isTablet ? 310 : 333,
          duration: 1,
          opacity: isMobile ? 1 : 1,
          scrollTrigger: {
            trigger: "#hero-card",
            start: isDesktop ? "top, 22%" : isLaptop ? "top, 27%" : isTablet ? "top, 20%" : "top, 20%",
            end: isDesktop ? "+=1800rem" : isLaptop ? "+=1800rem" : isTablet ? "+=1100rem" : "+=1800rem",
            scrub: .1,
          },
        }
      )

      gsap.timeline({
        scrollTrigger: {
          trigger: "#IndexFeatures-list-wrapper",
          start: isDesktop ? "top 10%" : isLaptop ? "top 10%" : isTablet ? "top 20%" : "top 10%",
          end: "+=1000rem, 90%",
          scrub: .1,
        }
      })
        .to("#hero-card", {
          x: isDesktop ? 321 : isLaptop ? 226.1 : isTablet ? 166 : 99,
          y: isDesktop ? 91.5 : isLaptop ? 163.6 : isTablet ? 199 : 333,
          rotateX: 0,
          rotateY: 0,
          rotateZ: isMobile ? -17 : -159.52,
          skewX: 0,
          skewY: 0,
          scale: 0.5,
          width: isDesktop ? 280 : isLaptop ? 249 : isTablet ? 191 : 205,
          height: isDesktop ? 450 : isLaptop ? 408 : isTablet ? 310 : 333,
          display: isMobile ? "none" : "block",
        }, 0)
        .to("#hero-card", {
          x: isDesktop ? 10 : isLaptop ? 54 : isTablet ? -96 : 10,
          y: isDesktop ? 674 : isLaptop ? 585 : isTablet ? 564 : 674,
          rotateX: -0.535,
          rotateY: -27.158,
          rotateZ: -139.344,
          skewX: -20.2843,
          skewY: 0,
          scale: 0.9,
          width: isDesktop ? 280 : isLaptop ? 249 : isTablet ? 191 : 205,
          height: isDesktop ? 450 : isLaptop ? 408 : isTablet ? 310 : 333,
          display: "none",
          duration: 10 * 1000,
        }, 0);
    });
  }, [])

  return (
    <div className="IndexHeroCard card-container" >
      <div className="IndexHeroCard-wrapper">
        <div className="IndexHeroCard-fakeTitle" />
        <div className="IndexHeroCard-canvasWrapper isHide">
          <div className="IndexHeroCard-canvas">
            <div id="hero-card" className="card">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}