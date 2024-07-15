import './indexInnovating-style.css';
import cardShadow from '@assets/img/innovating/card-shadow.png';
import footerPhone from '@assets/img/innovating/footer-phone.png';

export function IndexInnovating() {
    return (
        <section className="IndexInnovating isSectionShown" data-view="IndexInnovating">
            <div className="IndexInnovating-background">
                <svg
                    viewBox="0 0 1440 2555"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <g fill="#2A206A" fillRule="evenodd">
                        <path
                            d="M0,179.533433 L1269.95827,26.6366347 C1321.31182,20.4539176 1373.06364,34.4071763 1414.34893,65.5670532 L1440,84.9270814 L1440,84.9270814 L1440,665 L0,665 L0,179.533433 Z"
                            transform="matrix(-1 0 0 1 1440 0)"
                        />
                        <rect y={563} width={1440} height={2030} />
                    </g>
                </svg>
            </div>
            <div className="IndexInnovating-wrapper">
                <div className="IndexInnovating-titleWrapper">
                    <h2
                        className="IndexInnovating-title isSectionShown"
                        style={{ opacity: 1 }}
                    >
                        <span
                            className="IndexInnovating-titleLine"
                            style={{
                                display: "inline-block",
                                width: "auto",
                                willChange: "opacity, transform"
                            }}
                        >
                            Start innovating{" "}
                        </span>
                        <br />
                        <span
                            className="IndexInnovating-titleLine"
                            style={{
                                display: "inline-block",
                                width: "auto",
                                willChange: "opacity, transform"
                            }}
                        >
                            with&nbsp;Marqeta&nbsp;today{" "}
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