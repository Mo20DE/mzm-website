
import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa6";

const GoUpButton = () => {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY >= 700) {
                setShowBtn(true);
            }
            else {
                setShowBtn(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
        
    }, [])

    return (
        <div className={`fixed right-6 bottom-10 z-10 transition-transform duration-300 ease-in-out ${showBtn ? 'translate-y-0' : 'translate-y-24'}`}>
            <button className="
                w-12 h-14 flex items-center justify-center 
                rounded-lg border-[1px] border-gray-500 
                bg-black dark:bg-white duration-200 
                transition-all hover:bg-gray-700 dark:hover:bg-gray-200" 
                onClick={() => window.scrollTo({top: 0})}
            >
                {/* <FaAngleUp className="text-white dark:text-black text-4xl"/> */}
                <div className="w-20 h-20 flex items-center justify-center">
                    <FaAngleUp size={30} className="text-white dark:text-black" />
                </div>
            </button>
        </div>
    )
};

export default GoUpButton;
