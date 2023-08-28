import React from 'react';
import Image from 'next/image';

const CharacterComic = ({ comic, name }) => {
	//Format the date to readable date
	const getFormattedDate = (dateToFormat) => {
		let newDate = new Date(dateToFormat).toLocaleDateString();
		return newDate;
	};
	return (
		<article
			key={comic.id}
			className='card w-full bg-mblack hover:bg-neutral-950 rounded-md shadow-xl text-gray-100'
		>
			<div>
				<div className='mb-4'>
					<Image
						src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
						alt={name}
						height={600}
						width={800}
						className='object-cover w-full rounded-tl-md rounded-tr-md'
					/>
				</div>

				<div className='p-4'>
					<div className='text-mred font-bold text-xl mb-2'>
						{comic.title == 0 ? 'N/A' : comic.title}
					</div>
					<p className='text-xs'>
						Issue No: {comic.issueNumber == 0 ? 'N/A' : comic.issueNumber}
					</p>
					<p className='text-xs'>Format: {comic.format}</p>
					<p className='text-xs'>
						Page Count: {comic.pageCount == 0 ? 'N/A' : comic.pageCount}
					</p>
					<p className='text-xs'>
						Printed Price:{' '}
						{comic.prices[0].price == 0 ? 'N/A' : comic.prices[0].price}
					</p>
					<p className='text-xs'>
						On Sale Date: {getFormattedDate(comic.dates[0].date)}
					</p>
				</div>
			</div>
		</article>
	);
};

export default CharacterComic;
