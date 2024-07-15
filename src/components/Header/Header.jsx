import './header-style.css';
import logo from '@assets/img/logo.svg';
import navIcon from '@assets/img/Icon.svg';

export function Header() {
    return (
        <header className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorSecondary MuiAppBar-positionFixed hidden mui-fixed css-odncw5-MuiPaper-root-MuiAppBar-root-Header-root" role="banner" aria-label="Main navigation">
            <div className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular css-1bakope-MuiToolbar-root-Header-contentContainer">
                <div className="MuiContainer-root MuiContainer-maxWidthXl css-1b8fvet-MuiContainer-root">
                    <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-zu6o5r-MuiTypography-root-MuiLink-root-Header-logoRoot" href="/">
                        <img src={logo} className="css-1cjeo6m-ArtDirectedImage-root-Media-root-Media-lRMediaComp-Header-logo" loading="eager" height="15" alt="logo.svg" id="logo.svg" sizes="100vw" />
                        <img src={logo} className="css-ppy4zz-ArtDirectedImage-root-Media-root-Media-lRMediaComp-Header-logo" loading="eager" height="15" alt="logo.svg" id="logo.svg" sizes="100vw" />
                        <img src={logo} className="css-54by96-ArtDirectedImage-root-Media-root-Media-lRMediaComp-Header-logo" loading="eager" height="15" alt="logo.svg" id="logo.svg" sizes="100vw" />
                    </a>
                    <nav className="css-9ne1oq-Header-navigationBar" role="menubar" aria-orientation="horizontal">
                        <div className="css-1ah1pet-NavigationItem-root">
                            <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1dfvxdb-Link-root-MuiTypography-root-MuiLink-root-Link-root">Platform</a>
                        </div>
                        <div className="css-1ah1pet-NavigationItem-root">
                            <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1dfvxdb-Link-root-MuiTypography-root-MuiLink-root-Link-root">Solutions</a>
                        </div>
                        <div className="css-1ah1pet-NavigationItem-root">
                            <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1dfvxdb-Link-root-MuiTypography-root-MuiLink-root-Link-root">Developers</a>
                        </div>
                        <div className="css-1ah1pet-NavigationItem-root">
                            <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1dfvxdb-Link-root-MuiTypography-root-MuiLink-root-Link-root">Resources</a>
                        </div>
                        <div className="css-1ah1pet-NavigationItem-root">
                            <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1dfvxdb-Link-root-MuiTypography-root-MuiLink-root-Link-root">Company</a>
                        </div>
                    </nav>
                    <div className="Header-actionsContainer">
                        <a className="MuiTypography-root MuiTypography-link MuiLink-root MuiLink-underlineAlways  css-ib1rxp-MuiTypography-root-MuiLink-root-Link-root" href="https://app.marqeta.com" target="_self" rel="noopener noreferrer">Sign in</a>
                        <a className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-disableElevation MuiButtonBase-root  css-1gbd66w-MuiButtonBase-root-MuiButton-root-Link-root" target="_self" href="/contact-us">Contact us</a>
                    </div>
                    <div className="PrivateHiddenCss-root PrivateHiddenCss-mdUp css-1ihfkal-PrivateHiddenCss-root">
                        <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-edgeEnd MuiIconButton-sizeLarge css-fq3spx-MuiButtonBase-root-MuiIconButton-root-Header-mobileMenuIconRoot" type="button">
                            <img src={navIcon} className="css-6b1sh-ArtDirectedImage-root-Media-root-Media-lRMediaComp-Header-mobileMenuIcon" loading="lazy" height="14" alt="Icon" sizes="100vw" />
                            <img src={navIcon} className="css-51qac9-ArtDirectedImage-root-Media-root-Media-lRMediaComp-Header-mobileMenuIcon" loading="lazy" height="14" alt="Icon" sizes="100vw" />
                            <img src={navIcon} className="css-l700mp-ArtDirectedImage-root-Media-root-Media-lRMediaComp-Header-mobileMenuIcon" loading="lazy" height="14" alt="Icon" sizes="100vw" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}