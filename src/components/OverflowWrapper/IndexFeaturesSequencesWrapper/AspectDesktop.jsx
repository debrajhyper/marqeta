import { IndexFeaturesSequence } from './data';
import BaseSVG from './BaseSVG';

export function AspectDesktop() {
    return (
        <div className="IndexFeatures-sequences-aspect">
            {
                IndexFeaturesSequence.map((item, index) => {
                    const { dataTp, dataView, videoShow, imgSrc, link, title } = item;
                    return (
                        <div key={index} className="IndexFeatures-sequence" data-tp={dataTp}>
                            <section className={`${dataView} IndexFeatures-Base shown`} data-view={dataView}>
                                <div className={`${dataView}-content IndexFeatures-Base-content`}>
                                    {
                                        videoShow.map((item, index) => {
                                            const { type, videoSrc, dataTimeOut, opacity } = item;
                                            return (
                                                <video
                                                    key={index}
                                                    muted
                                                    playsInline
                                                    crossOrigin=""
                                                    preload="auto"
                                                    type="video/mp4"
                                                    className={`IndexFeatures-Base-content-video-${type}`}
                                                    src={videoSrc}
                                                    data-timeout={dataTimeOut}
                                                    style={{ opacity: opacity }}
                                                />
                                            )
                                        })
                                    }
                                    <img className="IndexFeatures-Base-content-overlay" src={imgSrc} />
                                </div>
                                <div className="IndexFeatures-Base-hoverArea">
                                    <div className={`${dataView}-link IndexFeatures-Base-link`}>
                                        <a href={`/platform/${link}`}>
                                            <div className="IndexFeatures-Base-link-title">{title}</div>
                                            <div className="IndexFeatures-Base-link-icon">
                                                <div className="IndexFeatures-Base-link-icon-bg" />
                                                <div className="IndexFeatures-Base-link-icon-title">
                                                    Learn more
                                                </div>
                                                <div className="IndexFeatures-Base-link-icon-plus" />
                                            </div>
                                        </a>
                                    </div>
                                    <BaseSVG svgType={dataTp} />
                                </div>
                            </section>
                        </div>
                    )
                })
            }
        </div>
    )
}