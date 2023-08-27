import React from 'react';
import '../globals.css';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

export const metadata = {
	title: 'Characters - MARVELme',
	description: 'Browse the Marvel Character Cards',
};

export default function CharactersLayout({ children }) {
	return (
		<>
			<Header />
			<main className='flex flex-col container p-4'>{children}</main>
			<Footer />
		</>
	);
}
