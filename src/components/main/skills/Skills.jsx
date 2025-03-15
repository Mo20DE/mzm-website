
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava, FaNodeJs, FaGitAlt, FaVuejs, FaBootstrap, FaPhp } from "react-icons/fa";
import { SiTypescript, SiHaskell, SiTailwindcss, SiMongodb, SiPostgresql, SiGnubash } from "react-icons/si";
import { TbBrandCpp, TbBrandThreejs } from "react-icons/tb";

const Skills = () => {
    
    return (
        <motion.div 
            id='skills' 
            className='
            w-5/6 h-auto
            lg:mt-10 mb-24 scroll-mt-28'
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.8, ease: "easeOut"}}
            viewport={{once: true, amount: 0.25}}
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
                Skills
            </h1>
            <div className="flex flex-wrap items-stretch justify-center mt-20 xl:mt-24 lg:ml-24 lg:mr-24 xl:ml-40 xl:mr-40 gap-3 ">

                <SkillCard logo={<FaReact />} skill={"React"}/>
                <SkillCard logo={<FaHtml5 />} skill={"HTML"}/>
                <SkillCard logo={<FaCss3Alt />} skill={"CSS"}/>
                <SkillCard logo={<SiTailwindcss />} skill={"Tailwind"}/>
                <SkillCard logo={<FaBootstrap />} skill={"Bootstrap"}/>
                <SkillCard logo={<FaJs />} skill={"JavaScript"}/>
                <SkillCard logo={<SiTypescript />} skill={"TypeScript"}/>
                <SkillCard logo={<FaVuejs />} skill={"VueJS"}/>
                <SkillCard logo={<FaNodeJs />} skill={"NodeJS"}/>
                <SkillCard logo={<TbBrandThreejs />} skill={"ThreeJS"}/>
                <SkillCard logo={<FaPython />} skill={"Python"}/>
                <SkillCard logo={<FaJava />} skill={"Java"}/>
                <SkillCard logo={<FaPhp />} skill={"PHP"}/>
                <SkillCard logo={<TbBrandCpp />} skill={"C++"}/>
                <SkillCard logo={<SiHaskell />} skill={"Haskell"}/>
                <SkillCard logo={<SiMongodb />} skill={"MongoDB"}/>
                <SkillCard logo={<SiPostgresql />} skill={"PostgreSQL"}/>
                <SkillCard logo={<SiGnubash />} skill={"Bash"}/>
                <SkillCard logo={<FaGitAlt />} skill={"Git"}/>

            </div>
        </motion.div>
    )
};

export default Skills;
