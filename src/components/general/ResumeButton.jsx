
const ResumeButton = ({ attributes }) => {

    return (
        <button className={`
            w-[120px] flex items-center justify-center
            bg-transparent rounded-lg p-2 
            border-[2px] border-black dark:border-white
            hover:bg-black hover:text-white duration-300 transition-all
            dark:hover:bg-white dark:hover:text-black
            select-none
            ${attributes}
        `}>
            <a 
                href={'https://www.canva.com/design/DAGfvciu3j0/5RtPhbpJlpBubEYwdJ3uxg/view?utm_content=DAGfvciu3j0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbfc425b061'} 
                target='_blank' 
                className="text-lg">
                    Resume
            </a>
        </button>
    )
};

export default ResumeButton;
