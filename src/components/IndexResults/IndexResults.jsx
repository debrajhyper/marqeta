import './indexResults-style.css';
import AwardsUpdate from '@assets/img/Awards_Update.svg';
import AwardsUpdateMobile from '@assets/img/Awards_Update_Mobile.svg';

export function IndexResults() {
    return (
        <section className="IndexResults" data-view="IndexResults">
            <div className="IndexResults-flex">
                <div className="IndexResults-wrapper">
                    <div className="IndexResults-titleBlock">
                        <h2
                            className="IndexResults-title isSectionShown"
                            style={{ opacity: 1 }}
                        >
                            <span
                                className="IndexResults-titleWord"
                                style={{ display: "inline-block", whiteSpace: "pre" }}
                            >
                                The
                            </span>
                            <span
                                className="IndexResults-titleWord"
                                style={{ display: "inline-block", whiteSpace: "pre" }}
                            >
                                {" "}
                                results
                            </span>
                            <span
                                className="IndexResults-titleWord"
                                style={{ display: "inline-block", whiteSpace: "pre" }}
                            >
                                {" "}
                                speak
                            </span>
                            <span
                                className="IndexResults-titleWord"
                                style={{ display: "inline-block", whiteSpace: "pre" }}
                            >
                                {" "}
                                for
                            </span>
                            <span
                                className="IndexResults-titleWord"
                                style={{ display: "inline-block", whiteSpace: "pre" }}
                            >
                                {" "}
                                themselves
                            </span>
                        </h2>
                    </div>
                    <div className="IndexResults-cards">
                        <div className="IndexResults-cardsCount isSectionShown">
                            <span>160</span>
                            <span>.000</span>
                            <span>.000</span>
                            <span>.000</span>
                            <span>+</span>
                        </div>
                        <div className="IndexResults-cardsText isSectionShown">
                            volume processed in 2022
                        </div>
                    </div>
                    <div className="IndexResults-facts isSectionShown">
                        <div className="IndexResults-fact">
                            <div className="IndexResults-factTitle">99.99%</div>
                            <div className="IndexResults-factDescription">
                                platform uptime in 2022
                            </div>
                        </div>
                        <div className="IndexResults-fact">
                            <div className="IndexResults-factTitle">40</div>
                            <div className="IndexResults-factDescription">
                                countries certified to operate
                            </div>
                        </div>
                        <div className="IndexResults-fact">
                            <div className="IndexResults-factTitle">80X</div>
                            <div className="IndexResults-factDescription">
                                growth in volume since 2017
                            </div>
                        </div>
                    </div>
                    <div className="IndexResults-bestPlace">
                        <img
                            src={AwardsUpdate}
                            className="desktop"
                            alt="Awards received: Forbes, Fast Company, CNBC"
                        />
                        <img
                            src={AwardsUpdateMobile}
                            className="mobile"
                            alt="Awards received: Forbes, Fast Company, CNBC"
                        />
                    </div>
                </div>
            </div>
            
            <div className="IndexResults-canvas">
                <canvas width="1898.75" height={2990} style={{ height: 2392 }} />
                <div className="IndexResults-card" data-tp="placeholder">
                    <div className="IndexResults-card-inner">
                        <div
                            className="IndexResults-card-inner-container"
                            style={{ height: "2435.18px" }}
                        >
                            <div
                                className="IndexResults-card-inner-container-block"
                                style={{
                                    width: 770,
                                    height: 770,
                                    marginLeft: "-245.237px",
                                    top: 20
                                }}
                            >
                                <div
                                    className="IndexResultsCard"
                                    data-assets-folder="/static/img/3d/IndexResultsCard/"
                                >
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
                <div className="IndexResults-card" data-tp="uber">
                    <div className="IndexResults-card-logo" />
                </div>
                <div className="IndexResults-card" data-tp="square">
                    <div className="IndexResults-card-logo" />
                </div>
                <div className="IndexResults-card" data-tp="instacart">
                    <div className="IndexResults-card-logo" />
                </div>
                <div className="IndexResults-card" data-tp="brex">
                    <div className="IndexResults-card-logo" />
                </div>
                <div className="IndexResults-card" data-tp="doordash">
                    <div className="IndexResults-card-logo" />
                </div>
                <div className="IndexResults-mobile-card">
                    <div className="IndexResults-mobile-card-inner" />
                </div>
            </div>
        </section>

    )
}
