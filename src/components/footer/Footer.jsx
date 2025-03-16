
import Socials from "../general/Socials";

function Footer() {
    
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`
            absolute flex flex-col items-center justify-center 
            w-full h-auto p-8 gap-y-5 bg-gradient-to-r from-gray-400 
            via-gray-300 to-gray-300 text-black dark:bg-gradient-to-r 
            dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 
            dark:text-white border-t-[0.5px] border-t-gray-600
        `}>
            <div className="">
                <Socials size={35} />
            </div>
            <p>© {currentYear} Mohammed Zain Maqsood</p>
        </footer>
    )
};

export default Footer;