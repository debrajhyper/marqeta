import fundingShow from '@assets/marqeta-videos/img/features/funding/show.mp4';
import fundingHover from '@assets/marqeta-videos/img/features/funding/hover.mp4';
import fundingUnHover from '@assets/marqeta-videos/img/features/funding/unhover.mp4';
import fundingOverlayImg from '@assets/marqeta-videos/img/features/funding/overlay.png';

import controlsShow from '@assets/marqeta-videos/img/features/controls/show.mp4';
import controlsHover from '@assets/marqeta-videos/img/features/controls/hover.mp4';
import controlsUnHover from '@assets/marqeta-videos/img/features/controls/unhover.mp4';
import controlsOverlayImg from '@assets/marqeta-videos/img/features/controls/overlay.png';
import widgetsShow from '@assets/marqeta-videos/img/features/widgets/show.mp4';
import widgetsHover from '@assets/marqeta-videos/img/features/widgets/hover.mp4';
import widgetsUnHover from '@assets/marqeta-videos/img/features/widgets/unhover.mp4';
import widgetsOverlayImg from '@assets/marqeta-videos/img/features/widgets/overlay.png';
import cardsShow from '@assets/marqeta-videos/img/features/cards/show.mp4';
import cardsHover from '@assets/marqeta-videos/img/features/cards/hover.mp4';
import cardsUnHover from '@assets/marqeta-videos/img/features/cards/unhover.mp4';
import cardsOverlayImg from '@assets/marqeta-videos/img/features/cards/overlay.png';

export const IndexFeaturesSequence = [
    {
        dataTp: 'funding',
        dataView: 'IndexFeatures-Funding',
        videoShow: [
            {
                type: 'show',
                videoSrc: fundingShow,
                dataTimeOut: 347,
                opacity: 0,
                
            },
            {
                type: 'hover',
                videoSrc: fundingHover,
                dataTimeOut: 865,
                opacity: 1,
            },
            {
                type: 'unhover',
                videoSrc: fundingUnHover,
                dataTimeOut: 875,
                opacity: 0,
            }
        ],
        imgSrc: fundingOverlayImg,
        link: 'jit-funding',
        title: 'JIT Funding',
    },
    {
        dataTp: 'controls',
        dataView: 'IndexFeatures-Controls',
        videoShow: [
            {
                type: 'show',
                videoSrc: controlsShow,
                dataTimeOut: 357,
                opacity: 0,
            },
            {
                type: 'hover',
                videoSrc: controlsHover,
                dataTimeOut: 587,
                opacity: 1,
            },
            {
                type: 'unhover',
                videoSrc: controlsUnHover,
                dataTimeOut: 593,
                opacity: 0,
            }
        ],
        imgSrc: controlsOverlayImg,
        link: 'dynamic-spend-controls',
        title: 'Dynamic spend controls',
    },
    {
        dataTp: 'widgets',
        dataView: 'IndexFeatures-Widgets',
        videoShow: [
            {
                type: 'show',
                videoSrc: widgetsShow,
                dataTimeOut: 351,
                opacity: 0,
            },
            {
                type: 'hover',
                videoSrc: widgetsHover,
                dataTimeOut: 857,
                opacity: 1,
            },
            {
                type: 'unhover',
                videoSrc: widgetsUnHover,
                dataTimeOut: 864,
                opacity: 0,
            }
        ],
        imgSrc: widgetsOverlayImg,
        link: 'pci-compliant-widgets',
        title: 'PCI widgets',
    },
    {
        dataTp: 'cards',
        dataView: 'IndexFeatures-Cards',
        videoShow: [
            {
                type: 'show',
                videoSrc: cardsShow,
                dataTimeOut: 348,
                opacity: 0,
            },
            {
                type: 'hover',
                videoSrc: cardsHover,
                dataTimeOut: 617,
                opacity: 1,
            },
            {
                type: 'unhover',
                videoSrc: cardsUnHover,
                dataTimeOut: 975,
                opacity: 0,
            }
        ],
        imgSrc: cardsOverlayImg,
        link: 'virtual-cards',
        title: 'Issue virtual cards',
    },
];