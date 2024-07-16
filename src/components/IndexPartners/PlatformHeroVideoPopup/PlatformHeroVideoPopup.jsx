import './platformHeroVideoPopup-style.css';

export function PlatformHeroVideoPopup() {
    return (
        <div className="PlatformHeroVideoPopup" data-view="PlatformHeroVideoPopup">
            <div className="PlatformHeroVideoPopup-contentWrapper">
                <button type="button" className="PlatformHeroVideoPopup-closeBtn" />
                <div className="PlatformHeroVideoPopup-content" />
            </div>
        </div>
    )
}