import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (<section className='flex flex-col w-full bg-gray-800 font-body text-white p-4 gap-1'>
        <div className='flex w-full justify-center text-xs'>
            <span>© 2025 & Beyond by</span> &nbsp;
            <span className=''><Link href='/'> Insight Innova </Link></span> &nbsp;
            <span>| All rights reserved</span>
        </div>

        <div className='flex w-full justify-center text-xs'>
            <span>Made with ❤️ by - </span> &nbsp;
            <span className=''><Link href='/'>Insight Innova</Link></span>
        </div>
    </section>);
};

export default Footer;
