'use client';
import React from 'react';
import Image from 'next/image';
import Spiderman from './imgs/spiderman1.png';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Search from '@/components/Search';

const Home = () => {
	return (
		<main className='h-screen w-screen cover overflow-hidden'>
			<div className='h-screen w-screen layer flex flex-col justify-center pt-4'>
				<div className='flex flex-col-reverse md:flex-row justify-center sm:justify-evenly items-center gap-4'>
					<div className='flex flex-col basis-1/3 p-4 gap-8'>
						<div className='text-center sm:text-left'>
							<motion.p
								animate={{ x: [-500, 0], opacity: 1, scale: 1 }}
								transition={{
									duration: 1,
									delay: 1,
									ease: [0.5, 0.71, 1, 1.5],
								}}
								initial={{ opacity: 0, scale: 0.5 }}
								className='text-md'
							>
								Welcome to
							</motion.p>
							<motion.h1
								animate={{ x: [50, 150, 0], opacity: 1, scale: 1 }}
								transition={{
									duration: 2,
									delay: 1,
									ease: [0.5, 0.71, 1, 1.5],
								}}
								initial={{ opacity: 0, scale: 0.5 }}
								className='text-4xl sm:text-6xl font-black mb-2'
							>
								<span className='text-mred'>MARVEL</span>me
							</motion.h1>
							<motion.h3
								animate={{ y: [50, 150, 0], opacity: 1, scale: 1 }}
								transition={{
									duration: 1,
									delay: 2.8,
									ease: [0.5, 0.71, 1, 1.5],
								}}
								initial={{ opacity: 0, scale: 0.5 }}
								className='text-sm mb-6'
							>
								Explore the captivating world of Marvel characters and comics,
								where extraordinary heroes and villains come to life. Immerse
								yourself in the rich narratives and stunning illustrations of
								iconic characters like Spider-Man, Iron Man, Captain America,
								and the X-Men.
							</motion.h3>
							<motion.div
								animate={{ x: [-500, 0], opacity: 1, scale: 1 }}
								transition={{
									duration: 1,
									delay: 3,
									ease: [0.5, 0.71, 1, 1.5],
								}}
								initial={{ opacity: 0, scale: 0.5 }}
								className='text-center sm:text-left mb-2'
							>
								<Link
									href={'/characters'}
									className='bg-mred text-gray-100 py-4 px-4 mt-12 rounded-sm hover:bg-mblack shadow-xl'
								>
									Browse Characters
								</Link>
							</motion.div>
						</div>
					</div>
					<div className='flex flex-col basis-1/3 justify-center items-center p-4'>
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{
								duration: 1.8,
								delay: 1.5,
							}}
							className='flex items-baseline hero-img'
						>
							<div className='bg-neutral-900 shadow-2xl rounded-full w-56 h-56 z-10 md:w-[18rem] md:h-[18rem] lg:w-[22rem] lg:h-[22rem]'>
								<Image
									src={Spiderman}
									alt='Spiderman'
									height={1000}
									width={1000}
									className='w-64 h-64 z-20 rounded-full md:w-[22rem] md:h-[22rem] lg:w-96 lg:h-96'
								/>
							</div>
						</motion.div>
					</div>
				</div>
				<motion.div
					animate={{ y: [300, 0], opacity: 1, scale: 1 }}
					transition={{
						duration: 1,
						delay: 4,
						ease: [0.5, 0.71, 1, 1.5],
					}}
					initial={{ opacity: 0, scale: 0.5 }}
					className='flex justify-center items-center sm:mt-16'
				>
					<div className='flex flex-grow mx-auto justify-center items-center p-4'>
						<Search />
					</div>
				</motion.div>
			</div>
		</main>
	);
};

export default Home;
