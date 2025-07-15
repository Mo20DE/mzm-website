
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

import ecg_signals from "../../../assets/projects/ecg_signals.png"
import portfolio_webapp from '../../../assets/projects/portfolio_webapp.png';
import nao_robot from '../../../assets/projects/nao_robot.png';
import me_robot from '../../../assets/projects/me_robot.png';
import demo_webapp from '../../../assets/projects/demo_webapp.png';
import app_2048 from '../../../assets/projects/app_2048.png'

import Label from './Label';

const Projects = () => {

    return (
        <motion.div 
            id='projects' 
            className='
            w-5/6 h-auto
            lg:mt-10 mb-24 scroll-mt-28'
            initial={{y: 20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true, amount: 0.1}}
            transition={{duration: 0.8, ease: "easeOut"}}
        >
            <h1 className='
                relative text-4xl lg:text-5xl 
                font-bold text-left mb-2 
                after:mt-5 after:block 
                after:content-[""] 
                after:w-full after:h-1 
                after:bg-gradient-to-r 
                after:from-black 
                after:dark:from-white
                after:to-transparent'
            >
                Projects
            </h1>
            
            <div className='mt-20 md:ml-20 md:mr-20 flex flex-col justify-center gap-14'>

                <ProjectCard 
                    project_image={ecg_signals} 
                    caption={'Neural Network for ECG Classification'}
                    labels={[
                        <Label key='ml' label='Machine Learning' />,
                        <Label key='ml' label='Deep Learning' />,
                        <Label key='ai' label='AI' />,
                        <Label key='py' label='Python' />,
                    ]}
                    link={<Label label='Github' url='https://github.com/Mo20DE/AMLS/tree/main' />}
                    left_to_right={false}
                >
                    <p>
                        This project uses artificial intelligence to automatically classify ECG heart signals 
                        into four types: Normal, Atrial Fibrillation, Other, and Noisy. It was trained to recognize 
                        patterns in the data, even when the signals are unbalanced or vary in length. The model performs 
                        reliably, reaching a strong accuracy score on test data. It can also work well with smaller, 
                        compressed data — ideal for faster or mobile applications.
                    </p>
                </ProjectCard>

                <ProjectCard 
                    project_image={portfolio_webapp} 
                    caption={'Portfolio Website'}
                    labels={[
                        <Label key='react' label='React' />,
                        <Label key='tailwind' label='Tailwind' />,
                        <Label key='vite' label='Vite' />,
                        <Label key='rd' label='Responsive Design' />,
                    ]}
                    link={<Label label='Github' url='https://github.com/Mo20DE/mzm-website' />}
                >
                    <p>
                        One of my latest projects to showcase my skills is this portfolio website you're currently viewing.
                        Designing and developing it was a lot of fun, and I was able to polish my web development skills while also learning 
                        many new things while working with React and Tailwind. In the near future, I plan to add some exciting and creative
                        features to extend this portfolio, so keep visiting! 😊
                    </p>
                </ProjectCard>

                <ProjectCard 
                    project_image={nao_robot} 
                    caption={"NAO-Robot with GPT"}
                    labels={[
                        <Label key='py' label='Python' />,
                        <Label key='json' label='JSON' />,
                        <Label key='gpt' label='GPT' />,
                        <Label key='ai' label='AI' />,
                        <Label key='openai-api' label='OpenAI API' />,
                    ]}
                    link={<Label label='Github' url='https://github.com/Mo20DE/NAO-Robot'/>}
                    left_to_right={false}
                >
                    <p>
                        As part of a project, my fellow students and I came up with the idea of combining the NAO robot with OpenAI's GPT-4. We developed a proxy that 
                        receives voice commands and uses a model selector to decide whether to use GPT-3 (fast and suitable for text-only prompts) or GPT-4 
                        (which can also process images). If needed, the robot captures an image of its surroundings, which is then sent along with the prompt 
                        to OpenAI's backend. The proxy processes the response and forwards it to the NAO robot, which then speaks and/or performs corresponding movements.
                    </p>
                </ProjectCard>

                <ProjectCard 
                    project_image={me_robot} 
                    caption={"Cyber-Physical System"}
                    labels={[
                        <Label key='js' label='JavaScript' />,
                        <Label key='html' label='HTML' />,
                        <Label key='css' label='CSS' />,
                        <Label key='java' label='Java' />,
                        <Label key='c++' label='C++' />,
                    ]}
                    link={<Label label='Github' url='https://github.com/Mo20DE/cyber-physical-systems-project'/>}
                >
                    <p>
                        In a university project, my team and I developed an embedded system consisting of an Arduino, a Raspberry Pi, various sensors, and actuators. We integrated these components and built a backend on the Raspberry Pi that 
                        communicates with the frontend via a custom-designed protocol. The system was able to display information like the current temperature and the distance to the nearest object, simulate emotions, and move using wheels. 
                        For software development, we used agile methods like Scrum, with regular sprints and retrospectives. The project was also thoroughly documented.
                    </p>
                </ProjectCard>

                <ProjectCard 
                    project_image={demo_webapp} 
                    caption={'Superhero Platform'}
                    labels={[
                        <Label key='html' label='HTML' />,
                        <Label key='css' label='CSS' />,
                        <Label key='js' label='JS' />,
                        <Label key='php' label='PHP' />,
                        <Label key='json' label='JSON' />,
                        <Label key='rest-api' label='RESTful API' />,
                    ]}
                    link={<Label label='Github' url='https://github.com/Mo20DE/AOE-backend-challenge'/>}
                    left_to_right={false}
                >
                    <p>
                        I completed a coding challenge from AOE GmbH, where I developed a PHP backend. Users can interact with a superheroes 
                        database by fetching data via HTTP GET and adding new superheroes via POST. Additionally, they can filter superheroes 
                        based on abilities, encrypt the fetched data server-side, and use an interface for easy interaction with the backend.
                    </p>
                </ProjectCard>

                <ProjectCard 
                    project_image={app_2048} 
                    caption={'2048 Desktop'}
                    labels={[
                        <Label key='py' label='Python' />,
                        <Label key='pygame' label='Pygame' />,
                        <Label key='ai-solver' label='AI-Solver' />,
                        <Label key='json' label='JSON' />
                    ]}
                    link={<Label label='Github' url='https://github.com/Mo20DE/Game_Dev/tree/main/2048'/>}
                >
                    <p>
                        Besides my studies, I worked on a coding project in my free time. Since 2048 is one of my favorite mobile games, 
                        I created a desktop version using Pygame for graphics, sound, and user input. Instead of a dedicated engine like Unity, 
                        I focused on coding and best practices. During development, I built a simple framework for reusable components like animations, 
                        text, and GUI elements.

                        I designed all assets myself and added features such as 3x3, 4x4, and 5x5 board sizes, an AI solver, and built-in statistics for tracking progress.
                    </p>
                </ProjectCard>
            </div>
        </motion.div>
    );
};

export default Projects;