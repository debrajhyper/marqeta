import './header-style.css';
import { HeaderLogo, HeaderMobileMenuIcon, HeaderNavigationItem } from './data';

export function Header() {
    return (
        <header className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorSecondary MuiAppBar-positionFixed hidden mui-fixed css-odncw5-MuiPaper-root-MuiAppBar-root-Header-root" role="banner" aria-label="Main navigation">
            <div className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-1bakope-MuiToolbar-root-Header-contentContainer">
                <div className="MuiContainer-root MuiContainer-maxWidthXl css-1b8fvet-MuiContainer-root">
                    
                    {/* Logo Link */}
                    <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-zu6o5r-MuiTypography-root-MuiLink-root-Header-logoRoot" href="/">
                        {
                            HeaderLogo.map((item, index) => {
                                const { className, src } = item;
                                return (
                                    <img
                                        key={index}
                                        src={src}
                                        className={`${className}-ArtDirectedImage-root-Media-root-Media-lRMediaComp-Header-logo`}
                                        loading="eager"
                                        height="15"
                                        alt="logo.svg"
                                        sizes="100vw"
                                    />
                                );
                            })
                        }
                    </a>

                    {/* Navigation Bar */}
                    <nav className="css-9ne1oq-Header-navigationBar" role="menubar" aria-orientation="horizontal">
                        {
                            HeaderNavigationItem.map((text, index) => (
                                <div key={index} className="css-1ah1pet-NavigationItem-root">
                                    <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1dfvxdb-Link-root-MuiTypography-root-MuiLink-root-Link-root">
                                        {text}
                                    </a>
                                </div>
                            ))
                        }
                    </nav>

                    {/* Action Buttons */}
                    <div className="Header-actionsContainer">
                        <a className="MuiTypography-root MuiTypography-link MuiLink-root MuiLink-underlineAlways css-ib1rxp-MuiTypography-root-MuiLink-root-Link-root" href="https://app.marqeta.com" target="_self" rel="noopener noreferrer">Sign in</a>
                        <a className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButtonBase-root css-1gbd66w-MuiButtonBase-root-MuiButton-root-Link-root" target="_self" href="/contact-us">Contact us</a>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="PrivateHiddenCss-root PrivateHiddenCss-mdUp css-1ihfkal-PrivateHiddenCss-root">
                        <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-edgeEnd MuiIconButton-sizeLarge css-fq3spx-MuiButtonBase-root-MuiIconButton-root-Header-mobileMenuIconRoot" type="button">
                            {
                                HeaderMobileMenuIcon.map((item, index) => {
                                    const { className, src } = item;
                                    return (
                                        <img
                                            key={index}
                                            src={src}
                                            className={`${className}-ArtDirectedImage-root-Media-root-Media-lRMediaComp-Header-mobileMenuIcon`}
                                            loading="lazy"
                                            height="14"
                                            alt="Icon"
                                            sizes="100vw"
                                        />
                                    );
                                })
                            }
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}