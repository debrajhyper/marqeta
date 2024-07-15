import { FooterNavigation } from './data';

export function NavigationDesktop() {
    return (
        <>
            {
                FooterNavigation.map((item, index) => {
                    const { itemName, navigationItems } = item;
                    return (
                        <div key={index} className="MuiBox-root css-0">
                            <div className="MuiBox-root css-1ah1pet-NavigationItem-root">
                                <p className="MuiTypography-root MuiTypography-body1 css-18owzqw-MuiTypography-root-NavigationItem-footerLink" href="#">
                                    {itemName}
                                </p>
                                <div className="MuiBox-root css-v97jb6-NavigationItem-footerNavigationItems">
                                    {
                                        navigationItems.map((item, index) => {
                                            const { link, text, itemName, navigationItems } = item;
                                            return itemName === 'Legal'
                                                ? <div key={index} className="MuiBox-root css-0">
                                                    <div className="MuiBox-root css-1ah1pet-NavigationItem-root">
                                                        <p className="MuiTypography-root MuiTypography-body1 css-18owzqw-MuiTypography-root-NavigationItem-footerLink" href="#">
                                                            {itemName}
                                                        </p>
                                                        <div className="MuiBox-root css-v97jb6-NavigationItem-footerNavigationItems">
                                                            {
                                                                navigationItems.map((item, index) => {
                                                                    const { link, text } = item;
                                                                    return (<div key={index} className="MuiBox-root css-1n9fz2l-NavigationItemLink-item">
                                                                        <div className="MuiBox-root css-e8c0nt-NavigationItemLink-linkWrapper">
                                                                            <a className="MuiTypography-root MuiTypography-regularFont MuiLink-root MuiLink-underlineAlways  css-1dfvxdb-Link-root-MuiTypography-root-MuiLink-root-Link-root"
                                                                                target="_self"
                                                                                href={link}
                                                                            >
                                                                                {text}
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                : <div key={index} className="MuiBox-root css-1n9fz2l-NavigationItemLink-item">
                                                    <div className="MuiBox-root css-e8c0nt-NavigationItemLink-linkWrapper">
                                                        <a className="MuiTypography-root MuiTypography-regularFont MuiLink-root MuiLink-underlineAlways  css-1dfvxdb-Link-root-MuiTypography-root-MuiLink-root-Link-root"
                                                            target="_self"
                                                            href={link}
                                                        >
                                                            {text}
                                                        </a>
                                                    </div>
                                                </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}