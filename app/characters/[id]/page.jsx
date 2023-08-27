import React from 'react';
import CharacterComic from '@/Components/CharacterComic';
import { getCharacterComics, getCharacterDetail } from '@/utils/api';
import Image from 'next/image';
import Link from 'next/link';
import Search from '@/Components/Search';

// Dynamic metadata
export async function generateMetadata({ params }) {
	const { id } = params;
	const response = await getCharacterDetail(id);
	const { name } = await response.data.results[0];

	return {
		title: `${name} Character Details - MARVELme`,
		description: `${name} details. View further information on the Marvel character, ${name} `,
	};
}

const CharacterDetail = async ({ params }) => {
	const { id } = params;
	const character = await getCharacterDetail(id);
	const { name, thumbnail, description } = await character.data.results[0];
	const comicsResponse = await getCharacterComics(id);
	const characterComics = await comicsResponse.data.results;

	return (
		<section>
			<div className='flex flex-col sm:flex-row gap-6 justify-between items-center mb-6'>
				<h1 className='text-3xl font-bold py-2'>
					Character Details: <span className='text-mred'>{name}</span>
				</h1>

				<Link
					href={'/characters'}
					className='bg-mred text-sm text-gray-100 py-2 px-3 rounded-sm hover:bg-mblack shadow-xl'
				>
					Browse Characters
				</Link>
			</div>
			<div className='flex flex-grow mx-auto justify-center items-center p-2 sm:p-4 mb-4'>
				<Search />
			</div>
			{/* Render Characters Details */}
			<div className='flex flex-col sm:flex-row gap-4 bg-mblack hover:bg-neutral-950 p-2 sm:p-4 rounded-md shadow-xl text-gray-100 mb-4'>
				<div className='flex flex-1'>
					<Image
						src={`${thumbnail.path}.${thumbnail.extension}`}
						alt={name}
						height={600}
						width={800}
						priority
						className='object-cover w-full rounded-md'
					/>
				</div>
				<div className='flex flex-1 flex-col gap-6 p-6'>
					<h2 className='text-mred font-bold text-2xl py-4'>{name}</h2>
					<p className='text-md'>{description}</p>
					<p className='text-md'>
						From epic battles to intricate storylines, the Marvel universe
						offers an unparalleled experience for fans of all ages. Discover the
						vast Marvel universe, where superpowers, alliances, and rivalries
						collide in thrilling adventures. Whether you&apos;re a dedicated
						follower of comics and movies or new to the scene, these ageless
						stories consistently captivate and ignite inspiration, cementing
						Marvel as a vital element of popular culture.
					</p>
				</div>
			</div>
			{/* Render Comics Associated with the Character */}
			<div className='py-4 mb-2 rounded-md'>
				<h3 className='text-3xl font-bold py-8 text-center mb-4'>
					Featured Comics
				</h3>
				{characterComics.length === 0 ? (
					<div className='px-2 py-4'>
						<div className='font-bold text-xl p-4 text-center mb-2'>
							Sorry, no comics have been fond for {name}
						</div>
					</div>
				) : (
					<div className='cards mt-10 mb-10'>
						{characterComics.map((comic) => (
							<CharacterComic comic={comic} name={name} key={comic.id} />
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default CharacterDetail;
