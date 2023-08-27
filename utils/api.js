import md5 from 'md5';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_API_KEY;
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_API_KEY;

const getTimeStamp = () => Date.now().toString();
const getHash = (timeStamp) => md5(timeStamp + privateKey + publicKey);

const timeStamp = getTimeStamp();
const hash = getHash(timeStamp);
const query = `ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`;

//Search for a character from the API
export const searchCharacters = async (querySearch = '') => {
	const url = `${baseUrl}/characters?${query}&nameStartsWith=${querySearch}&limit=30`;
	const response = await fetch(url);

	//Check if the daily API requests has been reached
	if (response.status == 429) {
		throw new Error(
			'There was a problem loading the data, please try again later.'
		);
	}
	//Check for any other errors
	if (!response.ok) {
		throw new Error('There was a network error, please try again later.');
	}

	const data = response.json();

	return data;
};

//Get the characters from the API
export const getCharacters = async (offset = 0, limit = 100) => {
	const url = `${baseUrl}/characters?${query}&limit=${limit}&offset=${offset}`;
	const response = await fetch(url);

	//Check if the daily API requests has been reached
	if (response.status == 429) {
		throw new Error(
			'There was a problem loading the data, please try again later.'
		);
	}
	//Check for any other errors
	if (!response.ok) {
		throw new Error('There was a network error, please try again later.');
	}

	const data = response.json();

	return data;
};

//Get the character details from the API
export const getCharacterDetail = async (characterId) => {
	const url = `${baseUrl}/characters/${characterId}?${query}`;
	const response = await fetch(url);

	//Check if the daily API requests has been reached
	if (response.status == 429) {
		throw new Error(
			'There was a problem loading the data, please try again later.'
		);
	}
	//Check for any other errors
	if (!response.ok) {
		throw new Error('There was a network error, please try again later.');
	}

	const data = response.json();

	return data;
};

//Get the character comics from the API
export const getCharacterComics = async (characterId) => {
	const url = `${baseUrl}/characters/${characterId}/comics?${query}`;
	const response = await fetch(url);

	//Check if the daily API requests has been reached
	if (response.status == 429) {
		throw new Error(
			'There was a problem loading the data, please try again later.'
		);
	}
	//Check for any other errors
	if (!response.ok) {
		throw new Error('There was a network error, please try again later.');
	}

	const data = response.json();

	return data;
};
