import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx'

function ProgressBar() {

    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('progress', {
            value: 100,
            scrollTrigger: {
                scrub: 0.5,
            }
        });
    }, []);

    return (
        <progress max='100' value='0' className={`progress-bar ${theme === "dark" ? "dark-progress-bar" : ""}`}></progress>
    )
}

export default ProgressBar