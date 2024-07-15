import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import './indexInnovating-style.css';
import cardShadow from '@assets/img/innovating/card-shadow.png';
import footerPhone from '@assets/img/innovating/footer-phone.png';
import { BackgroundSVG } from './BackgroundSVG';

gsap.registerPlugin(ScrollTrigger);

export function IndexInnovating() {
    useGSAP(() => {
        gsap.to(".IndexInnovating-titleLine", {
            transform: 'translateY(0)',
            opacity: 1,
            visibility: "visible",
            stagger: 1,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".IndexInnovating-title",
                start: "top 80%",
                end: "bottom 100%",
                scrub: 1,
                toggleActions: "play none none none",
                onLeaveBack: self => self.disable(),
            },
        });
        gsap.to(".IndexInnovating-description", {
            transform: 'translateY(0)',
            opacity: 1,
            visibility: "visible",
            stagger: 1,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".IndexInnovating-description",
                start: "top 80%",
                end: "bottom 100%",
                scrub: 1,
                toggleActions: "play none none none",
                onLeaveBack: self => self.disable(),
            },
        });
        gsap.to(".IndexInnovating-button", {
            transform: 'translateY(0)',
            opacity: 1,
            visibility: "visible",
            stagger: 1,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".IndexInnovating-button",
                start: "top 80%",
                end: "bottom 100%",
                scrub: 1,
                toggleActions: "play none none none",
                onLeaveBack: self => self.disable(),
            },
        });
    })

    return (
        <section className="IndexInnovating isSectionShown" data-view="IndexInnovating">
            <div className="IndexInnovating-background">
                <BackgroundSVG />
            </div>
            <div className="IndexInnovating-wrapper">
                <div className="IndexInnovating-titleWrapper">
                    <h2 className="IndexInnovating-title isSectionShown" style={{ opacity: 1 }}>
                        <span className="IndexInnovating-titleLine">
                            Start innovating
                        </span>
                        <br />
                        <span className="IndexInnovating-titleLine">
                            with Marqeta today
                        </span>
                    </h2>
                    <div className="IndexInnovating-description isSectionShown">
                        Let’s talk about your use case and how we can help.
                    </div>
                    <a href="/contact-us" className="IndexInnovating-button isSectionShown">
                        Contact us
                    </a>
                </div>
                <div className="IndexInnovating-phoneWrapper">
                    <div className="IndexInnovating-card">
                        <img
                            data-lazy="true"
                            data-src={cardShadow}
                            alt="Card shadow graphic"
                            src={cardShadow}
                        />
                    </div>
                    <div className="IndexInnovating-phone isSectionShown">
                        <img
                            data-lazy="true"
                            data-src={footerPhone}
                            alt="Footer phone graphic"
                            src={footerPhone}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}