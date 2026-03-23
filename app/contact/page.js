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
        let errors = { nameErr: '', emailErr: '', queryErr: '' };

        if (!formData.name.trim()) {
            errors.nameErr = '◬ This field is required';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim()) {
            errors.emailErr = '◬ This field is required';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            errors.emailErr = 'Invalid email format!';
            isValid = false;
        }

        if (!formData.query.trim()) {
            errors.queryErr = '◬ This field is required';
            isValid = false;
        }

        setErr(errors);

        if (isValid) {
            const form = new FormData(e.target);
            form.append("access_key", ACCESS_KEY);

            const response = await fetch(URL, {
                method: "POST",
                body: form
            });

            const data = await response.json();

            if (data.success) {
                setFormData({ name: '', email: '', query: '' });
                e.target.reset();
            }
        }
    }

    return (
        <section className="bg-gray-900 w-full">
            <div className="flex flex-row justify-between items-center w-full px-6 py-12 mx-auto font-body">

                {/* LEFT SIDE */}
                <div className="flex flex-col w-1/2 text-gray-300">
                    <h1 className="text-3xl font-semibold text-gray-100">Contact</h1>

                    <p className="max-w-xl mt-6 italic text-sm text-gray-400">
                        "I am here to help with any questions or concerns you may have.
                        Please feel free to reach out, and I will be delighted to assist you."
                    </p>

                    <div className="mt-6 space-y-8 md:mt-8">

                        <p className="flex items-start -mx-2">
                            <svg className="w-6 h-6 mx-2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>

                            <span className="mx-2 text-gray-300">
                                Mankachar, Assam, India - 783131
                            </span>
                        </p>

                        <p className="flex items-start -mx-2">
                            <svg className="w-6 h-6 mx-2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2"
                                viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>

                            <span className="mx-2 text-gray-300">(+91) 96132-72832</span>
                        </p>

                        <p className="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>

                            <span className="mx-2 text-gray-300">info.insightinnova@gmail.com</span>
                        </p>
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="flex flex-col w-1/2">
                    <div className="w-full px-6 py-8 mx-auto bg-gray-800 border border-gray-700 shadow-xl rounded-xl lg:max-w-xl">

                        <h1 className="text-xl font-medium text-gray-100">Contact</h1>

                        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>

                            {/* NAME */}
                            <div className='flex flex-col'>
                                <input
                                    type="text"
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name:"
                                    className="w-full px-5 py-3 bg-gray-900 text-gray-200 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                                <span className='text-red-400 text-xs mt-1'>{err.nameErr}</span>
                            </div>

                            {/* EMAIL */}
                            <div className='flex flex-col'>
                                <input
                                    type="email"
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="someone@example.com"
                                    className="w-full px-5 py-3 bg-gray-900 text-gray-200 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                                <span className='text-red-400 text-xs mt-1'>{err.emailErr}</span>
                            </div>

                            {/* QUERY */}
                            <div className='flex flex-col'>
                                <textarea
                                    id='query'
                                    name='query'
                                    value={formData.query}
                                    onChange={handleChange}
                                    placeholder="Write your query:"
                                    className="w-full h-32 px-5 py-3 bg-gray-900 text-gray-200 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                                <span className='text-red-400 text-xs mt-1'>{err.queryErr}</span>
                            </div>

                            {/* BUTTON */}
                            <button
                                type='submit'
                                className="w-full px-6 py-3 text-sm font-medium text-white bg-cyan-500 hover:bg-cyan-600 rounded-md transition"
                            >
                                Get In Touch
                            </button>

                        </form>
                    </div>
                </div>
            </div>

            <hr className='border-gray-700' />
        </section>
    )
}

export default Contact