import { Select } from './select.js';
import { doubleSelect } from './doubleSelect.js';
import { Currency } from './currency.js';

let optionsArray = [
	{
		value: 'USD',
		text: '<img src="./src/image/country/USD.svg" class="select__option-image"/> USD',
	},
	{ value: 'RUB', text: '<img src="./src/image/country/RUB.svg" class="select__option-image"/> RUB' },
	{ value: 'KZT', text: '<img src="./src/image/country/KZT.svg" class="select__option-image"/> KZT' },
	{ value: 'BYN', text: '<img src="./src/image/country/BYN.svg" class="select__option-image"/> BYN' },
	{ value: 'TRY', text: '<img src="./src/image/country/TRY.svg" class="select__option-image"/> TRY' },
];
export let [select_1, select_2] = [
	new Select('select-1', optionsArray.concat()),
	new Select('select-2', optionsArray.concat()),
];

doubleSelect([select_1, select_2], 'currency__double');

export const currency = new Currency();
