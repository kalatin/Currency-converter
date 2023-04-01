import { select_1, select_2 } from './index.js';

export function currency() {
	const form = document.querySelector('form');
	const input = form.querySelector('input');

	let asMuch = 0;

	form.addEventListener('submit', e => {
		e.preventDefault();
		setInfo();
	});

	console.log(getSelects());

	function setInfo() {
		// const options = {
		// 	method: 'GET',
		// 	headers: {
		// 		'X-RapidAPI-Key': '3cfb38216dmshdd574704b76d4c5p15b531jsnc43e6f6c1d1d',
		// 		'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com',
		// 	},
		// };
		// fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=USD&to=RUB&q=${input.value}`, options)
		// 	.then(response => response.json())
		// 	.then(response => console.log(response))
		// 	.catch(err => console.error(err));
	}
	console.log(select_2);
}

function getSelects() {
	return [document.querySelector('.select-1'), document.querySelector('.select-2')];
}
