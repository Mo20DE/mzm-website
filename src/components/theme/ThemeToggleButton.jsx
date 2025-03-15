
import { useTheme } from './ThemeProvider';
import {Moon, Sun} from 'lucide-react';

import { motion } from 'framer-motion';

const ThemeToggleButton = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button className={`w-18 h-9 lg:w-20 lg:h-10 mr-8 lg:mr-14 flex items-center justify-center rounded-full border-gray-500 bg-yellow-400  dark:bg-blue-950`} onClick={toggleTheme}>
            <motion.div
                initial={{x: theme === 'dark' ? -19 : 19}}
                animate={{scale: 1, x: theme === 'dark' ? -19 : 19}}
                whileHover={{scale: 1.05}}
                transition={{duration: 0.3}}
                className=''
            >
                <div className={`w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-full bg-white`}>
                    {theme === 'dark' ? <Moon size={18} color='black'/> : <Sun size={18} color='black'/>}
                </div>
            </motion.div>
        </button>
    )
}

export default ThemeToggleButton;
