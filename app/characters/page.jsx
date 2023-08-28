'use client';
import React from 'react';
import { getCharacters } from '@/utils/api';
import Search from '@/components/Search';
import { useState, useEffect } from 'react';
import CharacterCard from '@/components/CharacterCard';
import Loading from './loading';

const Characters = () => {
	const ITEMS_PER_PAGE = 100;

	const [currentPage, setCurrentPage] = useState(1);
	const [totalCharacters, setTotalCharacters] = useState(0);
	const [characters, setCharacters] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	//Watch for the page number to change and then request more characters
	useEffect(() => {
		//Fetch the characters for the page the user is on
		const fetchData = async () => {
			setIsLoading(true);
			try {
				let offset = (currentPage - 1) * ITEMS_PER_PAGE;
				const response = await getCharacters(offset, ITEMS_PER_PAGE);
				const { total, results } = response.data;

				setTotalCharacters(total);
				setCharacters(results);
				setTotalPages(Math.ceil(total / ITEMS_PER_PAGE)); //Calculate the number of pages
			} catch (error) {
				setError(error);
				console.error('Error fetching data: ', error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [currentPage]);

	//If there is an error retrieving the characters, then display a message to the user
	if (error) {
		return (
			<div className='mt-12 px-2 py-4'>
				<div className='font-bold text-xl p-4 text-center mb-2'>
					Error: {error.message}
				</div>
			</div>
		);
	}

	return (
		<section>
			<h1 className='text-3xl font-bold py-2'>
				<span className='text-mred'>Marvel</span> Characters
			</h1>
			<div className='flex flex-grow mx-auto justify-center items-center p-2 sm:p-4'>
				<Search />
			</div>

			{isLoading ? (
				<Loading />
			) : (
				<>
					<div className='min-h-full cards mt-10 mb-10'>
						{/* Render Characters */}
						{characters.map((character) => (
							<CharacterCard key={character.id} character={character} />
						))}
					</div>

					<div className='flex flex-col sm:flex-row flex-grow justify-between items-center text-sm gap-8 sm:gap-2 p-2 sm:p-6'>
						<div className='mx-8 px-4'>
							Page {currentPage} of {totalPages}
						</div>
						<div>
							<button
								onClick={() => setCurrentPage(1)}
								disabled={currentPage === 1}
								className='bg-mred text-gray-100 py-2 px-3 rounded-tl-sm rounded-bl-sm hover:bg-mblack shadow-xl disabled:cursor-not-allowed disabled:bg-neutral-700 disabled:text-neutral-600'
							>
								First
							</button>
							<button
								onClick={() => setCurrentPage(currentPage - 1)}
								disabled={currentPage === 1}
								className='bg-mred text-gray-100 py-2 px-3 hover:bg-mblack shadow-xl disabled:cursor-not-allowed disabled:bg-neutral-700 disabled:text-neutral-600'
							>
								Previous
							</button>

							<button
								onClick={() => setCurrentPage(currentPage + 1)}
								disabled={currentPage * ITEMS_PER_PAGE >= totalCharacters}
								className='bg-mred text-gray-100 py-2 px-3 hover:bg-mblack shadow-xl disabled:cursor-not-allowed disabled:bg-neutral-700 disabled:text-neutral-600'
							>
								Next
							</button>
							<button
								onClick={() => setCurrentPage(totalPages)}
								disabled={currentPage === totalPages}
								className='bg-mred text-gray-100 py-2 px-3 rounded-tr-sm rounded-br-sm hover:bg-mblack shadow-xl disabled:cursor-not-allowed disabled:bg-neutral-700 disabled:text-neutral-600'
							>
								Last
							</button>
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default Characters;
