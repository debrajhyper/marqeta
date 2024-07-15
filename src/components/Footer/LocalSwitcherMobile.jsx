import enUS from '@assets/locales/en-US.svg';

export function LocalSwitcherMobile() {
    return (
        <div className="MuiBox-root css-db29d4">
            <p
                className="MuiTypography-root MuiTypography-body1 css-18owzqw-MuiTypography-root-NavigationItem-footerLink"
                id="locale-switcher"
                href="#"
                data-csk-entry-id="locale-switcher"
                data-csk-entry-type="NavigationItem"
                data-csk-entry-display-text="NavigationItem"
            />
            <div className="MuiBox-root css-1yuhvjn">
                <div className="MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth  css-1gxl2i-MuiInputBase-root-NavigationItem-footerLocaleInput">
                    <div
                        tabIndex={0}
                        role="button"
                        aria-expanded="false"
                        aria-haspopup="listbox"
                        aria-labelledby="mui-component-select-locale"
                        id="mui-component-select-locale"
                        className="MuiSelect-select MuiSelect-outlined MuiInputBase-input css-a2sf8p-MuiSelect-select-MuiInputBase-input"
                    >
                        <img
                            src={enUS}
                            data-testid="Media"
                            className="css-4wa5m2-Media-root-Media-lRMediaComp"
                            loading="lazy"
                            sizes="100vw"
                        />
                        <p className="MuiTypography-root MuiTypography-body1 css-14o3lxf-MuiTypography-root">
                            USA
                        </p>
                    </div>
                    <input
                        name="locale"
                        aria-hidden="true"
                        tabIndex={-1}
                        className="MuiSelect-nativeInput css-yf8vq0-MuiSelect-nativeInput"
                        id="uncontrolled-native"
                        defaultValue="/"
                    />
                    <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-hfutr2-MuiSvgIcon-root-MuiSelect-icon"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="ExpandMoreIcon"
                    >
                        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
