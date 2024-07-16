import './indexPartnersCardsWrapper-style.css';
import symbolSVG from '@assets/svg/symbol/svg/sprite.symbol.svg';
import partnersVideo3 from '@assets/img/partners/partners-video-3.png';

export function IndexPartnersCardsWrapper() {
    return (
        <div className="IndexPartners-cardsWrapper">
            <div className="IndexPartners-cards">
                <div className="IndexPartners-canvas" style={{ visibility: "visible" }}>
                    <canvas width={787} height={989} style={{ width: 630, height: "791.2px" }} />
                </div>
                <div className="IndexPartners-cardsExtra">
                    <div className="IndexPartners-cardsExtraBlock" style={{ display: "none" }} />
                    <div className="IndexPartners-cardsExtraBlock" style={{ display: "none" }} />
                    <div className="IndexPartners-cardsExtraBlock" style={{ opacity: 0, left: "-30px" }}>
                        <div className="IndexPartners-cardsExtraBlockInner play-video">
                            <img data-lazy="true" data-src={partnersVideo3} alt="Partners video" src={partnersVideo3} />
                            <div className="IndexPartners-cardsExtraBlockIcon">
                                <svg className="svg svg--icon-play ">
                                    <use xlinkHref={`${symbolSVG}#icon-play`} />
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