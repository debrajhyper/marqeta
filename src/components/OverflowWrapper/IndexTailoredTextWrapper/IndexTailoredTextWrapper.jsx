import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import './indexTailoredTextWrapper-style.css';
import { IndexTailoredTitleLine, IndexTailoredItem } from "./data";

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export function IndexTailoredTextWrapper() {
    // GSAP animations
    useGSAP(() => {
        // scroll animation for smooth text transition
        gsap.to(".IndexTailored-text",
            {
                y: 0,
                opacity: 1,
                visibility: "visible",
                duration: 1,
                stagger: 1,
                scrollTrigger: {
                    trigger: ".IndexTailored-title",
                    start: "top 60%",
                    end: "top 60%",
                    scrub: .1,
                }
            }
        );
    });

    return (
        <div className="IndexTailored-textWrapper">
            <h2 className="IndexTailored-title">
                {
                    IndexTailoredTitleLine.map((text, index) => (
                        <span key={index} className="IndexTailored-titleLine IndexTailored-text">{text}</span>
                    ))
                }
            </h2>
            <div className="IndexTailored-items">
                {
                    IndexTailoredItem.map((item, index) => {
                        const { titleLine, descriptionLine } = item;
                        return (
                            <div key={index} className="IndexTailored-item isActive">
                                <div className="IndexTailored-itemTitle">
                                    {
                                        titleLine.map((text, index) => (
                                            <span key={index} className="IndexTailored-itemTitleLine IndexTailored-text">{text}</span>
                                        ))
                                    }
                                </div>
                                <div className="IndexTailored-itemDescription">
                                    {
                                        descriptionLine.map((text, index) => (
                                            <span key={index} className="IndexTailored-itemDescriptionLine IndexTailored-text">{text}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}