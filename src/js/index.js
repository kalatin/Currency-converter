import { Select } from './select.js';

doubleSelect([
	new Select('select-1', [
		{ value: 'ex1', text: 'Один' },
		{ value: 'ex2', text: 'Два' },
		{ value: 'ex3', text: 'Три' },
		{ value: 'ex4', text: 'Четыре' },
	]),
	new Select('select-2', [
		{ value: 'ex1', text: 'Один' },
		{ value: 'ex2', text: 'Два' },
		{ value: 'ex3', text: 'Три' },
		{ value: 'ex4', text: 'Четыре' },
	]),
]);

function doubleSelect(selectArray) {
	let select_1Selected;
	let select_2Selected;

	let select_1 = selectArray[0];
	let select_2 = selectArray[1];
	let selectsContainer = document.querySelector('.select-double');
	let changeElem = document.createElement('div');
	changeElem.className = 'select-change';
	changeElem.textContent = '<>';

	selectsContainer.append(select_1.selectElem);
	selectsContainer.append(changeElem);
	selectsContainer.append(select_2.selectElem);

	changeElem.addEventListener('click', changeSelect);

	function changeSelect() {
		select_1Selected = select_1.selectElem.dataset.selected;
		select_2Selected = select_2.selectElem.dataset.selected;

		let textContent1 = select_1.selectField.querySelector('.select__field-text').textContent;
		let textContent2 = select_2.selectField.querySelector('.select__field-text').textContent;
		if (select_1Selected && select_2Selected) {
			select_1.changeSelected(select_2Selected, textContent2);
			select_2.changeSelected(select_1Selected, textContent1);
		}
	}

	selectsContainer.querySelectorAll('.select__option').forEach(option => {
		option.addEventListener('click', e => {
			let select_1SelectedCache = select_1Selected;
			let select_2SelectedCache = select_2Selected;
			select_1Selected = select_1.selectElem.dataset.selected;
			select_2Selected = select_2.selectElem.dataset.selected;
			if (select_1Selected === select_2Selected) {
				console.log(select_1Selected, select_2Selected);
				console.log(select_1SelectedCache, select_2SelectedCache);
			}
		});
	});
}
