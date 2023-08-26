import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CharacterCard = ({ character }) => {
	const trimText = (textToTrim) => {
		if (textToTrim.length > 0) {
			const maxLength = 110;
			let trimmedString = textToTrim.slice(0, maxLength) + '...';
			return trimmedString;
		} else {
			return `For more information about ${character.name} please visit the characters page by clicking on this card.`;
		}
	};

	return (
		<article>
			<Link
				key={character.id}
				href={`characters/${character.id}`}
				className='flex flex-auto hover:cursor-pointer w-full sm:w-[44%] md:w-[29%] lg:w-[24%]'>
				<div className='max-w-lg bg-mblack hover:bg-neutral-950 rounded-md shadow-xl text-gray-100 p-8'>
					<div className='flex justify-center items-center mb-4'>
						<Image
							src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
							alt={character.name}
							height={400}
							width={400}
							className='h-48 w-48 object-cover rounded-full'
						/>
					</div>
					<div className='flex flex-col justify-center items-center gap-4 text-gray-100 py-6'>
						<h3 className='text-lg font-bold tracking-tight text-mred'>{character.name}</h3>
						<p className='text-md'>{trimText(character.description)}</p>
					</div>
				</div>
			</Link>
		</article>
	);
};

export default CharacterCard;
