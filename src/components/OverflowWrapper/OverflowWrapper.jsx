import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import './overflowWrapper-style.css';
import { IndexFeaturesBg } from "./IndexFeaturesBg/IndexFeaturesBg";
import { IndexTailoredTextWrapper } from "./IndexTailoredTextWrapper/IndexTailoredTextWrapper";
import { IndexTailoredMobileTriangle } from "./IndexTailoredMobileTriangle/IndexTailoredMobileTriangle";
import { IndexTailoredSequenceWrapper } from "./IndexTailoredSequenceWrapper/IndexTailoredSequenceWrapper";
import { IndexFeaturesSequencesWrapper } from "./IndexFeaturesSequencesWrapper/IndexFeaturesSequencesWrapper";

gsap.registerPlugin(ScrollTrigger);

export function OverflowWrapper() {
    useGSAP(() => {
        gsap.fromTo(".IndexPurpleCard-card", 
            {
                transform: 'translate3d(0vw, 0px, 0px) rotate(59deg) scale(1) skew(0deg, -26deg)'
            },
            {
                transform: 'translate3d(-69.8761vw, 394.4px, 0px) rotate(94.9363deg) scale(9.98407) skew(0deg, -26deg)',
                duration: 1,
                scrollTrigger: {
                    trigger: ".IndexPurpleCard-card",
                    start: "top 90%",
                    end: "+=320% 100%",
                    scrub: .1,
                }
            }
        );
        gsap.fromTo(".IndexPurpleCard-cardItem_2",
            {
                opacity: 0,
            },
            {
                opacity: 0.987105,
                duration: 1,
                scrollTrigger: {
                    trigger: ".IndexPurpleCard-cardItem_2",
                    start: "top 90%",
                    end: "+=320% 100%",
                    scrub: .1,
                }
            }
        );
        gsap.fromTo(".IndexTailored",
            {
                backgroundColor: '#2a206a00',
            },
            {
                backgroundColor: '#2a206a',
                duration: 1,
                scrollTrigger: {
                    trigger: ".IndexTailored",
                    start: "top 10%",
                    end: "19.5% 100%",
                    scrub: .1,
                }
            }
        );
    })

    return (
        <div className="PageIndex-overflowWrapper" style={{ overflow: "hidden" }}>
            <section className="IndexFeatures" data-view="IndexFeatures">
                <IndexFeaturesBg />
                <IndexFeaturesSequencesWrapper />
            </section>
            <div className="IndexPurpleCard" data-view="IndexPurpleCard">
                <div className="IndexPurpleCard-card" >
                    <div className="IndexPurpleCard-cardItem IndexPurpleCard-cardItem_1" />
                    <div className="IndexPurpleCard-cardItem IndexPurpleCard-cardItem_2" />
                </div>
                <div className="IndexPurpleCard-trigger" />
            </div>
            <section className="IndexTailored isHide" data-view="IndexTailored">
                <div className="IndexTailored-wrapper">
                    <IndexTailoredMobileTriangle />
                    <IndexTailoredSequenceWrapper />
                    <IndexTailoredTextWrapper />
                </div>
            </section>
        </div>
    )
}