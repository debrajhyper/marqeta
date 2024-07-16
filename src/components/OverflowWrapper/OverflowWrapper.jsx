import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import './overflowWrapper-style.css';
import { IndexFeaturesBg } from "./IndexFeaturesBg/IndexFeaturesBg";
import { IndexTailoredTextWrapper } from "./IndexTailoredTextWrapper/IndexTailoredTextWrapper";
import { IndexTailoredMobileTriangle } from "./IndexTailoredMobileTriangle/IndexTailoredMobileTriangle";
import { IndexTailoredSequenceWrapper } from "./IndexTailoredSequenceWrapper/IndexTailoredSequenceWrapper";
import { IndexFeaturesSequencesWrapper } from "./IndexFeaturesSequencesWrapper/IndexFeaturesSequencesWrapper";

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export function OverflowWrapper() {
    // GSAP animations
    useGSAP(() => {
        // Initial animation for smooth transition
        gsap.fromTo(".IndexPurpleCard-card",
            {
                transform: 'translate3d(0vw, 0px, 0px) rotate(59deg) scale(1) skew(0deg, -26deg)'
            },
            {
                transform: 'translate3d(-69.8761vw, 395.2px, 0px) rotate(94.8999deg) scale(9.97497) skew(0deg, -26deg)',
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
        <div className="PageIndex-overflowWrapper">
            <section className="IndexFeatures" data-view="IndexFeatures">

                {/* Index Feature Text */}
                <IndexFeaturesBg />

                {/* Index sequence elements */}
                <IndexFeaturesSequencesWrapper />
            </section>
            <div className="IndexPurpleCard" data-view="IndexPurpleCard">
                <div className="IndexPurpleCard-card" >
                    <div className="IndexPurpleCard-cardItem IndexPurpleCard-cardItem_1" />
                    <div className="IndexPurpleCard-cardItem IndexPurpleCard-cardItem_2" />
                </div>
                <div className="IndexPurpleCard-trigger" />
            </div>
            <section className="IndexTailored" data-view="IndexTailored">
                <div className="IndexTailored-wrapper">

                    {/* Mobile SVG triangle */}
                    <IndexTailoredMobileTriangle />

                    {/* Index sequence card - globe elements */}
                    <IndexTailoredSequenceWrapper />

                    {/* Index sequence text elements */}
                    <IndexTailoredTextWrapper />
                </div>
            </section>
        </div>
    )
}