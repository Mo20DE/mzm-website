
const SkillCard = ({ logo, skill }) => {

    return (
        <div className="
            w-[100px] md:w-[125px] lg:w-[150px]
            flex flex-col items-center p-6
            bg-gray-500/30 backdrop-blur-xl rounded-lg
            shadow-[0px_1px_5px_rgba(0,0,0,0.4)]
            hover:scale-105 duration-150 transition-transform
        ">
            <div className="text-4xl lg:text-5xl select-none">
                {logo}
            </div>
            <p className="mt-5 text-sm md:text-md lg:text-xl font-bold select-none">
                {skill}
            </p>
        </div>
    )
};

export default SkillCard;
