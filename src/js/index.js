import { Select } from './select.js';
import { doubleSelect } from './doubleSelect.js';
import { currency } from './currency.js';

export let [select_1, select_2] = [
	new Select('select-1', [
		{
			value: 'USD',
			text: '<img src="./src/image/country/USD.svg" class="select__option-image"/> USD',
			selected: true,
		},
		{ value: 'RUB', text: '<img src="./src/image/country/RUB.svg" class="select__option-image"/> RUB' },
		{ value: 'KZT', text: '<img src="./src/image/country/KZT.svg" class="select__option-image"/> KZT' },
		{ value: 'BYN', text: '<img src="./src/image/country/BYN.svg" class="select__option-image"/> BYN' },
		{ value: 'TRY', text: '<img src="./src/image/country/TRY.svg" class="select__option-image"/> TRY' },
	]),
	new Select('select-2', [
		{
			value: 'USD',
			text: '<img src="./src/image/country/USD.svg" class="select__option-image"/> USD',
		},
		{
			value: 'RUB',
			text: '<img src="./src/image/country/RUB.svg" class="select__option-image"/> RUB',
			selected: true,
		},
		{ value: 'KZT', text: '<img src="./src/image/country/KZT.svg" class="select__option-image"/> KZT' },
		{ value: 'BYN', text: '<img src="./src/image/country/BYN.svg" class="select__option-image"/> BYN' },
		{ value: 'TRY', text: '<img src="./src/image/country/TRY.svg" class="select__option-image"/> TRY' },
	]),
];

doubleSelect([select_1, select_2], 'currency__double');

currency();

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'X-RapidAPI-Key': '3cfb38216dmshdd574704b76d4c5p15b531jsnc43e6f6c1d1d',
// 		'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com',
// 	},
// 	body: encodedParams,
// };

// fetch('https://community-neutrino-currency-conversion.p.rapidapi.com/convert', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
