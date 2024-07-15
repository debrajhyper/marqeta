import { FooterNavigation } from './data';

export function NavigationMobile() {
    return (
        <>
            {
                FooterNavigation.map((item, index) => {
                    const { itemName, navigationItems } = item;
                    return (
                        <div key={index} className="MuiBox-root css-0">
                            <div className="MuiBox-root css-1ah1pet-NavigationItem-root">
                                <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiAccordion-root MuiAccordion-rounded MuiAccordion-gutters css-1grsp6w-MuiPaper-root-MuiAccordion-root-NavigationItem-accordion">
                                    <div className="MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root">
                                        <div className="MuiAccordionSummary-content MuiAccordionSummary-contentGutters css-o4b71y-MuiAccordionSummary-content">
                                            {itemName}
                                        </div>
                                        <div className="MuiAccordionSummary-expandIconWrapper css-yw020d-MuiAccordionSummary-expandIconWrapper">
                                            <ArrowSVG />
                                        </div>
                                    </div>
                                    <div className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-bz4dnt-MuiCollapse-root" style={{ minHeight: 0 }}>
                                        <div className="MuiCollapse-wrapper MuiCollapse-vertical css-smkl36-MuiCollapse-wrapper">
                                            <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-9l5vo-MuiCollapse-wrapperInner">
                                                <div role="region" className="MuiAccordion-region">
                                                    <div className="MuiAccordionDetails-root css-euajlg-MuiAccordionDetails-root">
                                                        {
                                                            navigationItems.map((item, index) => {
                                                                const { link, text, itemName, navigationItems } = item;
                                                                return itemName === 'Legal'
                                                                    ? <div key={index} className="MuiBox-root css-0">
                                                                        <div className="MuiBox-root css-1ah1pet-NavigationItem-root">
                                                                            <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiAccordion-root MuiAccordion-rounded MuiAccordion-gutters css-1grsp6w-MuiPaper-root-MuiAccordion-root-NavigationItem-accordion">
                                                                                <div className="MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root" role="button">
                                                                                    <div className="MuiAccordionSummary-content MuiAccordionSummary-contentGutters css-o4b71y-MuiAccordionSummary-content">
                                                                                        {itemName}
                                                                                    </div>
                                                                                    <div className="MuiAccordionSummary-expandIconWrapper css-yw020d-MuiAccordionSummary-expandIconWrapper">
                                                                                        <ArrowSVG />
                                                                                    </div>
                                                                                </div>
                                                                                <div className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-bz4dnt-MuiCollapse-root" style={{ minHeight: 0 }}>
                                                                                    <div className="MuiCollapse-wrapper MuiCollapse-vertical css-smkl36-MuiCollapse-wrapper">
                                                                                        <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-9l5vo-MuiCollapse-wrapperInner">
                                                                                            <div role="region" className="MuiAccordion-region">
                                                                                                <div className="MuiAccordionDetails-root css-euajlg-MuiAccordionDetails-root">
                                                                                                    {
                                                                                                        navigationItems.map((item, index) => {
                                                                                                            const { link, text } = item;
                                                                                                            return (<div key={index} className="MuiBox-root css-1n9fz2l-NavigationItemLink-item">
                                                                                                                <div className="MuiBox-root css-e8c0nt-NavigationItemLink-linkWrapper">
                                                                                                                    <a
                                                                                                                        className="MuiTypography-root MuiTypography-regularFont MuiLink-root MuiLink-underlineAlways  css-1dfvxdb-Link-root-MuiTypography-root-MuiLink-root-Link-root"
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
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    : <div key={index} className="MuiBox-root css-1n9fz2l-NavigationItemLink-item">
                                                                        <div className="MuiBox-root css-e8c0nt-NavigationItemLink-linkWrapper">
                                                                            <a
                                                                                className="MuiTypography-root MuiTypography-regularFont MuiLink-root MuiLink-underlineAlways  css-1dfvxdb-Link-root-MuiTypography-root-MuiLink-root-Link-root"
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

const ArrowSVG = () => {
    return (
        <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1pg8mhl-MuiSvgIcon-root"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ExpandMoreIcon"
        >
            <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </svg>
    )
}