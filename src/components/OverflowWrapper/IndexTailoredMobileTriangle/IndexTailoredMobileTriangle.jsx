import './indexTailoredMobileTriangle-style.css';
import symbolSVG from '@assets/svg/symbol/svg/sprite.symbol.svg';

export function IndexTailoredMobileTriangle() {
    return (
        <div className="IndexTailored-mobileTriangle">
            <svg className="svg svg--mobile-purple-triangle ">
                <use xlinkHref={`${symbolSVG}#mobile-purple-triangle`} />
            </svg>
        </div>
    )
}