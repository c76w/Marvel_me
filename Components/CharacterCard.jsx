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
		<article
			className='card w-full bg-mblack hover:bg-neutral-950 rounded-md shadow-xl text-gray-100 p-8'
			key={character.id}
		>
			<Link
				href={`characters/${character.id}`}
				className='hover:cursor-pointer'
			>
				<div>
					<div className='mb-4'>
						<Image
							src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
							alt={character.name}
							height={400}
							width={400}
							className='h-48 w-48 object-cover rounded-full mx-auto'
						/>
					</div>
					<div className='text-gray-100 py-6'>
						<h3 className='text-lg text-center font-bold tracking-tight text-mred mb-4'>
							{character.name}
						</h3>
						<p className='text-md break-words'>
							{trimText(character.description)}
						</p>
					</div>
				</div>
			</Link>
		</article>
	);
};

export default CharacterCard;
