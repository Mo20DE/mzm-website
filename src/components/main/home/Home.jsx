
import Avatar from "./Avatar";
import Socials from "../../general/Socials"
import ResumeButton from "../../general/ResumeButton";

function Home() {

    return (
        <div  className='flex flex-col lg:flex-row items-center w-5/6 mt-[152px] md:mt-48 mb-28 gap-24 lg:gap-44'>
            <Avatar/>
            <div className="text-left ml-10 mr-10 md:ml-16 -mt-10 lg:mt-0">
                <p className="text-[26px] md:text-4xl lg:text-[40px] xl:text-5xl pb-4 font-bold">
                    Hey <span className="animate-handMovement inline-block">👋</span>,
                </p>
                <p className='text-[26px] md:text-4xl lg:text-[40px] xl:text-5xl pb-8 font-bold '>
                    I'm <span className={`text-slate-700 dark:text-gray-300`}> Mohammed Zain </span>
                </p>

                <p className="text-lg md:text-xl">
                    A Master's Computer Science Student
                    <span> @ </span>
                    <a href="https://www.tu.berlin" target="_blank" className="text-tu-berlin-red hover:text-tu-berlin-red-hover">
                        TU Berlin
                    </a> and a passionate Software Developer.
                </p>
                <div className="mt-10 flex flex-col md:flex-row gap-8">
                    <Socials size="45" add_mail={true} />
                    <ResumeButton attributes={""} />
                </div>
            </div>
        </div>
    )
}

export default Home;
