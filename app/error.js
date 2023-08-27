'use client'; // Error components must be Client Components
import React from 'react';
import { useEffect } from 'react';
import Deadpool from './imgs/deadpool.png';
import Image from 'next/image';

export default function Error({ error, reset }) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className='h-screen flex flex-col sm:flex-row justify-center items-center p-6'>
			<div className='p-4'>
				<Image
					src={Deadpool}
					alt='Error'
					height={400}
					width={400}
					className='w-40 px-4'
				/>
			</div>
			<div className='flex flex-col justify-center items-center p-4'>
				<h2 className='text-3xl font-bold mb-8 text-center'>
					Oops... something went wrong!
				</h2>
				<button
					onClick={
						// Attempt to recover by trying to re-render the segment
						() => reset()
					}
					className='bg-mred hover:bg-neutral-800 text-white rounded-md py-2 px-4'
				>
					Try again
				</button>
			</div>
		</div>
	);
}
