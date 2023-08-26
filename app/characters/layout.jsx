import '../globals.css';
import { Inter } from 'next/font/google';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';

const inter = Inter({ subsets: ['latin'] });

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
