
import portrait1 from "../../../assets/home/portrait1.png";
import portrait2 from "../../../assets/home/portrait2.png";
import { motion } from "framer-motion";


function Avatar() {

    const portrait = Math.random() < 0.5 ? portrait1 : portrait2;

    return (

        <div className='flex flex-row'>
            <motion.div
                className="rounded-full"
                initial={{
                    opacity: 0,
                    y: -40,
                    boxShadow: '0px 0px 30px rgba(120, 150, 255, 0.6)'
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    boxShadow: '0px 0px 40px rgba(120, 150, 255, 1)'
                }}
                transition={{
                    opacity: {duration: 2},
                    y: {duration: 1},
                    boxShadow: {duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'},
                }}
            >
                <img src={portrait} alt='Portrait' className='
                    select-none
                    pointer-events-none
                    max-w-96 max-h-96
                    rounded-full 
                    object-cover 
                    w-56 h-56
                    md:w-80 md:h-80
                    xl:w-96 xl:h-96'
                    draggable='false'
                />
            </motion.div>
        </div>
    )
}

export default Avatar;
