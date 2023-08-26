import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Home - Marvelme',
	description: 'Explore the captivating world of Marvel characters and comics, where extraordinary heroes and villains come to life. Immerse yourself in the rich narratives and stunning illustrations of iconic characters like Spider-Man, Iron Man, Captain America, and the X-Men.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
