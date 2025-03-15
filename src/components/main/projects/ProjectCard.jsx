
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project_image, caption, labels, link, children, left_to_right = true }) => {

    const img_attr = 'xl:w-1/2 select-none overflow-hidden flex items-center justify-center';
    const content_attr = 'xl:w-1/2 p-10 text-left hyphens-auto text-lg'
    return (
        <div className={`
            bg-gray-600/40
            border-gray-600
            backdrop-blur-xl
            rounded-xl
            border-[1.2px]
            shadow-[0px_5px_20px_rgba(0,0,0,0.8)]
            transition-transform
            hover:translate-y-[-5px]
            duration-300
            overflow-hidden
            flex flex-col ${left_to_right ? 'xl:flex-row' : 'xl:flex-row-reverse'}
            `}
        >
                <div className={img_attr}>
                    <img src={project_image} className='hover:scale-105 duration-300 transition-transform rounded-lg' alt='Project Image' draggable='false'/>
                </div>
                
                <div className={content_attr}>

                    <h1 className="text-3xl mb-5 font-bold">{caption}</h1>

                    <div>
                        {children}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-[10px]">
                        {labels}
                    </div>

                    <div className="mt-8">
                        {link}
                    </div>

                </div>
        </div>
    )
}

export default ProjectCard;
