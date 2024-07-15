import OwlCarousel from 'react-owl-carousel';
import symbolSVG from '@assets/svg/symbol/svg/sprite.symbol.svg';
import { IndexPartnersPartnersSliderItem } from './data';

export function PartnersSliderMobile() {
    const options = {
        loop: true,
        center: true,
        items: 4,
        margin: 0,
        autoplay: false,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };

    return (
        <OwlCarousel className="IndexPartners-partnersSlider isSectionShown owl-theme owl-loaded owl-drag" {...options}>
            <div className="owl-stage-outer">
                <div className="owl-stage">
                    {
                        IndexPartnersPartnersSliderItem.map((item, index) => {
                            const { src, alt, extra } = item;
                            return (
                                <div key={index} className="owl-item" style={{ width: "766.4px" }}>
                                    <div className="IndexPartners-partnersSliderItem">
                                        <div className="IndexPartners-partnersSliderItemImg">
                                            <img data-lazy="true" data-src={src} alt={alt} src={src} />
                                            {
                                                extra
                                                    ? <div className="IndexPartners-partnersSliderItemExtra play-video">
                                                        <div className="IndexPartners-partnersSliderItemExtraInner">
                                                            <img data-lazy="true" data-src={extra.src} alt={extra.alt} src={extra.src} />
                                                            <div className="IndexPartners-partnersSliderItemExtraIcon">
                                                                <svg className="svg svg--icon-play ">
                                                                    <use xlinkHref={`${symbolSVG}#icon-play`} />
                                                                </svg>
                                                                <span>Watch video</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </OwlCarousel>
    )
}