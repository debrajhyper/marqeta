import { useState, useEffect } from 'react';
import './indexFeaturesSequencesWrapper-style.css';
import { AspectMobile } from './AspectMobile';
import { AspectDesktop } from './AspectDesktop';
import { MobileBreakPoint } from '@/constants';

export function IndexFeaturesSequencesWrapper() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > MobileBreakPoint);
    useEffect(() => {
        const updateMedia = () => {
            setDesktop(window.innerWidth > MobileBreakPoint);
        };
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div className="IndexFeatures-sequences-wrapper isSectionShown">
            <div className="IndexFeatures-sequences-wrapper-inner">
                {
                    isDesktop ? <AspectDesktop /> : <AspectMobile />
                }
            </div>
        </div>
    )
}