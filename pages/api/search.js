import axios from 'axios';

export default async function handler(req, res)
{const options = {
  method: 'GET',
  url: 'https://ott-details.p.rapidapi.com/search',
  params: {
    title: 'Endgame',
    page: '1'
  },
  headers: {
    'X-RapidAPI-Key': '8e1a3efce4mshdce605241be5a41p1fce0ejsne620a81b5756',
    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
  }
};

try {
	let response = await axios(options);
  res.status(200).json(response.data);
	console.log(response.data);
} catch (error) {
	console.error(error.response);
}}