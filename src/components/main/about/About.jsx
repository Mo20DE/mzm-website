
import React from "react";
import CardCarousel from "./CardCarousel";
import Card from "./Card";
import { motion } from "framer-motion";

function About() {

    const size = 'w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]';

    return (
        <motion.div 
            id='about' 
            className='
            w-5/6 h-auto
            mt-5 lg:mt-20 mb-5 scroll-mt-28'
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true, amount: 0.4}}
            transition={{duration: 0.8, ease: "easeOut"}}
        >
            <h1 className='
                relative text-4xl lg:text-5xl 
                font-bold text-left mb-2 
                after:mt-5 after:block 
                after:content-[""] 
                after:w-full after:h-1 
                after:bg-gradient-to-r 
                after:from-black 
                after:dark:from-white
                after:to-transparent'
            >
                About
            </h1>

            {/* <div className="m-56 lg:m-72"> */}
            <CardCarousel attributes="p-24">
                <Card 
                    size={size}
                    card_color='bg-gray-600' 
                    title='Who I Am 🙋🏻‍♂️' 
                    content="I'm Mohammed, a Masters's CS student living in Germany looking constantly for new challenges in my personal and professional life." 
                />
                <Card 
                    size={size}
                    card_color='bg-[#404956]' 
                    title='What am I like 💭' 
                    content="I'm an easygoing, sociable and reliable person and a team player who can also work effectively on his own. I'm always eager and motivated to learn new things." 
                />
                <Card
                    size={size}
                    card_color='bg-[#3d4552]'
                    title='Hobbies 🌍'
                    content='I enjoy traveling, going on a hike, playing football and video games and most importantly, spending time with my family.'
                />
                <Card
                    size={size}
                    card_color='bg-[#363d49]'
                    title='Experience 👨🏻‍💻'
                    content="Currently I work as a CS tutor, but I'm passionate about software engineering and completed a few projects in my free time, such like this website."
                />
                <Card
                    size={size}
                    card_color='bg-[#2b313b]'
                    title='Funfact 💡'
                    content="I'm a proud muslim and a cat lover. 😺"
                />
            </CardCarousel>
        </motion.div>
    )
}

export default About;
