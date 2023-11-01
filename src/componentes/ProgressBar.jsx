import gsap from 'gsap';
import ScrollTrigger from 'gsap/all';
import { useEffect } from 'react';

function ProgressBar() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('progress', {
            value: 100,
            ScrollTrigger: {
                scrub: 0.5,
            },
        });
    }, []);

    return (
        <progress max={100} value={0}></progress>
    )
}

export default ProgressBar