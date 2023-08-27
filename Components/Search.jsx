'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Search = (querySearch) => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		router.push(`/search?query=${searchTerm}`); // Redirect the the search page with the search term

		setSearchTerm(''); // Clear the search input box

		return querySearch;
	};
	return (
		<div>
			<form className='flex items-center' onSubmit={handleSubmit}>
				<input
					type='text'
					value={searchTerm}
					onChange={(event) => setSearchTerm(event.target.value)}
					required
					minLength={3}
					placeholder='Search for a character'
					className='bg-mblack rounded-tl-sm rounded-bl-sm border-mgrey outline-none hover:outline-none focus:border-transparent focus:ring-0 text-gray-100 p-2 sm:p4 search-input'
				/>
				<button
					type='submit'
					className='bg-mred text-gray-100 rounded-tr-sm rounded-br-sm p-2 sm:p4 hover:bg-mblack'
				>
					Search
				</button>
			</form>
		</div>
	);
};

export default Search;
