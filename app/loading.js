import React from 'react';
import Shield from './imgs/capitan_america_shield.png';
import Image from 'next/image';
const Loading = () => {
	return (
		<div className='w-screen h-screen bg-black opacity-70 flex justify-center items-center p-4 z-50'>
			<Image
				src={Shield}
				alt='Loading'
				height={400}
				width={400}
				className='h-28 w-28 animate-bounce'
			/>
		</div>
	);
};

export default Loading;
