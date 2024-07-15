import OwlCarousel from 'react-owl-carousel';
import { IndexFeaturesSequence } from './data';
import BaseSVG from './BaseSVG';

export function AspectMobile() {
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
        <OwlCarousel className="IndexFeatures-sequences-aspect owl-theme owl-loaded owl-drag" {...options}>
            <div className="owl-stage-outer">
                <div className="owl-stage">
                    {
                        IndexFeaturesSequence.map((item, index) => {
                            const { dataTp, dataView, videoShow, imgSrc, link, title } = item;
                            return (
                                <div key={index} className="owl-item" style={{ width: "766.4px" }}>
                                    <div className="IndexFeatures-sequence" data-tp={dataTp}>
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
                                </div>
                            )
                        })
                    }
                    {/* <div className="owl-item active" style={{ width: "766.4px" }}>
                        <div className="IndexFeatures-sequence" data-tp="funding">
                            <section
                                className="IndexFeatures-Funding IndexFeatures-Base shown"
                                data-view="IndexFeatures-Funding"
                            >
                                <div
                                    className="IndexFeatures-Funding-content IndexFeatures-Base-content"
                                    data-path="https://s3.amazonaws.com/marqeta-videos/img/features/funding/"
                                >
                                    <video
                                        muted=""
                                        playsInline=""
                                        crossOrigin=""
                                        preload="auto"
                                        className="IndexFeatures-Base-content-video-show"
                                        src="https://s3.amazonaws.com/marqeta-videos/img/features/funding/show.mp4"
                                        data-timeout={332}
                                        style={{ opacity: 1 }}
                                    />
                                    <video
                                        muted=""
                                        playsInline=""
                                        crossOrigin=""
                                        preload="auto"
                                        className="IndexFeatures-Base-content-video-hover"
                                        src="https://s3.amazonaws.com/marqeta-videos/img/features/funding/hover.mp4"
                                    />
                                    <video
                                        muted=""
                                        playsInline=""
                                        crossOrigin=""
                                        preload="auto"
                                        className="IndexFeatures-Base-content-video-unhover"
                                        src="https://s3.amazonaws.com/marqeta-videos/img/features/funding/unhover.mp4"
                                    />
                                    <img
                                        className="IndexFeatures-Base-content-overlay"
                                        src="https://s3.amazonaws.com/marqeta-videos/img/features/funding/overlay.png"
                                    />
                                </div>
                                <div className="IndexFeatures-Base-hoverArea">
                                    <div className="IndexFeatures-Funding-link IndexFeatures-Base-link">
                                        <a href="/platform/jit-funding">
                                            <div className="IndexFeatures-Base-link-title">
                                                JIT Funding
                                            </div>
                                            <div className="IndexFeatures-Base-link-icon">
                                                <div className="IndexFeatures-Base-link-icon-bg" />
                                                <div className="IndexFeatures-Base-link-icon-title">
                                                    Learn more
                                                </div>
                                                <div className="IndexFeatures-Base-link-icon-plus" />
                                            </div>
                                        </a>
                                    </div>
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width={400}
                                        height="326.27"
                                        viewBox="0, 0, 400,326.27"
                                    >
                                        <path d="M79.412 38.216 L 31.569 65.396 31.569 77.502 C 31.569 84.160,31.657 105.702,31.765 125.373 L 31.961 161.138 32.820 161.531 C 33.292 161.746,81.955 190.433,140.958 225.279 L 248.238 288.636 300.492 257.007 C 329.231 239.611,352.963 225.178,353.230 224.935 C 353.587 224.610,353.929 218.497,354.516 201.972 L 355.317 179.452 354.423 178.592 C 353.932 178.120,307.439 140.403,251.107 94.777 L 148.684 11.822 138.586 11.401 C 133.032 11.170,128.211 10.993,127.872 11.008 C 127.532 11.023,105.725 23.267,79.412 38.216" />
                                    </svg>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="owl-item" style={{ width: "766.4px" }}>
                        <div className="IndexFeatures-sequence" data-tp="controls">
                            <section
                                className="IndexFeatures-Controls IndexFeatures-Base shown"
                                data-view="IndexFeatures-Controls"
                            >
                                <div
                                    className="IndexFeatures-Controls-content IndexFeatures-Base-content"
                                    data-path="https://s3.amazonaws.com/marqeta-videos/img/features/controls/"
                                >
                                    <video
                                        muted=""
                                        playsInline=""
                                        crossOrigin=""
                                        preload="auto"
                                        className="IndexFeatures-Base-content-video-show"
                                        src="https://s3.amazonaws.com/marqeta-videos/img/features/controls/show.mp4"
                                        data-timeout={341}
                                        style={{ opacity: 1 }}
                                    />
                                    <video
                                        muted=""
                                        playsInline=""
                                        crossOrigin=""
                                        preload="auto"
                                        className="IndexFeatures-Base-content-video-hover"
                                        src="https://s3.amazonaws.com/marqeta-videos/img/features/controls/hover.mp4"
                                    />
                                    <video
                                        muted=""
                                        playsInline=""
                                        crossOrigin=""
                                        preload="auto"
                                        className="IndexFeatures-Base-content-video-unhover"
                                        src="https://s3.amazonaws.com/marqeta-videos/img/features/controls/unhover.mp4"
                                    />
                                    <img
                                        className="IndexFeatures-Base-content-overlay"
                                        src="https://s3.amazonaws.com/marqeta-videos/img/features/controls/overlay.png"
                                    />
                                </div>
                                <div className="IndexFeatures-Base-hoverArea">
                                    <div className="IndexFeatures-Controls-link IndexFeatures-Base-link">
                                        <a href="/platform/dynamic-spend-controls">
                                            <div className="IndexFeatures-Base-link-title">
                                                Dynamic spend controls
                                            </div>
                                            <div className="IndexFeatures-Base-link-icon">
                                                <div className="IndexFeatures-Base-link-icon-bg" />
                                                <div className="IndexFeatures-Base-link-icon-title">
                                                    Learn more
                                                </div>
                                                <div className="IndexFeatures-Base-link-icon-plus" />
                                            </div>
                                        </a>
                                    </div>
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width={400}
                                        height="318.62"
                                        viewBox="0, 0, 400,318.62"
                                    >
                                        <path d="M111.444 53.663 C 85.520 68.533,63.846 81.017,63.280 81.404 C 62.316 82.062,62.107 83.582,60.054 104.870 C 58.846 117.389,57.639 127.851,57.372 128.118 C 57.104 128.386,47.230 134.930,35.428 142.660 L 13.971 156.716 14.131 166.716 C 14.241 173.544,14.474 176.885,14.866 177.251 C 15.183 177.545,62.816 206.061,120.719 240.619 L 225.997 303.453 242.906 302.222 L 259.816 300.992 323.903 262.827 L 387.990 224.661 387.810 219.562 C 387.710 216.758,387.490 213.490,387.319 212.301 L 387.010 210.139 348.071 186.694 C 326.654 173.800,308.961 163.079,308.752 162.870 C 308.544 162.661,310.122 152.570,312.260 140.446 C 314.397 128.321,315.988 118.246,315.794 118.056 C 315.600 117.867,280.919 97.718,238.725 73.282 C 196.532 48.846,161.238 28.351,160.294 27.739 L 158.578 26.625 111.444 53.663" />
                                    </svg>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="owl-item" style={{ width: "766.4px" }}>
                        <div className="IndexFeatures-sequence" data-tp="widgets">
                            <section
                                className="IndexFeatures-Widgets IndexFeatures-Base shown"
                                data-view="IndexFeatures-Widgets"
                            >
                                <div
                                    className="IndexFeatures-Widgets-content IndexFeatures-Base-content"
                                    data-path="https://s3.amazonaws.com/marqeta-videos/img/features/widgets/"
                                >
                                    <video
                                        muted=""
                                        playsInline=""
                                        crossOrigin=""
                                        preload="auto"
                                        className="IndexFeatures-Base-content-video-show"
                                        src="https://s3.amazonaws.com/marqeta-videos/img/features/widgets/show.mp4"
                                        data-timeout={338}
                                        style={{ opacity: 1 }}
                                    />
                                    <video
                                        muted=""
                                        playsInline=""
                                        crossOrigin=""
                                        preload="auto"
                                        className="IndexFeatures-Base-content-video-hover"
                                        src="https://s3.amazonaws.com/marqeta-videos/img/features/widgets/hover.mp4"
                                    />
                                    <video
                                        muted=""
                                        playsInline=""
                                        crossOrigin=""
                                        preload="auto"
                                        className="IndexFeatures-Base-content-video-unhover"
                                        src="https://s3.amazonaws.com/marqeta-videos/img/features/widgets/unhover.mp4"
                                    />
                                    <img
                                        className="IndexFeatures-Base-content-overlay"
                                        src="https://s3.amazonaws.com/marqeta-videos/img/features/widgets/overlay.png"
                                    />
                                </div>
                                <div className="IndexFeatures-Base-hoverArea">
                                    <div className="IndexFeatures-Widgets-link IndexFeatures-Base-link">
                                        <a href="/platform/pci-compliant-widgets">
                                            <div className="IndexFeatures-Base-link-title">
                                                PCI widgets
                                            </div>
                                            <div className="IndexFeatures-Base-link-icon">
                                                <div className="IndexFeatures-Base-link-icon-bg" />
                                                <div className="IndexFeatures-Base-link-icon-title">
                                                    Learn more
                                                </div>
                                                <div className="IndexFeatures-Base-link-icon-plus" />
                                            </div>
                                        </a>
                                    </div>
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width={400}
                                        height="213.88"
                                        viewBox="0, 0, 400,213.88"
                                    >
                                        <path d="M199.540 5.873 L 188.387 6.387 136.268 36.570 L 84.149 66.752 74.668 67.175 L 65.187 67.597 44.152 79.622 C 32.582 86.235,22.474 91.981,21.689 92.390 L 20.263 93.134 20.263 102.432 L 20.263 111.730 105.554 160.891 L 190.845 210.052 202.480 210.327 L 214.114 210.603 295.519 162.467 C 340.291 135.991,377.139 114.134,377.404 113.894 C 377.919 113.427,377.024 98.818,376.446 98.253 C 376.295 98.107,339.822 77.122,295.394 51.620 C 215.077 5.518,214.605 5.254,212.655 5.306 C 211.577 5.336,205.675 5.591,199.540 5.873" />
                                    </svg>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="owl-item" style={{ width: "766.4px" }}>
                        <div className="IndexFeatures-sequence" data-tp="cards">
                            <section
                                className="IndexFeatures-Cards IndexFeatures-Base shown"
                                data-view="IndexFeatures-Cards"
                            >
                                <div
                                    className="IndexFeatures-Cards-content IndexFeatures-Base-content"
                                    data-path="https://s3.amazonaws.com/marqeta-videos/img/features/cards/"
                                >
                                    <video
                                        muted=""
                                        playsInline=""
                                        crossOrigin=""
                                        preload="auto"
                                        className="IndexFeatures-Base-content-video-show"
                                        src="https://s3.amazonaws.com/marqeta-videos/img/features/cards/show.mp4"
                                        data-timeout={337}
                                        style={{ opacity: 1 }}
                                    />
                                    <video
                                        muted=""
                                        playsInline=""
                                        crossOrigin=""
                                        preload="auto"
                                        className="IndexFeatures-Base-content-video-hover"
                                        src="https://s3.amazonaws.com/marqeta-videos/img/features/cards/hover.mp4"
                                    />
                                    <video
                                        muted=""
                                        playsInline=""
                                        crossOrigin=""
                                        preload="auto"
                                        className="IndexFeatures-Base-content-video-unhover"
                                        src="https://s3.amazonaws.com/marqeta-videos/img/features/cards/unhover.mp4"
                                    />
                                    <img
                                        className="IndexFeatures-Base-content-overlay"
                                        src="https://s3.amazonaws.com/marqeta-videos/img/features/cards/overlay.png"
                                    />
                                </div>
                                <div className="IndexFeatures-Base-hoverArea">
                                    <div className="IndexFeatures-Cards-link IndexFeatures-Base-link">
                                        <a href="/platform/virtual-cards">
                                            <div className="IndexFeatures-Base-link-title">
                                                Issue virtual cards
                                            </div>
                                            <div className="IndexFeatures-Base-link-icon">
                                                <div className="IndexFeatures-Base-link-icon-bg" />
                                                <div className="IndexFeatures-Base-link-icon-title">
                                                    Learn more
                                                </div>
                                                <div className="IndexFeatures-Base-link-icon-plus" />
                                            </div>
                                        </a>
                                    </div>
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        width={400}
                                        height="259.33"
                                        viewBox="0, 0, 400,259.33"
                                    >
                                        <path d="M134.813 76.442 C 70.269 113.874,17.133 144.725,16.734 145.000 L 16.008 145.500 18.995 162.145 C 20.690 171.597,22.165 178.958,22.407 179.179 C 22.642 179.392,44.691 192.787,71.407 208.945 L 119.981 238.323 135.807 239.009 L 151.633 239.696 266.507 172.510 C 329.687 135.558,382.193 104.804,383.186 104.168 L 384.993 103.013 383.814 99.756 C 383.166 97.965,381.480 93.336,380.068 89.469 L 377.500 82.438 315.059 45.469 C 280.716 25.136,252.516 8.474,252.392 8.442 C 252.268 8.410,199.358 39.010,134.813 76.442" />
                                    </svg>
                                </div>
                            </section>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <div className="owl-nav disabled">
                <button type="button" role="presentation" className="owl-prev">
                    <span aria-label="Previous">‹</span>
                </button>
                <button type="button" role="presentation" className="owl-next">
                    <span aria-label="Next">›</span>
                </button>
            </div> */}
            {/* <div className="owl-dots">
                <button role="button" className="owl-dot active">
                    <span />
                </button>
                <button role="button" className="owl-dot">
                    <span />
                </button>
                <button role="button" className="owl-dot">
                    <span />
                </button>
                <button role="button" className="owl-dot">
                    <span />
                </button>
            </div> */}
        </OwlCarousel>

    )
}
