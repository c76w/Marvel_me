import Link from 'next/link';
import Image from 'next/image';
import Deadpool from './imgs/deadpool.png';

export default function NotFound() {
	return (
		<div className='h-screen flex flex-col sm:flex-row justify-center items-center p-6'>
			<div className='p-4'>
				<Image
					src={Deadpool}
					alt='404 page not found'
					height={400}
					width={400}
					className='w-40 px-4'
				/>
			</div>
			<div className='flex flex-col justify-center items-center p-4'>
				<h1 className='flex items-center text-base mb-8 text-center'>
					<span className='text-4xl font-bold border-r border-gray-100 pr-4 mr-4'>404</span>Page Not Found
				</h1>
				<Link
					href='/'
					className='bg-mred hover:bg-neutral-800 text-white rounded-md py-2 px-4'>
					Go back home
				</Link>
			</div>
		</div>
	);
}
