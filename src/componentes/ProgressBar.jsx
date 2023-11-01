import gsap from 'gsap';
import ScrollTrigger from 'gsap/all';
import { useEffect } from 'react';

function ProgressBar() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('progress', {
            value: 100,
            scrollTrigger: {
                trigger: 'progress',
                scrub: true,
            }
        });
    }, []);

    return (
        <progress max={100} value={0}></progress>
    )
}

export default ProgressBar