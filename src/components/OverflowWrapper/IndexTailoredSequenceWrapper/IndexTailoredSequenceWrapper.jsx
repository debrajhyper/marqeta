import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import './indexTailoredSequenceWrapper-style.css';
import { IndexTailoredVideo } from './data';
import { GlobeAnimateSVG } from './GlobeAnimateSVG';

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export function IndexTailoredSequenceWrapper() {
    const videoSequenceWrapper = useRef(null);
    const videoRefs = useRef([]);

    // GSAP animations
    useGSAP(() => {
        const videos = videoRefs.current;
        let totalDuration = 0;
        
        // Get the total duration of all videos
        videos.forEach((video) => {
            const videoDuration = video.duration || 1;
            totalDuration += videoDuration;
            console.log(video.duration, videoDuration, totalDuration)
        });

        // GSAP ScrollTrigger setup
        const scrollDuration = 3500; // Adjust the scroll duration as needed
        const sectionDuration = scrollDuration / totalDuration;

        videos.forEach((video, index) => {
            const videoDuration = video.duration || 1;
            const startOffset = index === 0 ? 0 : sectionDuration * videoDuration * index;

            // Ensure video is paused initially and opacity is set
            video.pause();
            video.style.opacity = 0;
            video.style.visibility = 'hidden';

            // GSAP timeline for each video
            gsap.timeline({
                defaults: { duration: sectionDuration * videoDuration },
                scrollTrigger: {
                    trigger: videoSequenceWrapper.current,
                    start: `top+=${startOffset} top`,
                    end: `top+=${startOffset + (sectionDuration * videoDuration)}`,
                    scrub: true,
                    onEnter: () => {
                        video.style.opacity = 1;
                        video.style.visibility = 'visible';
                    },
                    onLeave: () => {
                        video.style.opacity = 0;
                        video.style.visibility = 'hidden';
                    },
                    onEnterBack: () => {
                        video.style.opacity = 1;
                        video.style.visibility = 'visible';
                    },
                    onLeaveBack: () => {
                        video.style.opacity = 0;
                        video.style.visibility = 'hidden';
                    }
                },
            })
                .fromTo(
                    video,
                    {
                        currentTime: 0,
                        opacity: index === 0 ? 0.12 : 1,
                        visibility: 'hidden'
                    },
                    {
                        currentTime: video.duration || 1,
                        opacity: 1,
                        visibility: 'visible'
                    },
                    0
                ).to(
                    video,
                    {
                        // opacity: 0,
                        // visibility: 'hidden'
                    },
                    video.duration || 1
                );
        });
    }, [videoRefs]);

    return (
        <div ref={videoSequenceWrapper} className="IndexTailored-sequenceWrapper">
            <div className="IndexTailored-sequenceWrapper-inner">
                <section className="IndexTailoredGreenSvg isShow" data-view="IndexTailoredGreenSvg">
                    <GlobeAnimateSVG />
                </section>
                {
                    IndexTailoredVideo.map((item, index) => {
                        const { id, src } = item;
                        return (
                            <video
                                ref={el => videoRefs.current[index] = el}
                                key={index}
                                muted
                                playsInline
                                crossOrigin=""
                                preload="auto"
                                className={`IndexTailored-video_${id}`}
                                src={src}
                                style={{ opacity: 0 }}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}