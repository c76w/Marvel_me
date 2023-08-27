import React from 'react';
import Link from 'next/link';
const Header = () => {
	return (
		<header>
			<nav className='bg-base-100 border-gray-200 dark:bg-gray-900'>
				<div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 container'>
					<Link
						href='/'
						className='flex items-center self-center text-lg sm:text-2xl font-semibold whitespace-nowrap'
					>
						<span className='text-mred'>MARVEL</span>me
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
