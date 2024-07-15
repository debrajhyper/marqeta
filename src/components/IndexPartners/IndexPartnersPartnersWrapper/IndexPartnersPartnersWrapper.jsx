import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import './indexPartnersPartnersWrapper-style.css';
import symbolSVG from '@assets/svg/symbol/svg/sprite.symbol.svg';
import { IndexPartnersPartnersBlockHeadTestimonialsItem } from "./data";

gsap.registerPlugin(ScrollTrigger);

export function IndexPartnersPartnersWrapper() {
    useGSAP(() => {
        gsap.to(".IndexPartners-partnersBlockHeadTitleLine", {
            transform: 'translateY(0)',
            opacity: 1,
            visibility: "visible",
            stagger: 1,
            duration: 2,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".IndexPartners-partnersBlockHeadTitle",
                start: "top 85%",
                end: "+=20% 110%",
                scrub: 1,
                toggleActions: "play none none none",
                onLeaveBack: self => self.disable(),
            },
        });
    });

    return (
        <div className="IndexPartners-partnersWrapper">
            <div className="IndexPartners-partnersBlockHead isSectionShown">
                <h2 className="IndexPartners-partnersBlockHeadTitle">
                    <span className="IndexPartners-partnersBlockHeadTitleLine">
                        We are your
                    </span>
                    <br />
                    <span className="IndexPartners-partnersBlockHeadTitleLine">
                        trusted partner
                    </span>
                </h2>
                <div className="IndexPartners-partnersBlockHeadDescr">
                    Our team of experts provide guidance from setup to launch & scale.
                    Making you successful is our priority.
                </div>
                <div className="IndexPartners-partnersBlockHeadTestimonials">
                    {
                        IndexPartnersPartnersBlockHeadTestimonialsItem.map((text, index) => (
                            <div key={index} className="IndexPartners-partnersBlockHeadTestimonialsItem">
                                <div className="IndexPartners-partnersBlockHeadTestimonialsItemIcon">
                                    <svg className="svg svg--icon-partners-item ">
                                        <use xlinkHref={`${symbolSVG}#icon-partners-item`} />
                                    </svg>
                                </div>
                                <div className="IndexPartners-partnersBlockHeadTestimonialsItemText">
                                    {text}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="IndexPartners-partnersSlider isSectionShown" style={{}}>
                <div className="IndexPartners-partnersSliderItem">
                    <div className="IndexPartners-partnersSliderItemImg">
                        <img
                            data-lazy="true"
                            data-src="/static/img/partners/card-1.png"
                            alt="Card graphic 1"
                            src="/static/img/partners/card-1.png"
                        />
                    </div>
                </div>
                <div className="IndexPartners-partnersSliderItem">
                    <div className="IndexPartners-partnersSliderItemImg">
                        <img
                            data-lazy="true"
                            data-src="/static/img/partners/card-2.png"
                            alt="Card graphic 2"
                            src="/static/img/partners/card-2.png"
                        />
                    </div>
                </div>
                <div className="IndexPartners-partnersSliderItem">
                    <div className="IndexPartners-partnersSliderItemImg">
                        <img
                            data-lazy="true"
                            data-src="/static/img/partners/WU_Card.svg"
                            alt="Card graphic 3"
                            src="/static/img/partners/WU_Card.svg"
                        />
                        <div
                            data-href="HUMRGEmqXLI"
                            className="IndexPartners-partnersSliderItemExtra play-video"
                        >
                            <div className="IndexPartners-partnersSliderItemExtraInner">
                                <img
                                    data-lazy="true"
                                    data-src="/static/img/partners/partners-video-3.png"
                                    alt="Partners video graphic"
                                    src="/static/img/partners/partners-video-3.png"
                                />
                                <div className="IndexPartners-partnersSliderItemExtraIcon">
                                    <svg className="svg svg--icon-play ">
                                        <use xlinkHref="/static/svg/symbol/svg/sprite.symbol.svg#icon-play" />
                                    </svg>
                                    <span>Watch video</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="IndexPartners-partnersBlocks" style={{ minHeight: 0 }}>
                <div
                    className="IndexPartners-partnersBlockHeadTestimonials IndexPartners-partnersBlockHeadTestimonials--mobile IndexPartners-slide isActive isSectionShown"
                    data-id={0}
                    id={0}
                    style={{}}
                >
                    <div className="IndexPartners-partnersBlockHeadTestimonialsItem">
                        <div className="IndexPartners-partnersBlockHeadTestimonialsItemIcon">
                            <svg className="svg svg--icon-partners-item ">
                                <use xlinkHref="/static/svg/symbol/svg/sprite.symbol.svg#icon-partners-item" />
                            </svg>
                        </div>
                        <div className="IndexPartners-partnersBlockHeadTestimonialsItemText">
                            10+ years of modern card issuing experience
                        </div>
                    </div>
                    <div className="IndexPartners-partnersBlockHeadTestimonialsItem">
                        <div className="IndexPartners-partnersBlockHeadTestimonialsItemIcon">
                            <svg className="svg svg--icon-partners-item ">
                                <use xlinkHref="/static/svg/symbol/svg/sprite.symbol.svg#icon-partners-item" />
                            </svg>
                        </div>
                        <div className="IndexPartners-partnersBlockHeadTestimonialsItemText">
                            Compliance &amp; risk experts
                        </div>
                    </div>
                    <div className="IndexPartners-partnersBlockHeadTestimonialsItem">
                        <div className="IndexPartners-partnersBlockHeadTestimonialsItemIcon">
                            <svg className="svg svg--icon-partners-item ">
                                <use xlinkHref="/static/svg/symbol/svg/sprite.symbol.svg#icon-partners-item" />
                            </svg>
                        </div>
                        <div className="IndexPartners-partnersBlockHeadTestimonialsItemText">
                            Top 25 largest U.S. debit card purchase volume*
                        </div>
                    </div>
                </div>
                <div
                    className="IndexPartners-partnersBlock IndexPartners-partnersBlock--0 IndexPartners-slide isSectionShown"
                    data-id={1}
                    id={1}
                >
                    <div className="IndexPartners-partnersBlockLogo">
                        <img
                            data-lazy="true"
                            data-src="/static/img/partners/affirm.svg"
                            alt="Partners - Affirm"
                            src="/static/img/partners/affirm.svg"
                        />
                    </div>
                    <div className="IndexPartners-partnersBlockDescr">
                        “Affirm’s mission is to build innovative products that people love, and
                        Marqeta’s unique technology provides us the platform and services to
                        help make that possible.”
                    </div>
                    <div className="IndexPartners-partnersBlockTestimonials">
                        <div className="IndexPartners-partnersBlockTestimonialsIcon">
                            <img
                                data-lazy="true"
                                data-src="/static/img/partners/people.jpg"
                                alt="Partners people"
                                src="/static/img/partners/people.jpg"
                            />
                        </div>
                        <div className="IndexPartners-partnersBlockTestimonialsText">
                            <div className="IndexPartners-partnersBlockTestimonialsTextName">
                                Max Levchin
                            </div>
                            <div className="IndexPartners-partnersBlockTestimonialsTextPosition">
                                CEO of Affirm
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="IndexPartners-partnersBlock IndexPartners-partnersBlock--1 IndexPartners-slide isSectionShown"
                    data-id={2}
                    id={2}
                >
                    <div className="IndexPartners-partnersBlockLogo">
                        <img
                            data-lazy="true"
                            data-src="/static/img/partners/WesternUnion.svg"
                            alt="Partners - Doordash"
                            src="/static/img/partners/WesternUnion.svg"
                        />
                    </div>
                    <div className="IndexPartners-partnersBlockDescr">
                        “We have seen Marqeta be the trusted advisor for us on not just issuing
                        the card, but doing the card processing and the card management.
                        Compared to other platforms that required us to do large-scale coding,
                        required us to take well over six months to a year to go to market,
                        Marqeta helped us do that in less than six months.”
                    </div>
                    <div className="IndexPartners-partnersBlockTestimonials">
                        <div className="IndexPartners-partnersBlockTestimonialsIcon">
                            <img
                                data-lazy="true"
                                data-src="/static/img/partners/Tom Mazzaferro.jpeg"
                                alt="Mike Kim photo"
                                src="/static/img/partners/Tom Mazzaferro.jpeg"
                            />
                        </div>
                        <div className="IndexPartners-partnersBlockTestimonialsText">
                            <div className="IndexPartners-partnersBlockTestimonialsTextName">
                                Tom Mazzaferro
                            </div>
                            <div className="IndexPartners-partnersBlockTestimonialsTextPosition">
                                Chief Data and Innovation Officer, Western Union
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}