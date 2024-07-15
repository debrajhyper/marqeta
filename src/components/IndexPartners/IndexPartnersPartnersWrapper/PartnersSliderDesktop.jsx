import symbolSVG from '@assets/svg/symbol/svg/sprite.symbol.svg';
import { IndexPartnersPartnersSliderItem } from './data';

export function PartnersSliderDesktop() {
    return (
        <div className="IndexPartners-partnersSlider isSectionShown">
            {
                IndexPartnersPartnersSliderItem.map((item, index) => {
                    const { src, alt, extra } = item;
                    return (
                        <div key={index} className="IndexPartners-partnersSliderItem">
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
                    )
                })
            }
        </div>
    )
}