'use client';
import { searchCharacters } from '@/utils/api';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Search from '@/Components/Search';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const CharacterCard = dynamic(() => import('@/Components/CharacterCard'), {
	ssr: false,
});

const SearchPage = () => {
	const searchParams = useSearchParams();
	const querySearch = searchParams.get('query');
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await searchCharacters(querySearch);
				const { results } = response.data;
				setCharacters(results);
			} catch (error) {
				console.error(error);
			}
		};

		if (querySearch) {
			fetchData();
		}
	}, [querySearch]);

	return (
		<section>
			<div className='flex flex-col sm:flex-row gap-6 justify-between items-center mb-6'>
				<h1 className='text-3xl font-bold py-2'>
					Search for <span className='text-mred'>&quot;{querySearch}&quot;</span>
				</h1>
				<Link
					href={'/characters'}
					className='bg-mred text-sm text-gray-100 py-2 px-3 rounded-sm hover:bg-mblack shadow-xl'>
					Browse Characters
				</Link>
			</div>
			<div className='flex flex-grow mx-auto justify-center items-center p-2 sm:p-4'>
				<Search />
			</div>
			{/* Render Characters Found in the Search*/}
			{/* If no characters where found then show a message to the user */}
			{characters.length > 0 ? (
				<div className='flex flex-wrap gap-3 mt-10 mb-10'>
					{characters.map((character) => (
						<CharacterCard
							key={character.id}
							character={character}
						/>
					))}
				</div>
			) : (
				<div className='px-2 py-4'>
					<div className='font-bold text-xl p-4 text-center mb-2'>
						Sorry, we couldn't find any characters with the name <span className='text-mred'>&quot;{querySearch}&quot;</span> please try another search.
					</div>
				</div>
			)}
		</section>
	);
};

export default SearchPage;
