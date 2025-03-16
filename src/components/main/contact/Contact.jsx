
import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleValidation = () => {

        let newErrors = {name: '', email: '', message: ''};
        let validation = {name: false, email: false, message: false};

        if (/^[a-zA-ZäöüßÄÖÜ\s'-]{3,}$/.test(formData.name.trim())) {
            validation.name = true;
        } 
        else newErrors.name = 'Please provide a valid name with min. 3 characters.'
        
        if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email.trim())) {
            validation.email = true;
        } 
        else newErrors.email = 'Please provide a valid email address.'

        if (formData.message.trim().length >= 10) {
            validation.message = true;
        } 
        else newErrors.message = 'Message must be at least 10 characters.'
        
        setErrors(newErrors);
        
        return validation.name && validation.email && validation.message;
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        const { name, email, message } = formData;
        
        if (handleValidation()) {
            setFormData({name: '', email: '', message: ''});
            try {
                const api_url = 'https://mzm-backend.vercel.app/api/send-email';
                const response = await axios.post(api_url, {
                    name,
                    email,
                    message
                });

                console.log("Response from API:", response); // Logge die vollständige Antwort
                if (response.data.success) {
                    alert("Message was Successfully sent!");
                } 
                else alert("An error occurred while sending the message!");

            } catch (error) {

                console.error("Error sending the message:", error);
                if (error.response) {
                    console.error("Error response:", error.response);
                    alert(`An error occurred: ${error.response.data.message || "Unknown error"}`);

                } else if (error.request) {
                    console.error("Error request:", error.request);
                    alert("No response received from the server.");

                } else {
                    console.error("Error message:", error.message);
                    alert("An error occurred. Please try again later.");
                }
            }
        }
    };

    return (
        <motion.div 
                id='contact' 
                className='
                w-5/6 h-auto
                lg:mt-10 mb-24 scroll-mt-28'
                initial={{y: 20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: true, amount: 0.12}}
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
                Contact
            </h1>
            <form 
                onSubmit={handleSubmit}
                className="
                    text-black overflow-hidden 
                    flex flex-col items-center mt-16 text-lg"
            >
                <input 
                    type='text' 
                    name='name' 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`
                        mb-4 w-11/12 max-w-md h-14 
                        rounded-full p-6 border-[2px] border-black
                        dark:border-gray-400 focus:outline-none`}
                    required
                />
                {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                
                <br/>
                <input 
                    type='email' 
                    name='email' 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your E-Mail"
                    className="
                        mb-4 w-11/12 max-w-md h-14 
                        rounded-full p-6 border-[2px]
                        border-black dark:border-gray-400
                        focus:outline-none"
                    required
                />
                {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                
                <br/>
                <div className="
                    w-11/12 max-w-md h-[200px] 
                    rounded-3xl border-[2px]
                    bg-white border-black
                    dark:border-gray-400
                    overflow-hidden"
                >
                    <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Type your message here"
                        maxLength={500}
                        className="
                            w-full h-full
                            rounded-3xl p-6
                            resize-none
                            focus:outline-none
                            "
                        required
                    />
                    <div className="absolute text-right text-md dark:text-white">
                        {formData.message.length}/500
                    </div>
                </div>
                {errors.message && <p className="text-red-600 text-sm mt-4">{errors.message}</p>}

                <button
                    className="
                        mt-10 text-xl font-bold text-white dark:text-black 
                        bg-black dark:bg-gray-100 
                        hover:bg-slate-700 dark:hover:bg-gray-300 duration-200 transition-all"
                >
                    <span>Send {<FaPaperPlane className="inline-block ml-1 -mt-1"/>}</span>
                </button>
            </form>
        </motion.div>
    );
};

export default Contact;
