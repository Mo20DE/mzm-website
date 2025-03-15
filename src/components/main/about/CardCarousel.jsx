
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const CardCarousel = ({ children, attributes }) =>  {

    const childs = React.Children.toArray(children);
    const [currentCard, setCurrentCard] = useState(0);
    const [cardIsGone, setCardIsGone] = useState(false);
    const [screenThreshold, setScreenThreshold] = useState(window.innerWidth * 0.35);
    const [secondCardOffset, setsecondsCardOffset] = useState(0);

    const divRef = useRef(null);
    const [divXCenter, setDivXCenter] = useState(0);
    const controls = useAnimationControls();

    useEffect(() => {
        
        const computeOffset = () => {
            const screen_width = window.innerWidth;
            if (screen_width <= 640) setsecondsCardOffset(28);
            else if (screen_width <= 768) setsecondsCardOffset(40);
            else if (screen_width <= 1024) setsecondsCardOffset(50);
            else if (screen_width <= 1280) setsecondsCardOffset(55);
            else setsecondsCardOffset(60);
        }

        computeOffset();
        window.addEventListener('resize', computeOffset);
        
        return () => window.removeEventListener('resize', computeOffset);
    }, []);

    const handleDrag = (event, info) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        if (!rect) return;
        const new_center = rect.left + rect.width / 2;
        setDivXCenter(new_center);
    }

    const handleDragEnd = (event, info) => {

        const threshold = window.innerWidth * 0.35;
        const rest = window.innerWidth - threshold;
        setScreenThreshold(threshold)
        
        if (Math.abs(divXCenter) < screenThreshold) {
            controls.start({x: -rest, transition: {duration: 0.4}, opacity: 0})
            setCardIsGone(true);
            setTimeout(() => {
                controls.start({x: 0, transition: {duration: 0}, opacity: 1});
                setCurrentCard((currentCard + 1) % childs.length);
                setCardIsGone(false);
            }, 450)
        }
        else {
            controls.start({x: 0, transition: {duration: 0.25}})
        }
    }

    return (
        <div className={`${attributes} relative flex justify-center items-center`}>
            {childs.length > 1 && 
            <motion.div
                initial={{x: 0}}
                animate={{x: cardIsGone ? 0 : secondCardOffset, scale: cardIsGone ? 1.05 : 1}}
                transition={{duration: 0.4}}
                className="select-none flex"
            >
                {childs[(currentCard + 1) % childs.length]}
            </motion.div>}
            <motion.div
                ref={divRef}
                initial={{x: 0, scale: 1.05}}
                animate={controls}
                drag='x'
                dragConstraints={{left: -screenThreshold, right: 0}}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                dragElastic={0.1}
                whileTap={{scale: 1.07, transition: {duration: 0.2}}}
                className="absolute select-none"
            >
                {childs[currentCard]}
            </motion.div>
        </div>
    );
}

export default CardCarousel;
