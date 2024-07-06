import '@dotlottie/player-component';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function HeroSection() {
    return (
        <section className="IndexHero" data-view="IndexHero">
            <div className="IndexHero-wrapper">
                <div className="IndexHero-head">
                    <div className="IndexHero-titleWrapper" style={{ zIndex: 1000 }}>
                        <h1
                            className="IndexHero-title isImmediateShow isSectionShown"
                            id="page-title"
                        >
                            <span>The next era of</span>
                            <span
                                style={{
                                    overflow: "hidden",
                                    position: "relative",
                                    height: 65,
                                    color: "#20A472",
                                    display: "inline-block"
                                }}
                                id="swap-container"
                            >
                                <div
                                    id="swap-text"
                                    style={{
                                        translate: "none",
                                        rotate: "none",
                                        scale: "none",
                                        color: "rgb(42, 32, 106)",
                                        transform: "translate(0px, -260px)"
                                    }}
                                >
                                    <div style={{ height: 65 }}>credit</div>
                                    <div style={{ height: 65 }}>payroll</div>
                                    <div style={{ height: 65 }}>lending</div>
                                    <div style={{ height: 65 }}>expense</div>
                                    <div style={{ height: 65 }}>embedded finance</div>
                                </div>
                            </span>
                        </h1>
                        <div className="IndexHero-subtitle isSectionShown">
                            Integrate end to end credit and payment solutions into your business
                            processes using our modern card issuing platform.
                        </div>
                        <div className="IndexHero-textButton IndexHero-ctas isSectionShown">
                            <a
                                className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButtonBase-root css-1gbd66w-MuiButtonBase-root-MuiButton-root-Link-root"
                                target="_self"
                                aria-label="Contact Sales"
                                href="/contact-us"
                            >
                                Contact sales
                                <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root" />
                            </a>
                            <a href="/platform/credit" target="_self">
                                <button
                                    className="MuiButton-root MuiButton-outlined"
                                    aria-label="Learn more about credit"
                                >
                                    Learn more about credit
                                </button>
                            </a>
                        </div>
                    </div>
                    <div
                        className="IndexHero-sequenceWrapper isHide"
                        data-video-path="https://s3.amazonaws.com/marqeta-videos/img/hero/"
                        style={{ visibility: "hidden" }}
                    >
                        <div className="IndexHero-sequenceInner">
                            <video
                                muted=""
                                playsInline=""
                                crossOrigin=""
                                preload="auto"
                                className="IndexHero-sequence isShow"
                                src="https://s3.amazonaws.com/marqeta-videos/img/hero/sequence.mp4"
                                data-timeout={262}
                            />
                        </div>
                    </div>
                </div>
                <div className="IndexHero-whiteBackground isImmediateShow isSectionShown">
                    <div className="IndexHero-whiteBackgroundInner">
                        <svg className="svg svg--background-white-1440 ">
                            <use xlinkHref="/static/svg/symbol/svg/sprite.symbol.svg#background-white-1440" />
                        </svg>
                    </div>
                </div>
                <div className="IndexHero-logos">
                    <div className="IndexHero-logo isImmediateShow isSectionShown">
                        <img
                            data-lazy="true"
                            data-src="/static/svg/logo-uber.svg"
                            alt="Uber logo"
                            src="/static/svg/logo-uber.svg"
                        />
                    </div>
                    <div className="IndexHero-logo isImmediateShow isSectionShown">
                        <img
                            data-lazy="true"
                            data-src="/static/svg/logo-square.svg"
                            alt="Square logo"
                            src="/static/svg/logo-square.svg"
                        />
                    </div>
                    <div className="IndexHero-logo isImmediateShow isSectionShown">
                        <img
                            data-lazy="true"
                            data-src="/static/svg/logo-instacart.svg"
                            alt="Instacart logo"
                            src="/static/svg/logo-instacart.svg"
                        />
                    </div>
                    <div className="IndexHero-logo isImmediateShow isSectionShown">
                        <img
                            data-lazy="true"
                            data-src="/static/svg/logo-jpm.svg"
                            alt="JPMorgan logo"
                            src="/static/svg/logo-jpm.svg"
                        />
                    </div>
                    <div className="IndexHero-logo isImmediateShow isSectionShown">
                        <img
                            data-lazy="true"
                            data-src="/static/svg/logo-doordash.svg"
                            alt="Doordash logo"
                            src="/static/svg/logo-doordash.svg"
                        />
                    </div>
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 600
                }}
            >
                <div
                    className="IndexHero-wrapper"
                    style={{ position: "relative", height: "100%" }}
                >
                    <div
                        className="hero-asset"
                        style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            zIndex: 999,
                            width: "100%",
                            height: "100%"
                        }}
                    >
                        <div
                            className="hero-asset-photo css-1en4yzq-Homepage-heroPhoto"
                            style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform:
                                    "translate3d(85.9375px, -257.812px, 0px) rotate(12.8906deg)"
                            }}
                        >
                            <img
                                src="/top-photo.png"
                                srcSet="/top-photo.png?width=3840 3840w, /top-photo.png?width=3520 3520w, /top-photo.png?width=3200 3200w, /top-photo.png?width=2880 2880w, /top-photo.png?width=2560 2560w, /top-photo.png?width=2240 2240w, /top-photo.png?width=1920 1920w, /top-photo.png?width=1600 1600w, /top-photo.png?width=1440 1440w, /top-photo.png?width=1280 1280w, /top-photo.png?width=960 960w, /top-photo.png?width=1280 640w"
                                sizes="(max-width: 3840x) 3840px, (max-width: 3520x) 3520px, (max-width: 3200x) 3200px, (max-width: 2880x) 2880px, (max-width: 2560x) 2560px, (max-width: 2240x) 2240px, (max-width: 1920x) 1920px, (max-width: 1600x) 1600px, (max-width: 1440x) 1440px, (max-width: 1280x) 1280px, (max-width: 960x) 960px, (max-width: 640x) 1280px"
                                loading="eager"
                                style={{ width: "100%" }}
                            />
                        </div>
                        <div className="hero-asset-grid top-grid css-1b8td8u-Homepage-desktopGrid">
                            <svg
                                className="top-grid_svg__ui-top-grid"
                                viewBox="0 0 832 750"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.828-1.407S-11.486 110.807 38.473 179.81c85.524 118.129 174.515 41.931 241.211 113.8 51.958 55.981 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.454 1.072 98.254-101.546 101.969-99.112 216.798"
                                    stroke="url(#top-grid_svg__paint0_linear_133_5669)"
                                    strokeMiterlimit={10}
                                    style={{
                                        strokeDashoffset: "-524.429",
                                        strokeDasharray: "171.631px, 1048.96px"
                                    }}
                                />
                                <path
                                    d="M47.986-1.407S15.081 105.595 67.106 177.302c89.229 122.962 177.028 41.931 243.738 113.8 51.958 55.981 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.454 1.072 98.254-99.033 104.476-96.585 219.323"
                                    stroke="url(#top-grid_svg__paint1_linear_133_5669)"
                                    strokeMiterlimit={10}
                                    style={{
                                        strokeDashoffset: "-525.153",
                                        strokeDasharray: "171.868px, 1050.41px"
                                    }}
                                />
                                <path
                                    d="M55.765-1.407S21.71 104.296 74.262 176.67c90.142 124.171 177.663 41.932 244.36 113.801 51.957 55.981 47.221 102.222 91.451 148.121 72.082 74.791 302.51.487 303.489 89.454 1.072 98.254-98.398 105.107-95.95 219.936"
                                    stroke="url(#top-grid_svg__paint2_linear_133_5669)"
                                    strokeMiterlimit={10}
                                    style={{
                                        strokeDashoffset: "-525.336",
                                        strokeDasharray: "171.928px, 1050.77px"
                                    }}
                                />
                                <path
                                    d="M24.619-1.407s-29.465 110.915 21.01 180.584c86.451 119.338 175.137 41.932 241.847 113.801 51.957 55.98 47.22 102.222 91.451 148.121 72.082 74.791 302.509.487 303.489 89.453 1.071 98.255-100.912 102.583-98.477 217.43"
                                    stroke="url(#top-grid_svg__paint3_linear_133_5669)"
                                    strokeMiterlimit={10}
                                    style={{
                                        strokeDashoffset: "-524.601",
                                        strokeDasharray: "171.687px, 1049.3px"
                                    }}
                                />
                                <path
                                    d="M32.413-1.407S1.797 108.192 52.79 178.546c87.376 120.546 175.771 41.931 242.468 113.801 51.957 55.98 47.221 102.222 91.451 148.121 72.082 74.791 302.51.487 303.489 89.453 1.071 98.255-100.29 103.214-97.842 218.061"
                                    stroke="url(#top-grid_svg__paint4_linear_133_5669)"
                                    strokeMiterlimit={10}
                                    style={{
                                        strokeDashoffset: "-524.773",
                                        strokeDasharray: "171.744px, 1049.65px"
                                    }}
                                />
                                <path
                                    d="M40.191-1.407s-31.754 108.3 19.754 179.34c88.302 121.754 176.406 41.931 243.103 113.801 51.957 55.98 47.221 102.222 91.451 148.121 72.082 74.791 302.51.487 303.489 89.453 1.071 98.255-99.655 103.845-97.22 218.692"
                                    stroke="url(#top-grid_svg__paint5_linear_133_5669)"
                                    strokeMiterlimit={10}
                                    style={{
                                        strokeDashoffset: "-524.965",
                                        strokeDasharray: "171.807px, 1050.03px"
                                    }}
                                />
                                <defs>
                                    <linearGradient
                                        id="top-grid_svg__paint0_linear_133_5669"
                                        x1="341.734"
                                        y1="-1.407"
                                        x2="341.734"
                                        y2="747.982"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9D99D8" stopOpacity={0} />
                                        <stop offset="0.531" stopColor="#9D99D8" />
                                        <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient
                                        id="top-grid_svg__paint1_linear_133_5669"
                                        x1="371.757"
                                        y1="-1.407"
                                        x2="371.757"
                                        y2={748}
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9D99D8" stopOpacity={0} />
                                        <stop offset="0.531" stopColor="#9D99D8" />
                                        <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient
                                        id="top-grid_svg__paint2_linear_133_5669"
                                        x1="379.242"
                                        y1="-1.407"
                                        x2="379.242"
                                        y2="747.982"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9D99D8" stopOpacity={0} />
                                        <stop offset="0.531" stopColor="#9D99D8" />
                                        <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient
                                        id="top-grid_svg__paint3_linear_133_5669"
                                        x1="349.247"
                                        y1="-1.407"
                                        x2="349.247"
                                        y2="747.982"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9D99D8" stopOpacity={0} />
                                        <stop offset="0.531" stopColor="#9D99D8" />
                                        <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient
                                        id="top-grid_svg__paint4_linear_133_5669"
                                        x1="356.752"
                                        y1="-1.407"
                                        x2="356.752"
                                        y2="747.982"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9D99D8" stopOpacity={0} />
                                        <stop offset="0.531" stopColor="#9D99D8" />
                                        <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient
                                        id="top-grid_svg__paint5_linear_133_5669"
                                        x1="364.253"
                                        y1="-1.407"
                                        x2="364.253"
                                        y2={748}
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9D99D8" stopOpacity={0} />
                                        <stop offset="0.531" stopColor="#9D99D8" />
                                        <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="hero-asset-grid top-ui css-1b8td8u-Homepage-desktopGrid">
                            {/* <dotlottie-player
                                src="../../assets/top-ui.lottie"
                                autoPlay
                                style={{ height: "100%", width: "100%" }}
                                background="transparent"
                            /> */}
                            <DotLottieReact
                                src="../../assets/top-ui.lottie"
                                autoPlay
                                style={{ height: "100%", width: "100%" }}
                                background="transparent"
                            />
                        </div>
                        <div className="css-1ac2p79-Homepage-mobileGrid">
                            <svg
                                className="top-grid-mobile_svg__ui-top-grid"
                                viewBox="0 0 392 255"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.018 23.78S8.715 68.387 35.446 88.29c45.76 34.072 75.153-4.014 108.985 15.077 26.356 14.87 28.651 32.477 50.927 44.487 36.3 19.568 123.667-33.622 132.208-.873 9.428 36.168-32.167 49.007-20.665 91.144"
                                    stroke="url(#top-grid-mobile_svg__paint0_linear_199_2331)"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    style={{
                                        strokeDashoffset: "-210.39",
                                        strokeDasharray: "68.8548px, 420.879px"
                                    }}
                                />
                                <path
                                    d="M22.75 20.298s-3.656 43.196 24.166 63.867c47.715 35.443 76.18-4.295 110.018 14.795 26.355 14.869 28.651 32.477 50.926 44.487 36.301 19.568 123.667-33.622 132.208-.874 9.429 36.169-30.91 49.652-19.401 91.795"
                                    stroke="url(#top-grid-mobile_svg__paint1_linear_199_2331)"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    style={{
                                        strokeDashoffset: "-210.681",
                                        strokeDasharray: "68.9502px, 421.462px"
                                    }}
                                />
                                <path
                                    d="M25.93 19.43s-4.245 42.844 23.853 63.702c48.2 35.787 76.441-4.366 110.273 14.725 26.355 14.87 28.651 32.478 50.926 44.487 36.3 19.569 123.667-33.622 132.208-.873 9.429 36.169-30.593 49.814-19.085 91.95"
                                    stroke="url(#top-grid-mobile_svg__paint2_linear_199_2331)"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    style={{
                                        strokeDashoffset: "-210.755",
                                        strokeDasharray: "68.9743px, 421.61px"
                                    }}
                                />
                                <path
                                    d="M13.202 22.91s-1.891 44.256 25.11 64.347c46.25 34.415 75.408-4.083 109.246 15.006 26.356 14.87 28.651 32.478 50.926 44.487 36.301 19.569 123.667-33.622 132.208-.873 9.429 36.168-31.851 49.162-20.347 91.307"
                                    stroke="url(#top-grid-mobile_svg__paint3_linear_199_2331)"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    style={{
                                        strokeDashoffset: "-210.459",
                                        strokeDasharray: "68.8774px, 421.017px"
                                    }}
                                />
                                <path
                                    d="M16.387 22.038s-2.483 43.9 24.793 64.185c46.738 34.758 75.667-4.153 109.5 14.938 26.355 14.869 28.65 32.477 50.926 44.487 36.3 19.568 123.667-33.622 132.208-.874 9.428 36.169-31.54 49.326-20.03 91.469"
                                    stroke="url(#top-grid-mobile_svg__paint4_linear_199_2331)"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    style={{
                                        strokeDashoffset: "-210.528",
                                        strokeDasharray: "68.9001px, 421.156px"
                                    }}
                                />
                                <path
                                    d="M19.567 21.17S16.5 64.715 44.049 85.197c47.227 35.1 75.927-4.225 109.76 14.866 26.355 14.869 28.651 32.477 50.926 44.487 36.3 19.568 123.667-33.622 132.208-.874 9.429 36.169-31.222 49.489-19.718 91.633"
                                    stroke="url(#top-grid-mobile_svg__paint5_linear_199_2331)"
                                    strokeWidth="0.5"
                                    strokeMiterlimit={10}
                                    style={{
                                        strokeDashoffset: "-210.605",
                                        strokeDasharray: "68.9252px, 421.309px"
                                    }}
                                />
                                <defs>
                                    <linearGradient
                                        id="top-grid-mobile_svg__paint0_linear_199_2331"
                                        x1="142.793"
                                        y1="-12.525"
                                        x2="217.976"
                                        y2="262.44"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9D99D8" stopOpacity={0} />
                                        <stop offset="0.531" stopColor="#9D99D8" />
                                        <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient
                                        id="top-grid-mobile_svg__paint1_linear_199_2331"
                                        x1="155.061"
                                        y1="-15.879"
                                        x2="230.246"
                                        y2="259.092"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9D99D8" stopOpacity={0} />
                                        <stop offset="0.531" stopColor="#9D99D8" />
                                        <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient
                                        id="top-grid-mobile_svg__paint2_linear_199_2331"
                                        x1="158.121"
                                        y1="-16.716"
                                        x2="233.303"
                                        y2="258.249"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9D99D8" stopOpacity={0} />
                                        <stop offset="0.531" stopColor="#9D99D8" />
                                        <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient
                                        id="top-grid-mobile_svg__paint3_linear_199_2331"
                                        x1="145.864"
                                        y1="-13.364"
                                        x2="221.047"
                                        y2="261.6"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9D99D8" stopOpacity={0} />
                                        <stop offset="0.531" stopColor="#9D99D8" />
                                        <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient
                                        id="top-grid-mobile_svg__paint4_linear_199_2331"
                                        x1="148.93"
                                        y1="-14.203"
                                        x2="224.113"
                                        y2="260.762"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9D99D8" stopOpacity={0} />
                                        <stop offset="0.531" stopColor="#9D99D8" />
                                        <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient
                                        id="top-grid-mobile_svg__paint5_linear_199_2331"
                                        x1="151.997"
                                        y1="-15.041"
                                        x2="227.181"
                                        y2="259.93"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#9D99D8" stopOpacity={0} />
                                        <stop offset="0.531" stopColor="#9D99D8" />
                                        <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="hero-asset-grid top-ui css-1ac2p79-Homepage-mobileGrid">
                            <dotlottie-player
                                src="/public/top-ui-mobile-2.lottie"
                                autoPlay="true"
                                style={{ height: "100%", width: "100%" }}
                                background="transparent"
                            />
                        </div>
                    </div>
                    <div
                        className="hero-asset-grid css-1b8td8u-Homepage-desktopGrid"
                        style={{ zIndex: 99 }}
                    >
                        <svg
                            className="bottom-grid_svg__ui-bottom-grid"
                            viewBox="0 0 832 750"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M63.558.593S28.35 104.98 81.419 178.04c91.068 125.379 178.285 41.932 244.995 113.801 51.958 55.98 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.453 1.072 98.255-97.762 105.739-95.328 220.568"
                                stroke="url(#bottom-grid_svg__paint0_linear_133_5603)"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-525.537",
                                    strokeDasharray: "171.994px, 1051.17px"
                                }}
                            />
                            <path
                                d="M71.335.593S34.99 103.681 88.562 177.408c91.994 126.587 178.92 41.931 245.63 113.801 51.957 55.98 47.221 102.222 91.451 148.121 72.082 74.791 302.51.487 303.489 89.453 1.071 98.255-97.141 106.37-94.693 221.199"
                                stroke="url(#bottom-grid_svg__paint1_linear_133_5603)"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-525.741",
                                    strokeDasharray: "172.061px, 1051.58px"
                                }}
                            />
                            <path
                                d="M79.13.593s-37.496 101.79 16.605 176.184c92.92 127.796 179.555 41.931 246.252 113.8 51.957 55.981 47.221 102.223 91.451 148.122 72.082 74.791 302.51.486 303.489 89.453 1.071 98.254-96.506 106.983-94.072 221.83"
                                stroke="url(#bottom-grid_svg__paint2_linear_133_5603)"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-525.951",
                                    strokeDasharray: "172.129px, 1052px"
                                }}
                            />
                            <path
                                d="M86.922.593S48.275 101.066 102.89 176.164c93.847 129.004 180.178 41.931 246.887 113.8 51.958 55.981 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.454 1.072 98.254-95.883 107.614-93.436 222.461"
                                stroke="url(#bottom-grid_svg__paint3_linear_133_5603)"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-526.173",
                                    strokeDasharray: "172.202px, 1052.45px"
                                }}
                            />
                            <path
                                d="M94.703.593S54.904 99.768 110.05 175.532c94.773 130.213 180.813 41.932 247.509 113.801 51.958 55.98 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.454 1.072 98.254-95.249 108.245-92.801 223.092"
                                stroke="url(#bottom-grid_svg__paint4_linear_133_5603)"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-526.392",
                                    strokeDasharray: "172.274px, 1052.88px"
                                }}
                            />
                            <path
                                d="M102.495.593s-40.95 97.876 14.713 174.308c95.685 131.421 181.434 41.931 248.144 113.801 51.957 55.98 47.221 102.222 91.451 148.121 72.082 74.791 302.51.487 303.489 89.453 1.071 98.255-94.614 108.877-92.179 223.706"
                                stroke="url(#bottom-grid_svg__paint5_linear_133_5603)"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-526.615",
                                    strokeDasharray: "172.347px, 1053.33px"
                                }}
                            />
                            <path
                                d="M110.276.593s-42.087 96.56 14.077 173.677c96.612 132.629 182.07 41.931 248.779 113.801 51.958 55.98 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.453 1.072 98.255-93.992 109.508-91.544 224.337"
                                stroke="url(#bottom-grid_svg__paint6_linear_133_5603)"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-526.847",
                                    strokeDasharray: "172.423px, 1053.79px"
                                }}
                            />
                            <path
                                d="M118.07.593s-43.239 95.26 13.455 173.046c97.538 133.837 182.705 41.931 249.401 113.8 51.958 55.981 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.454 1.072 98.254-93.357 110.139-90.909 224.968"
                                stroke="url(#bottom-grid_svg__paint7_linear_133_5603)"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-527.084",
                                    strokeDasharray: "172.5px, 1054.27px"
                                }}
                            />
                            <path
                                d="M125.847.593s-44.39 93.962 12.821 172.414c98.464 135.046 183.326 41.932 250.036 113.801 51.957 55.981 47.221 102.222 91.451 148.121 72.082 74.791 302.51.487 303.489 89.454 1.071 98.254-92.722 110.77-90.287 225.599"
                                stroke="url(#bottom-grid_svg__paint8_linear_133_5603)"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-527.331",
                                    strokeDasharray: "172.581px, 1054.76px"
                                }}
                            />
                            <path
                                d="M133.642.593s-45.54 92.646 12.199 171.801c99.39 136.254 183.961 41.932 250.671 113.801 51.957 55.98 47.221 102.222 91.451 148.121 72.082 74.791 302.51.487 303.489 89.453 1.071 98.255-92.1 111.384-89.652 226.231"
                                stroke="url(#bottom-grid_svg__paint9_linear_133_5603)"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-527.593",
                                    strokeDasharray: "172.667px, 1055.29px"
                                }}
                            />
                            <path
                                d="M141.434.593s-46.678 91.347 11.564 171.17c100.316 137.463 184.596 41.931 251.293 113.801 51.957 55.98 47.221 102.222 91.451 148.121 72.082 74.791 302.51.487 303.489 89.453C800.302 621.393 707.766 635.153 710.2 750"
                                stroke="url(#bottom-grid_svg__paint10_linear_133_5603)"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-527.846",
                                    strokeDasharray: "172.75px, 1055.79px"
                                }}
                            />
                            <path
                                d="M149.214.593s-47.829 90.049 10.929 170.539c101.229 138.671 185.218 41.931 251.928 113.8 51.957 55.981 47.221 102.223 91.451 148.122 72.082 74.791 302.51.487 303.489 89.453 1.072 98.254-90.843 112.646-88.395 227.493"
                                stroke="url(#bottom-grid_svg__paint11_linear_133_5603)"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-528.112",
                                    strokeDasharray: "172.837px, 1056.32px"
                                }}
                            />
                            <path
                                d="M157.007.593s-48.981 88.732 10.307 169.908c102.155 139.879 185.853 41.931 252.55 113.8 51.957 55.981 47.22 102.222 91.451 148.121 72.081 74.791 302.509.487 303.488 89.454 1.072 98.254-90.207 113.277-87.76 228.106"
                                stroke="url(#bottom-grid_svg__paint12_linear_133_5603)"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-528.372",
                                    strokeDasharray: "172.922px, 1056.84px"
                                }}
                            />
                            <path
                                d="M164.787.593s-50.132 87.434 9.671 169.276C277.54 310.957 360.934 211.801 427.643 283.67c51.958 55.981 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.454 1.072 98.254-89.572 113.908-87.138 228.737"
                                stroke="url(#bottom-grid_svg__paint13_linear_133_5603)"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-528.651",
                                    strokeDasharray: "173.013px, 1057.4px"
                                }}
                            />
                            <path
                                d="M171.58.593s-51.283 86.135 9.036 168.645c104.008 142.296 187.11 41.931 253.82 113.801 51.958 55.98 47.221 102.222 91.452 148.121 72.081 74.791 302.509.487 303.488 89.453 1.072 98.255-88.951 114.54-86.503 229.369"
                                stroke="url(#bottom-grid_svg__paint14_linear_133_5603)"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-528.936",
                                    strokeDasharray: "173.106px, 1057.97px"
                                }}
                            />
                            <defs>
                                <linearGradient
                                    id="bottom-grid_svg__paint0_linear_133_5603"
                                    x1="386.736"
                                    y1="0.593"
                                    x2="386.736"
                                    y2="749.982"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid_svg__paint1_linear_133_5603"
                                    x1="394.215"
                                    y1="0.593"
                                    x2="394.215"
                                    y2="749.982"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid_svg__paint2_linear_133_5603"
                                    x1="401.706"
                                    y1="0.593"
                                    x2="401.706"
                                    y2="749.982"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid_svg__paint3_linear_133_5603"
                                    x1="409.19"
                                    y1="0.593"
                                    x2="409.19"
                                    y2={750}
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid_svg__paint4_linear_133_5603"
                                    x1="416.661"
                                    y1="0.593"
                                    x2="416.661"
                                    y2={750}
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid_svg__paint5_linear_133_5603"
                                    x1="424.141"
                                    y1="0.593"
                                    x2="424.141"
                                    y2="749.982"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid_svg__paint6_linear_133_5603"
                                    x1="431.608"
                                    y1="0.593"
                                    x2="431.608"
                                    y2="749.982"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid_svg__paint7_linear_133_5603"
                                    x1="439.085"
                                    y1="0.593"
                                    x2="439.085"
                                    y2="749.982"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid_svg__paint8_linear_133_5603"
                                    x1="446.542"
                                    y1="0.593"
                                    x2="446.542"
                                    y2="749.982"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid_svg__paint9_linear_133_5603"
                                    x1="454.022"
                                    y1="0.593"
                                    x2="454.022"
                                    y2={750}
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid_svg__paint10_linear_133_5603"
                                    x1="461.486"
                                    y1="0.593"
                                    x2="461.486"
                                    y2={750}
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid_svg__paint11_linear_133_5603"
                                    x1="468.94"
                                    y1="0.593"
                                    x2="468.94"
                                    y2={750}
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid_svg__paint12_linear_133_5603"
                                    x1="476.405"
                                    y1="0.593"
                                    x2="476.405"
                                    y2="749.982"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid_svg__paint13_linear_133_5603"
                                    x1="483.855"
                                    y1="0.593"
                                    x2="483.855"
                                    y2="749.982"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid_svg__paint14_linear_133_5603"
                                    x1="490.316"
                                    y1="0.593"
                                    x2="490.316"
                                    y2="749.982"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div
                        className="hero-asset-grid css-1ac2p79-Homepage-mobileGrid"
                        style={{ zIndex: 99 }}
                    >
                        <svg
                            className="bottom-grid-mobile_svg__ui-bottom-grid"
                            viewBox="0 0 392 255"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M29.126 18.555s-4.842 42.489 23.54 63.54C101.37 118.22 129.39 77.65 163.24 96.738c26.364 14.867 28.659 32.475 50.942 44.482 36.313 19.565 123.721-33.636 132.262-.888 9.429 36.169-30.293 49.981-18.79 92.119"
                                stroke="url(#bottom-grid-mobile_svg__paint0_linear_142_8815)"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-210.886",
                                    strokeDasharray: "69.0171px, 421.871px"
                                }}
                            />
                            <path
                                d="M32.306 17.686S26.88 59.822 55.528 81.063c49.194 36.469 76.986-4.514 110.835 14.572 26.365 14.867 28.659 32.475 50.942 44.483 36.313 19.565 123.721-33.637 132.262-.888 9.429 36.168-29.981 50.144-18.473 92.28"
                                stroke="url(#bottom-grid-mobile_svg__paint1_linear_142_8815)"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-210.968",
                                    strokeDasharray: "69.0442px, 422.037px"
                                }}
                            />
                            <path
                                d="M35.492 16.814S29.476 58.6 58.402 80.028c49.683 36.812 77.245-4.585 111.089 14.503 26.365 14.867 28.659 32.475 50.942 44.482 36.313 19.565 123.721-33.636 132.262-.888 9.429 36.169-29.665 50.3-18.161 92.445"
                                stroke="url(#bottom-grid-mobile_svg__paint2_linear_142_8815)"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-211.054",
                                    strokeDasharray: "69.0721px, 422.207px"
                                }}
                            />
                            <path
                                d="M38.679 15.943s-6.607 41.428 22.594 63.058c50.172 37.155 77.5-4.654 111.349 14.432 26.365 14.867 28.66 32.475 50.943 44.482 36.313 19.565 123.72-33.636 132.261-.888 9.429 36.169-29.353 50.464-17.843 92.607"
                                stroke="url(#bottom-grid-mobile_svg__paint3_linear_142_8815)"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-211.144",
                                    strokeDasharray: "69.1016px, 422.388px"
                                }}
                            />
                            <path
                                d="M41.86 15.074S34.664 56.15 64.142 77.968c50.661 37.497 77.759-4.725 111.603 14.362 26.365 14.867 28.66 32.475 50.943 44.483 36.313 19.565 123.72-33.637 132.261-.888 9.429 36.168-29.036 50.626-17.526 92.768"
                                stroke="url(#bottom-grid-mobile_svg__paint4_linear_142_8815)"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-211.232",
                                    strokeDasharray: "69.1305px, 422.564px"
                                }}
                            />
                            <path
                                d="M45.045 14.202S37.26 54.928 67.011 76.935c51.145 37.841 78.013-4.796 111.862 14.29 26.365 14.868 28.66 32.476 50.943 44.483 36.313 19.565 123.72-33.636 132.261-.888 9.429 36.169-28.718 50.788-17.215 92.926"
                                stroke="url(#bottom-grid-mobile_svg__paint5_linear_142_8815)"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-211.324",
                                    strokeDasharray: "69.1606px, 422.748px"
                                }}
                            />
                            <path
                                d="M48.225 13.333s-8.37 40.367 21.648 62.57c51.634 38.184 78.273-4.866 112.122 14.22 26.365 14.867 28.66 32.475 50.943 44.482 36.313 19.565 123.72-33.636 132.261-.888 9.429 36.169-28.406 50.952-16.898 93.088"
                                stroke="url(#bottom-grid-mobile_svg__paint6_linear_142_8815)"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-211.418",
                                    strokeDasharray: "69.1914px, 422.936px"
                                }}
                            />
                            <path
                                d="M51.412 12.461s-8.96 40.017 21.336 62.407c52.123 38.527 78.532-4.937 112.377 14.15 26.364 14.868 28.659 32.476 50.942 44.483 36.313 19.565 123.72-33.636 132.261-.888 9.429 36.169-28.089 51.114-16.58 93.25"
                                stroke="url(#bottom-grid-mobile_svg__paint7_linear_142_8815)"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-211.515",
                                    strokeDasharray: "69.2231px, 423.13px"
                                }}
                            />
                            <path
                                d="M54.592 11.592s-9.55 39.665 21.018 62.245c52.613 38.869 78.787-5.007 112.637 14.08 26.364 14.866 28.659 32.474 50.942 44.482 36.313 19.565 123.721-33.637 132.262-.888 9.429 36.168-27.772 51.276-16.269 93.413"
                                stroke="url(#bottom-grid-mobile_svg__paint8_linear_142_8815)"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-211.617",
                                    strokeDasharray: "69.2563px, 423.333px"
                                }}
                            />
                            <path
                                d="M57.779 10.72S47.638 50.029 78.487 72.809c53.101 39.213 79.046-5.077 112.896 14.009 26.364 14.867 28.659 32.475 50.942 44.482 36.313 19.565 123.72-33.636 132.261-.888 9.429 36.169-27.461 51.433-15.951 93.576"
                                stroke="url(#bottom-grid-mobile_svg__paint9_linear_142_8815)"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-211.724",
                                    strokeDasharray: "69.2913px, 423.547px"
                                }}
                            />
                            <path
                                d="M60.966 9.85S50.24 48.805 81.356 71.775c53.591 39.555 79.306-5.149 113.15 13.939 26.365 14.867 28.66 32.475 50.943 44.482 36.313 19.565 123.72-33.636 132.261-.888 9.429 36.169-27.144 51.596-15.639 93.74"
                                stroke="url(#bottom-grid-mobile_svg__paint10_linear_142_8815)"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-211.827",
                                    strokeDasharray: "69.3251px, 423.754px"
                                }}
                            />
                            <path
                                d="M64.145 8.98S52.83 47.584 84.218 70.743c54.075 39.9 79.56-5.218 113.41 13.868 26.364 14.867 28.659 32.475 50.942 44.483 36.313 19.565 123.721-33.637 132.262-.888 9.429 36.168-26.832 51.758-15.322 93.901"
                                stroke="url(#bottom-grid-mobile_svg__paint11_linear_142_8815)"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-211.936",
                                    strokeDasharray: "69.361px, 423.973px"
                                }}
                            />
                            <path
                                d="M67.33 8.109s-11.905 38.247 19.761 61.6c54.564 40.242 79.82-5.29 113.664 13.798 26.365 14.867 28.66 32.475 50.943 44.483 36.313 19.564 123.72-33.637 132.261-.888 9.429 36.168-26.514 51.92-15.006 94.056"
                                stroke="url(#bottom-grid-mobile_svg__paint12_linear_142_8815)"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-212.043",
                                    strokeDasharray: "69.3958px, 424.185px"
                                }}
                            />
                            <path
                                d="M70.512 7.24S58.017 45.134 89.956 68.676c55.053 40.585 80.074-5.36 113.924 13.727 26.364 14.867 28.659 32.475 50.942 44.483 36.313 19.565 123.721-33.637 132.262-.888 9.429 36.168-26.197 52.083-14.695 94.22"
                                stroke="url(#bottom-grid-mobile_svg__paint13_linear_142_8815)"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-212.157",
                                    strokeDasharray: "69.4333px, 424.415px"
                                }}
                            />
                            <path
                                d="M73.29 6.48S60.205 44.025 92.416 67.755c55.542 40.928 80.334-5.43 114.183 13.657 26.365 14.867 28.66 32.475 50.943 44.482 36.313 19.565 123.72-33.636 132.261-.888 9.429 36.169-25.885 52.247-14.377 94.383"
                                stroke="url(#bottom-grid-mobile_svg__paint14_linear_142_8815)"
                                strokeWidth="0.5"
                                strokeMiterlimit={10}
                                style={{
                                    strokeDashoffset: "-212.274",
                                    strokeDasharray: "69.4716px, 424.649px"
                                }}
                            />
                            <defs>
                                <linearGradient
                                    id="bottom-grid-mobile_svg__paint0_linear_142_8815"
                                    x1="161.252"
                                    y1="-17.572"
                                    x2="236.435"
                                    y2="257.393"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid-mobile_svg__paint1_linear_142_8815"
                                    x1="164.31"
                                    y1="-18.408"
                                    x2="239.493"
                                    y2="256.557"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid-mobile_svg__paint2_linear_142_8815"
                                    x1="167.371"
                                    y1="-19.245"
                                    x2="242.554"
                                    y2="255.719"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid-mobile_svg__paint3_linear_142_8815"
                                    x1="170.433"
                                    y1="-20.082"
                                    x2="245.617"
                                    y2="254.889"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid-mobile_svg__paint4_linear_142_8815"
                                    x1="173.487"
                                    y1="-20.917"
                                    x2="248.672"
                                    y2="254.054"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid-mobile_svg__paint5_linear_142_8815"
                                    x1="176.545"
                                    y1="-21.753"
                                    x2="251.728"
                                    y2="253.211"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid-mobile_svg__paint6_linear_142_8815"
                                    x1="179.597"
                                    y1="-22.588"
                                    x2="254.78"
                                    y2="252.377"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid-mobile_svg__paint7_linear_142_8815"
                                    x1="182.654"
                                    y1="-23.424"
                                    x2="257.837"
                                    y2="251.541"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid-mobile_svg__paint8_linear_142_8815"
                                    x1="185.703"
                                    y1="-24.257"
                                    x2="260.886"
                                    y2="250.707"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid-mobile_svg__paint9_linear_142_8815"
                                    x1="188.761"
                                    y1="-25.093"
                                    x2="263.945"
                                    y2="249.878"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid-mobile_svg__paint10_linear_142_8815"
                                    x1="191.814"
                                    y1="-25.928"
                                    x2="266.998"
                                    y2="249.043"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid-mobile_svg__paint11_linear_142_8815"
                                    x1="194.859"
                                    y1="-26.761"
                                    x2="270.044"
                                    y2="248.21"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid-mobile_svg__paint12_linear_142_8815"
                                    x1="197.911"
                                    y1="-27.595"
                                    x2="273.094"
                                    y2="247.369"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid-mobile_svg__paint13_linear_142_8815"
                                    x1="200.958"
                                    y1="-28.428"
                                    x2="276.141"
                                    y2="246.536"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient
                                    id="bottom-grid-mobile_svg__paint14_linear_142_8815"
                                    x1="203.6"
                                    y1="-29.15"
                                    x2="278.783"
                                    y2="245.814"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9D99D8" stopOpacity={0} />
                                    <stop offset="0.474" stopColor="#9D99D8" />
                                    <stop offset={1} stopColor="#9D99D8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </section>

    )
}
