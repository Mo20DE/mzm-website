
import { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";

const Label = ({ label, url='' }) => {

    const [useLink, setUseLink] = useState(false)

    useEffect(() => {
        if (url.length > 0) setUseLink(true);
    }, []);

    return (
        <a 
            href={url}
            target='_blank'
            className={`
                p-[6px] pl-[12px] pr-[12px] 
                bg-gray-700  dark:bg-[#cbe9fc] 
                rounded-md text-white dark:text-black 
                ${!useLink ? 'pointer-events-none' : 'pt-3 pb-3 hover:bg-gray-600 dark:hover:bg-[#bce5ff] duration-300'} 
                select-none
                `
            }>
            <span className={`inline-flex items-center gap-2 ${useLink ? 'text-xl' : ''}`}>{label} {useLink && <FiExternalLink />}</span>
        </a>
    )
} ;

export default Label;
