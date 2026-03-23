import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <section className='flex flex-col w-full bg-gray-900 font-body text-gray-400 py-4 gap-2'>

            <div className='flex w-full justify-center text-xs'>
                <span>© 2025 & Beyond by</span>&nbsp;

                <Link href='/' className='text-gray-300 hover:text-cyan-400 transition'>
                    Insight Innova
                </Link>

                &nbsp;<span>| All rights reserved</span>
            </div>

            <div className='flex w-full justify-center text-xs'>
                <span>Made with</span>&nbsp;

                <span className='text-red-500'>❤️</span>

                &nbsp;<span>by -</span>&nbsp;

                <Link href='/' className='text-gray-300 hover:text-cyan-400 transition'>
                    Insight Innova
                </Link>
            </div>

        </section>
    );
};

export default Footer;