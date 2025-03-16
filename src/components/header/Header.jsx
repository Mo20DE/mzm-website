
import React, { useState, useEffect, useContext } from 'react';
import ThemeToggleButton from "../theme/ThemeToggleButton";
import { ThemeContext } from '../theme/ThemeProvider';

import logo_lightmode from "../../assets/header/logo_lightmode.png";
import logo_darkmode from "../../assets/header/logo_darkmode.png";

import {Menu, X} from 'lucide-react';
import Socials from '../general/Socials'

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        
        window.addEventListener('resize', checkLGBreakpoint);
        document.addEventListener('click', clickedBelowNavBar);

        if (isOpen) {
            setShouldRender(true);
        } 
        else {
            setTimeout(() => {
                setShouldRender(false);
            }, 300);
        }
        return () => {
            window.removeEventListener('resize', checkLGBreakpoint);
            document.removeEventListener('click', clickedBelowNavBar);
        }
    }, [isOpen])

    const checkLGBreakpoint = () => {
        if(window.innerWidth >= 1024 && isOpen) {
            setIsOpen(!isOpen);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({top: 0});
    } 

    const clickedBelowNavBar = (event) => {
        const navBar = document.getElementById('navBar');
        if (navBar) {
            const bottomY = navBar.getBoundingClientRect().bottom;
            const posY = event.clientY;
            if (posY > bottomY) setIsOpen(false);
        }
    }

    return (
        <header className={`fixed top-0 left-0 w-full z-10 shadow-xl text-black dark:text-white`}>

            <div className={`
                flex items-center py-4 
                backdrop-blur-lg bg-gradient-to-r 
                from-gray-300/60 via-gray-300/60 
                to-gray-400/60 dark:bg-gradient-to-r 
                dark:from-gray-700/60 dark:via-gray-700/60 
                dark:to-gray-800/60
            `}>

                <a className='ml-[8.3%]' href='#home' aria-label='Home' onClick={() => {setIsOpen(false); scrollToTop();}}>
                    <img className='select-none' draggable='false' src={theme === 'dark' ? logo_darkmode : logo_lightmode} width='60' alt='Website Logo'/>
                </a>
                <nav className='ml-auto'>
                    <ul className='hidden text-2xl lg:flex md:gap-10 lg:gap-12 xl:gap-20 lg:mr-20 xl:mr-28'>
                        <li className="flex" onClick={scrollToTop}><a href='#home' className='hover:scale-110 transition-all duration-300 transform will-change-transform'>Home</a></li>
                        <li className="flex"><a href='#about' className='hover:scale-110 transition-all duration-300 transform will-change-transform'>About</a></li>
                        <li className="flex"><a href='#skills' className='hover:scale-110 transition-all duration-300 transform will-change-transform'>Skills</a></li>
                        <li className="flex"><a href='#projects' className='hover:scale-110 transition-all duration-300 transform will-change-transform'>Projects</a></li>
                        <li className="flex"><a href='#contact' className='hover:scale-110 transition-all duration-300 transform will-change-transform'>Contact</a></li>
                    </ul>
                </nav>
                <div >
                    <ThemeToggleButton />
                </div>

                <button className='lg:hidden mr-4 mb-0 p-0 flex items-center justify-center w-14 h-14 bg-transparent' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? 
                    <X size={55} className={` hover:text-gray-600 dark:hover:text-gray-300 duration-300`}/>
                    : 
                    <Menu size={55} className={` hover:text-gray-600 dark:hover:text-gray-300 duration-300`}/>}
                </button>
                
            </div>

            {/* <div className='lg:hidden mx-auto flex items-center justify-center'>
                {isOpen && <div className='h-0.5 w-full bg-slate-500'></div>}
            </div> */}

            {shouldRender && (
               <nav id='navBar' className={`
                    lg:hidden text-center flex flex-col 
                    items-center text-2xl absolute w-full 
                    backdrop-blur-xl bg-gradient-to-r 
                    from-gray-300/60 via-gray-300/60 
                    to-gray-400/60 dark:from-gray-700/60 
                    dark:via-gray-700/60 dark:to-gray-800/60 
                    ${isOpen ? 'animate-slideDown' : 'animate-slideUp'}
                `}>
                    <div className='mt-4 w-3/5 h-0.5 bg-slate-500'/>
                    <ul className='flex flex-col items-center p-10 gap-5'>
                        <li className='flex' onClick={() => {setIsOpen(!isOpen); scrollToTop();}}><a href='#home' className='hover:scale-110 transition-all duration-300 will-change-transform'>Home</a></li>
                        <li className='flex' onClick={() => setIsOpen(!isOpen)}><a href='#about' className='hover:scale-110 transition-all duration-300 will-change-transform'>About</a></li>
                        <li className='flex' onClick={() => setIsOpen(!isOpen)}><a href='#skills' className='hover:scale-110 transition-all duration-300 will-change-transform'>Skills</a></li>
                        <li className='flex' onClick={() => setIsOpen(!isOpen)}><a href='#projects' className='hover:scale-110 transition-all duration-300 will-change-transform'>Projects</a></li>
                        <li className='flex' onClick={() => setIsOpen(!isOpen)}><a href='#contact' className='hover:scale-110 transition-all duration-300 will-change-transform'>Contact</a></li>
                        <li className='flex mt-4' onClick={() => setIsOpen(!isOpen)}><Socials size={40} /></li>
                    </ul>
               </nav> 
            )}
        </header>
    )
}

export default Header
