
import React from "react";

function Card({size, card_color, title, content}) {
    return (
        <div className={`
            flex flex-col 
            rounded-[5%] 
            items-center 
            text-white
            ${size}
            ${card_color} 
            border-gray-500 
            border-[0.8px]
            shadow-[5px_5px_10px_rgba(0,0,0,0.6)]
        `}>
            <p className="pb-6 p-8 text-2xl lg:text-4xl font-bold">{title}</p>
            <hr className="border-t border-white w-3/4"/>
            <p className='w-3/4 pt-6 lg:pt-10 text-lg md:text-2xl lg:text-2xl xl:text-3xl text-justify hyphens-auto'>{content}</p>
        </div>
    )
}

export default Card;
