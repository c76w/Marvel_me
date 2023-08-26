import md5 from 'md5';
import { NextResponse, NextRequest } from 'next/server';

const baseUrl = process.env.API_BASE_URL;
const publicKey = process.env.PUBLIC_API_KEY;
const privateKey = process.env.PRIVATE_API_KEY;

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request) {
	const { searchParams } = new URL(request.url);
	const searchQuery = searchParams.get('query');
	console.log('Query: ', searchQuery);

	const getTimeStamp = () => Date.now().toString();
	const getHash = (timeStamp) => md5(timeStamp + privateKey + publicKey);

	const timeStamp = getTimeStamp();
	const hash = getHash(timeStamp);
	const query = `ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

	let url = `${baseUrl}/characters?${query}&limit=11`;
	// Check if there is a search query
	if (searchQuery !== '') {
		url = `${baseUrl}/characters?nameStartsWith=${searchQuery}&limit=5&${query}`;
	}

	const response = await fetch(url, { cache: 'no-store' });

	if (!response.ok) {
		// This will activate the closest `error.js` Error Boundary
		//throw new Error('Failed to fetch data');
		return NextResponse.json({ Error: 'Failed to fetch data' }, { status: 500 });
	}

	// const results = response.json();

	// return results;

	const data = await response.json();

	console.log('Data: ', url);

	return NextResponse.json({ data }, { status: 200 });
}
