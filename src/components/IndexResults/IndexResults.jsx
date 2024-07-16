import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import './indexResults-style.css';
import AwardsUpdate from '@assets/img/Awards_Update.svg';
import AwardsUpdateMobile from '@assets/img/Awards_Update_Mobile.svg';
import { IndexResultsCard, IndexResultsCardsCount, IndexResultsFact, IndexResultsTitleWord } from './data';

gsap.registerPlugin(ScrollTrigger);

export function IndexResults() {
    useGSAP(() => {
        gsap.to(".IndexResults-titleWord", {
            transform: 'translateY(0)',
            opacity: 1,
            visibility: "visible",
            stagger: 1,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".IndexResults-title",
                start: "top 75%",
                end: "bottom 100%",
                scrub: 1,
                toggleActions: "play none none none",
                onLeaveBack: self => self.disable(),
            },
        });
        gsap.to(".count", {
            transform: 'translateY(0)',
            opacity: 1,
            visibility: "visible",
            stagger: .2,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".IndexResults-cardsCount",
                start: "top 70%",
                end: "bottom 100%",
                scrub: 1,
                toggleActions: "play none none none",
                onLeaveBack: self => self.disable(),
            },
        });
        gsap.to(".IndexResults-cardsCount span:last-child", {
            transform: 'translateY(0)',
            opacity: 1,
            visibility: "visible",
            duration: 1,
            delay: 2,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".IndexResults-cardsCount",
                start: "top 70%",
                end: "bottom 100%",
                scrub: 1,
                toggleActions: "play none none none",
                onLeaveBack: self => self.disable(),
            },
        });
    })

    return (
        <section className="IndexResults" data-view="IndexResults">
            <div className="IndexResults-flex">
                <div className="IndexResults-wrapper">
                    <div className="IndexResults-titleBlock">
                        <h2 className="IndexResults-title isSectionShown" style={{ opacity: 1 }}>
                            {
                                IndexResultsTitleWord.map((item, index) => (
                                    <span key={index} className="IndexResults-titleWord">
                                        {item}
                                    </span>
                                ))
                            }
                        </h2>
                    </div>
                    <div className="IndexResults-cards">
                        <div className="IndexResults-cardsCount isSectionShown">
                            {
                                IndexResultsCardsCount.map((item, index) => (
                                    <span key={index} className={index > 0 & index < 3 ? 'count' : null}>{item}</span>
                                ))
                            }
                        </div>
                        <div className="IndexResults-cardsText isSectionShown">
                            volume processed in 2022
                        </div>
                    </div>
                    <div className="IndexResults-facts isSectionShown">
                        {
                            IndexResultsFact.map((item, index) => {
                                const { number, text } = item;
                                return (
                                    <div key={index} className="IndexResults-fact">
                                        <div className="IndexResults-factTitle">{number}</div>
                                        <div className="IndexResults-factDescription">
                                            {text}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="IndexResults-bestPlace">
                        <img src={AwardsUpdate} className="desktop" alt="Awards received: Forbes, Fast Company, CNBC" />
                        <img src={AwardsUpdateMobile} className="mobile" alt="Awards received: Forbes, Fast Company, CNBC" />
                    </div>
                </div>
            </div>
            <div className="IndexResults-canvas">
                <canvas width="1898.75" height={2990} style={{ height: 2392 }} />
                <div className="IndexResults-card" data-tp="placeholder">
                    <div className="IndexResults-card-inner">
                        <div className="IndexResults-card-inner-container" style={{ height: "2435.18px" }}>
                            <div className="IndexResults-card-inner-container-block"
                                style={{
                                    width: 770,
                                    height: 770,
                                    marginLeft: "-245.237px",
                                    top: 20
                                }}
                            >
                                <div className="IndexResultsCard">
                                    <canvas
                                        width={383}
                                        height={608}
                                        style={{
                                            width: 307,
                                            height: 487,
                                            marginLeft: "231.5px",
                                            marginTop: "141.5px",
                                            opacity: 1,
                                            transform: "translate3d(9.98929px, 105.829px, 0px)"
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    IndexResultsCard.map((item, index) => (
                        <div key={index} className="IndexResults-card" data-tp={item}>
                            <div className="IndexResults-card-logo" />
                        </div>
                    ))
                }
                <div className="IndexResults-mobile-card">
                    <div className="IndexResults-mobile-card-inner" />
                </div>
            </div>
        </section>
    )
}