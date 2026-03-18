'use client'
import React from 'react'

const Contact = () => {
    const URL = process.env.NEXT_PUBLIC_FORM_BACKEND_PROVIDER
    const ACCESS_KEY = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY

    const [formData, setFormData] = React.useState({
        name: '', email: '', query: ''
    });

    const [err, setErr] = React.useState({
        nameErr: '', emailErr: '', queryErr: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValid = true;
        let errors = {nameErr: '', emailErr: '', queryErr: ''};
        if (!formData.name.trim()) {
            errors.nameErr = '◬ This field is required';
            isValid = false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            errors.emailErr = '◬ This field is required';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            errors.emailErr = 'Invalid email format !';
            isValid = false;
        }
        if (!formData.query.trim()) {
            errors.queryErr = '◬ This field is required';
            isValid = false;
        }

        setErr(errors);

        if (isValid) {
            const formData = new FormData(e.target);
            formData.append("access_key", ACCESS_KEY);

            const response = await fetch(URL, {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                setFormData({
                    name: '', email: '', query: ''
                })
                e.target.reset();
            }
        }
    }

    return (
        <section className="bg-gray-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 w-full">
            <div className="flex flex-row justify-between items-center w-full px-6 py-12 mx-auto font-body">
                <div className="flex flex-col w-1/2 text-white">
                    <h1 className="text-2xl font-semibold capitalize lg:text-3xl">Contact </h1>

                    <p className="max-w-xl mt-6 italic text-sm">"I am here to help with any questions or concerns you
                        may have. Please feel free to reach out, and I will be delighted to assist you."</p>

                    <div className="mt-6 space-y-8 md:mt-8">
                        <p className="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>

                            <span className="mx-2 text-white truncate w-72">
                Mankachar, Assam, India - 783131
              </span>
                        </p>

                        <p className="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>

                            <span className="mx-2 text-white truncate w-72">(+91) 96132-72832</span>
                        </p>

                        <p className="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-white" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>

                            <span className="mx-2 text-white truncate w-72">info.insightinnova@gmail.com</span>
                        </p>
                    </div>
                </div>

                <div className="flex flex-col w-1/2 font-body">
                    <div
                        className="w-full px-6 py-8 mx-auto bg-white/80 shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                        <h1 className="text-xl font-medium text-gray-600 dark:text-gray-200">Contact </h1>

                        <form className="flex flex-col gap-4 ml-1 mt-4" onSubmit={handleSubmit}>

                            {/* <input type="hidden" name="_captcha" value="false" /> */}
                            {/*<input type="hidden" name="_subject" value="Through Portfolio" />*/}

                            <div className='flex flex-col'>
                                <input type="text" placeholder="Full Name:"
                                       className="block w-full px-5 py-3 text-gray-800 bg-white/50 border border-cyan-600 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-gray-600 focus:ring-gray-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                       id='name' name='name' value={formData.name} onChange={handleChange}/>
                                <span className='text-yellow-700 text-xs ml-1 mt-1 h-1'>{err.nameErr}</span>
                            </div>

                            <div className='flex flex-col'>
                                <input type="email" placeholder="someone@example.com"
                                       className="block w-full px-5 py-3 text-gray-800 bg-white/50 border border-cyan-600 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-gray-600 focus:ring-gray-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                       id='email' name='email' value={formData.email} onChange={handleChange}/>
                                <span className='text-yellow-700 text-xs ml-1 mt-1 h-1'>{err.emailErr}</span>
                            </div>

                            <div className='flex flex-col'>
                                <textarea
                                    className="block w-full h-16 px-5 py-3 text-gray-800 placeholder-gray-400 bg-white/50 border border-cyan-600 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-gray-600 focus:ring-gray-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                    placeholder="Write your query:" id='query' name='query' value={formData.query}
                                    onChange={handleChange}></textarea>
                                <span className='text-yellow-700 text-xs ml-1 mt-1 h-1'>{err.queryErr}</span>
                            </div>

                            <button type='submit'
                                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-600 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                get in touch
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <hr className='border border-white'/>
        </section>
    )
}

export default Contact
