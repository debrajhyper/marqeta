import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import './indexFeaturesBg-style.css';
import { IndexFeaturesListDescriptionLine, IndexFeaturesListTitleLine } from "./data";

gsap.registerPlugin(ScrollTrigger);

export function IndexFeaturesBg() {
    useGSAP(() => {
        gsap.to(".IndexFeatures-aboutLine", {
            transform: 'translateY(0)',
            opacity: 1,
            visibility: "visible",
            stagger: 1,
            duration: 2,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".IndexFeatures-about",
                start: "top 85%",
                end: "+=20% 110%",
                scrub: 1,
                toggleActions: "play none none none",
                onLeaveBack: self => self.disable(),
            },
        });
        gsap.to(".IndexFeatures-list-titleLine", {
            transform: 'translateY(0)',
            opacity: 1,
            visibility: "visible",
            stagger: 1,
            duration: 3,
            ease: "power1.in",
            scrollTrigger: {
                trigger: ".IndexFeatures-list-title",
                start: "top 80%",
                end: "+=80% 100%",
                scrub: 1,
                toggleActions: "play none none none",
                onLeaveBack: self => self.disable(),
            },
        });
        gsap.to(".IndexFeatures-list-descriptionLine", {
            transform: 'translateY(0)',
            opacity: 1,
            visibility: "visible",
            stagger: 1,
            duration: 1,
            ease: "power1.in",
            scrollTrigger: {
                trigger: ".IndexFeatures-list-description",
                start: "top 80%",
                end: "bottom 100%",
                scrub: 1,
                toggleActions: "play none none none",
                onLeaveBack: self => self.disable(),
            },
        });
    });

    return (
        <div className="IndexFeatures-bg">
            <div id="IndexFeatures-about-wrapper" className="IndexFeatures-about-wrapper">
                <div className="IndexFeatures-about">
                    <p className="isSectionShown" >
                        <span className="IndexFeatures-aboutLine">
                            From global enterprises to booming
                        </span>
                        <br />
                        <span className="IndexFeatures-aboutLine">
                            startups, innovators count on Marqeta.
                        </span>
                    </p>
                    <p className="isSectionShown">
                        Industry leaders across on-demand delivery, expense management,
                        retail, digital banking, and more use Marqeta to deliver exceptional
                        customer card experiences that elevate their brands and build
                        lasting customer loyalty.
                        <a href="https://www.marqeta.com/resources/resource/marqeta-customer-spotlight-square-card" className="homepage-hyperlink">
                            See how Square
                        </a>
                        uses Marqeta.
                    </p>
                </div>
            </div>
            <div id="IndexFeatures-list-wrapper" className="IndexFeatures-list-wrapper">
                <h2 className="IndexFeatures-list-title isSectionShown">
                    {
                        IndexFeaturesListTitleLine.map((item, index) => (
                            <span className="IndexFeatures-list-titleLine" key={index}>
                                {item}
                            </span>
                        ))
                    }
                </h2>
                <div className="IndexFeatures-list-description isSectionShown">
                    {
                        IndexFeaturesListDescriptionLine.map((item, index) => (
                            <span className="IndexFeatures-list-descriptionLine" key={index}>
                                {item}
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}