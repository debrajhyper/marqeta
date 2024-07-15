import './indexPartners-style.css';
import { IndexPartnersCardsWrapper } from './IndexPartnersCardsWrapper/IndexPartnersCardsWrapper';
import { IndexPartnersPartnersWrapper } from './IndexPartnersPartnersWrapper/IndexPartnersPartnersWrapper';
import { PlatformHeroVideoPopup } from './PlatformHeroVideoPopup/PlatformHeroVideoPopup';

export function IndexPartners() {
    return (
        <section className="IndexPartners isSectionShown" data-view="IndexPartners">
            <div className="IndexPartners-wrapper">
                <IndexPartnersPartnersWrapper />
                <IndexPartnersCardsWrapper />
            </div>
            <PlatformHeroVideoPopup />
        </section>
    )
}