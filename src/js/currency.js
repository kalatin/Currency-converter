import { select_1, select_2 } from './index.js';

export class Currency {
	constructor() {
		this.form = document.querySelector('form');
		this.input = this.form.querySelector('input');
		this.from = 1;

		this.form.addEventListener('submit', e => {
			e.preventDefault();
			this.from = this.input.value;

			this.getInfo();
		});

		this.input.value = '1';
		this.from = this.input.value;
		this.getInfo();
	}

	getInfo() {
		if (select_1.selected && select_2.selected) {
			fetch(`https://open.er-api.com/v6/latest/${select_1.selected}`)
				.then(response => {
					return response.json();
				})
				.then(response => {
					this.setInfo(response.rates[select_2.selected]);
				})
				.catch(err => console.error(err));
		}
	}

	setInfo(asMuch) {
		let from = document.querySelector('.currency__num-total');
		let to = document.querySelector('.currency__num');

		from.textContent = `${Number(this.from).toLocaleString(undefined, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})} ${select_1.selected}`;
		to.textContent = `${(asMuch * this.from).toLocaleString(undefined, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		})} ${select_2.selected}`;
		this.input.value = '';
	}
}
