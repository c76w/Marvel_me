import Image from 'next/image';
import React from 'react';
import Shield from '../imgs/capitan_america_shield.png';

const Loading = () => {
	return (
		<div className='flex justify-center items-center p-12 my-20'>
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
