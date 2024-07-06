
export default function HeroCard() {
    return (
        <div
            className="IndexHeroCard"
            data-assets-folder="/static/img/3d/IndexHeroCard/"
            style={{ zIndex: 998 }}
            data-view="IndexHeroCard"
        >
            <div className="IndexHeroCard-wrapper">
                <div className="IndexHeroCard-fakeTitle" />
                <div className="IndexHeroCard-canvasWrapper isHide" style={{ opacity: 1 }}>
                    <div className="IndexHeroCard-canvas" style={{ visibility: "visible" }}>
                        <canvas
                            width={900}
                            height={572}
                            style={{ width: 720, height: "457.6px" }}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}
