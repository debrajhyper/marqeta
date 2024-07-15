import './indexPartnersCardsWrapper-style.css';

export function IndexPartnersCardsWrapper() {
    return (
        <div className="IndexPartners-cardsWrapper">
            <div className="IndexPartners-cards">
                <div className="IndexPartners-canvas" style={{ visibility: "visible" }}>
                    <canvas
                        width={787}
                        height={989}
                        style={{ width: 630, height: "791.2px" }}
                    />
                </div>
                <div className="IndexPartners-cardsExtra">
                    <div
                        className="IndexPartners-cardsExtraBlock"
                        data-id={0}
                        style={{ display: "none" }}
                        id={0}
                    />
                    <div
                        className="IndexPartners-cardsExtraBlock"
                        data-id={1}
                        style={{ display: "none" }}
                        id={1}
                    />
                    <div
                        className="IndexPartners-cardsExtraBlock"
                        data-id={2}
                        id={2}
                        style={{ opacity: 0, left: "-30px" }}
                    >
                        <div
                            data-href="HUMRGEmqXLI"
                            className="IndexPartners-cardsExtraBlockInner play-video"
                        >
                            <img
                                data-lazy="true"
                                data-src="/static/img/partners/partners-video-3.png"
                                alt="Partners video"
                                src="/static/img/partners/partners-video-3.png"
                            />
                            <div className="IndexPartners-cardsExtraBlockIcon">
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
    )
}
