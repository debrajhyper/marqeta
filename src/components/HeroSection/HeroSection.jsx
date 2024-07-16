import { useRef, useLayoutEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import '@dotlottie/player-component';
import './heroSection-style.css';
import topPhoto from '@assets/top-photo.png';
import topUILottie from '@assets/top-ui.lottie';
import topUIMobileLottie from '@assets/top-ui-mobile-2.lottie';
import symbolSVG from '@assets/svg/symbol/svg/sprite.symbol.svg';
import heroSequence from '@assets/marqeta-videos/img/hero/sequence.mp4';
import { textArray, IndexHeroLogo } from './data';
import { DesktopGrid, HomepageDesktopGrid } from './DesktopGrid';
import { HomepageMobileGrid, MobileGrid } from './MobileGrid';
import { LaptopBreakPoint, TabletBreakPoint, MobileBreakPoint } from '@/constants';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
    // Refs for DOM elements
    const swapTitleRef = useRef(null);
    const pageSubtitleRef = useRef(null);
    const pageButtonRef = useRef(null);
    const heroPhotoRef = useRef(null);
    const slidesRef = useRef([]);
    const listRef = useRef(null);
    const vSlideRef = useRef(null);

    // GSAP animations
    useGSAP(() => {
        let mediaQuery = gsap.matchMedia();

        // Animations for elements
        gsap.to(swapTitleRef.current, { opacity: 1, y: 0, visibility: "visible", delay: 1 });
        gsap.to(listRef.current, { opacity: 1, y: 0, visibility: "visible", delay: 1.5 });
        gsap.to(pageSubtitleRef.current, { opacity: 1, visibility: "visible", delay: 1 });
        gsap.to(pageButtonRef.current, { opacity: 1, visibility: "visible", delay: 1 });
        gsap.fromTo(".grid-svg-path", {
            strokeDashoffset: "-610.244px",
            strokeDasharray: "0px, 999999px",
        },
            {
                strokeDashoffset: "0px",
                strokeDasharray: "1200px 0px",
                duration: 2
            });
        gsap.to(".IndexHero-logo", { opacity: 1, visibility: "visible", stagger: 0.1 });

        // Media query based animations
        mediaQuery.add({
            isDesktop: `(min-width: ${LaptopBreakPoint}px)`,
            isLaptop: `(max-width: ${LaptopBreakPoint - 1}px) and (min-width: ${TabletBreakPoint + 1}px)`,
            isTablet: `(max-width: ${TabletBreakPoint}px) and (min-width: ${MobileBreakPoint + 1}px)`,
            isMobile: `(max-width: ${MobileBreakPoint}px)`,
        }, (context) => {
            let { isDesktop, isLaptop, isTablet } = context.conditions;
            gsap.fromTo(heroPhotoRef.current, {
                transform: "translate3d(0px, 0px, 0px) rotate(0deg)"
            },
                {
                    transform: "translate3d(100px, -300px, 0px) rotate(15deg)",
                    duration: 1,
                    scrollTrigger: {
                        trigger: heroPhotoRef.current,
                        start: isDesktop ? "top, 25%" : isLaptop ? "top, 32%" : isTablet ? "top, 30%" : "top, 20%",
                        scrub: 1,
                    }
                });
        });
        gsap.fromTo(".grid-svg-path", {
            strokeDashoffset: "0px",
            strokeDasharray: "1200px 0px",
        },
            {
                strokeDashoffset: "-610.244px",
                // -245.393
                strokeDasharray: "0px, 999999px",
                duration: 1,
                scrollTrigger: {
                    trigger: ".grid-svg-path",
                    start: "top, 11.7%",
                    scrub: 1,
                }
            });
    }, []);

    // Vertical text slide effect using GSAP
    useLayoutEffect(() => {
        const slides = slidesRef.current;
        const list = listRef.current;

        const vsOpts = {
            slides: slides,
            list: list,
            duration: 0.3,
            lineHeight: 65,
        };

        const progress = vSlideRef.current ? vSlideRef.current.progress() : 0;

        if (vSlideRef.current) {
            vSlideRef.current.kill();
        }

        const vSlide = gsap.timeline({
            repeat: 0,
        });

        slides.forEach((slide, i) => {
            gsap.set(slide, { y: 0 });
            let label = "slide" + i;
            vSlide.add(label);

            if (i >= 0) {
                vSlide.to(
                    vsOpts.list,
                    {
                        duration: vsOpts.duration,
                        delay: 2,
                        y: i * -1 * vsOpts.lineHeight,
                        ease: 'power4.inOut',
                        color: i === vsOpts.list.children.length - 1 ? '#2a206a' : '#20a472',
                        transition: i === vsOpts.list.children.length - 1 ? 'color 2s' : 'none',
                    },
                    label
                );
            }
        });

        vSlide.progress(progress);
        vSlideRef.current = vSlide;

        // Cleanup
        return () => {
            if (vSlideRef.current) {
                vSlideRef.current.kill();
            }
        };
    }, []);

    return (
        <section className="IndexHero" data-view="IndexHero">
            <div className="IndexHero-wrapper">
                <div className="IndexHero-head">
                    <div className="IndexHero-titleWrapper">

                        {/* Title and swapping text */}
                        <h1 className="IndexHero-title isImmediateShow isSectionShown" id="page-title">
                            <span id="swap-title" ref={swapTitleRef}>The next era of</span>
                            <span id="swap-container" style={{ height: 65 }}>
                                <div id="swap-text" className='v-slides' ref={listRef}>
                                    {
                                        textArray?.map((item, index) => (
                                            <div className="v-slide" key={index} ref={el => slidesRef.current[index] = el} style={{ height: 65 }}>
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <div id='page-subtitle' ref={pageSubtitleRef} className="IndexHero-subtitle isSectionShown">
                            Integrate end to end credit and payment solutions into your business
                            processes using our modern card issuing platform.
                        </div>

                        {/* Buttons */}
                        <div id='page-button' ref={pageButtonRef} className="IndexHero-textButton IndexHero-ctas isSectionShown">
                            <a
                                className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButtonBase-root css-1gbd66w-MuiButtonBase-root-MuiButton-root-Link-root"
                                target="_self"
                                aria-label="Contact Sales"
                                href="/contact-us"
                            >
                                Contact sales
                                <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root" />
                            </a>
                            <a href="/platform/credit" target="_self">
                                <button className="MuiButton-root MuiButton-outlined">
                                    Learn more about credit
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="IndexHero-sequenceWrapper isHide" style={{ visibility: "hidden" }}>
                        <div className="IndexHero-sequenceInner">
                            <video
                                muted
                                playsInline
                                crossOrigin=""
                                preload="auto"
                                className="IndexHero-sequence isShow"
                                src={heroSequence}
                                data-timeout={262}
                            />
                        </div>
                    </div>
                </div>
                <div className="IndexHero-whiteBackground isImmediateShow isSectionShown">
                    <div className="IndexHero-whiteBackgroundInner">
                        <svg className="svg svg--background-white-1440 ">
                            <use xlinkHref={`${symbolSVG}#background-white-1440`} />
                        </svg>
                    </div>
                </div>

                {/* Logos */}
                <div className="IndexHero-logos">
                    {
                        IndexHeroLogo.map((item, index) => {
                            const { dataSrc, alt, src } = item;
                            return (
                                <div key={index} className="IndexHero-logo isImmediateShow isSectionShown">
                                    <img data-lazy="true" data-src={dataSrc} alt={alt} src={src} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Hero photo and card animations */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 600 }}>
                <div className="IndexHero-wrapper" style={{ position: "relative", height: "100%" }}>
                    <div className="hero-asset" style={{ position: "absolute", top: 0, right: 0, zIndex: 999, width: "100%", height: "100%" }}>
                        
                        {/* Main hero photo */}
                        <div id="hero-photo" ref={heroPhotoRef} className="hero-asset-photo css-1en4yzq-Homepage-heroPhoto">
                            <img
                                src={topPhoto}
                                srcSet={`${topPhoto}?width=3840 3840w, ${topPhoto}?width=3520 3520w, ${topPhoto}?width=3200 3200w, ${topPhoto}?width=2880 2880w, ${topPhoto}?width=2560 2560w, ${topPhoto}?width=2240 2240w, ${topPhoto}?width=1920 1920w, ${topPhoto}?width=1600 1600w, ${topPhoto}?width=1440 1440w, ${topPhoto}?width=1280 1280w, ${topPhoto}?width=960 960w, ${topPhoto}?width=1280 640w`}
                                sizes="(max-width: 3840x) 3840px, (max-width: 3520x) 3520px, (max-width: 3200x) 3200px, (max-width: 2880x) 2880px, (max-width: 2560x) 2560px, (max-width: 2240x) 2240px, (max-width: 1920x) 1920px, (max-width: 1600x) 1600px, (max-width: 1440x) 1440px, (max-width: 1280x) 1280px, (max-width: 960x) 960px, (max-width: 640x) 1280px"
                                loading="eager"
                                style={{ width: "100%" }}
                            />
                        </div>

                        {/* Desktop view */}
                        <div className="hero-asset-grid top-grid css-1b8td8u-Homepage-desktopGrid">
                            <HomepageDesktopGrid />
                        </div>
                        <div className="hero-asset-grid top-ui css-1b8td8u-Homepage-desktopGrid">
                            <dotlottie-player
                                src={topUILottie}
                                autoPlay={true}
                                style={{ height: "100%", width: "100%" }}
                                background="transparent"
                            />
                        </div>
                        
                        {/* Mobile view */}
                        <div className="css-1ac2p79-Homepage-mobileGrid">
                            <HomepageMobileGrid />
                        </div>
                        <div className="hero-asset-grid top-ui css-1ac2p79-Homepage-mobileGrid">
                            <dotlottie-player
                                src={topUIMobileLottie}
                                autoPlay={true}
                                style={{ height: "100%", width: "100%" }}
                                background="transparent"
                            />
                        </div>
                    </div>

                    {/* SVG lines Grid */}
                    <div className="hero-asset-grid css-1b8td8u-Homepage-desktopGrid" style={{ zIndex: 99 }}>
                        <DesktopGrid />
                    </div>
                    <div className="hero-asset-grid css-1ac2p79-Homepage-mobileGrid" style={{ zIndex: 99 }}>
                        <MobileGrid />
                    </div>
                </div>
            </div>
        </section>
    )
}