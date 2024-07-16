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

        // Set initial state on mount
        updateMedia();

        // Add event listener for window resize
        window.addEventListener("resize", updateMedia);

        // Clean up event listener on unmount
        return () => window.removeEventListener("resize", updateMedia);
    }, []); // Empty dependency array ensures this effect runs only once

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