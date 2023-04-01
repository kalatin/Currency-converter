import { Select } from './select.js';

doubleSelect([
	new Select('select-1', [
		{ value: 'ex1', text: 'Один', selected: true },
		{ value: 'ex2', text: 'Два' },
		{ value: 'ex3', text: 'Три' },
		{ value: 'ex4', text: 'Четыре' },
	]),
	new Select('select-2', [
		{ value: 'ex1', text: 'Один' },
		{ value: 'ex2', text: 'Два', selected: true },
		{ value: 'ex3', text: 'Три' },
		{ value: 'ex4', text: 'Четыре' },
	]),
]);

function doubleSelect(selectArray) {
	// Достаем селекты
	let select_1 = selectArray[0];
	let select_2 = selectArray[1];

	// Текст выбранного select-а
	// let textContent_1 = select_1.selectFieldText.textContent;
	// let textContent_2 = select_2.selectFieldText.textContent;

	// Контейнер и менятель
	let selectsContainer = document.querySelector('.select-double');
	let changeElem = document.createElement('div');
	changeElem.className = 'select-change';
	changeElem.textContent = '<>';

	// Добавляем в контейнер select-ы и менятель
	selectsContainer.append(select_1.selectElem);
	selectsContainer.append(changeElem);
	selectsContainer.append(select_2.selectElem);

	// Событие менятеля
	changeElem.addEventListener('click', changeSelect);

	let textContent_1 = select_1.selectFieldText.textContent;
	let textContent_2 = select_2.selectFieldText.textContent;
	let selected_1 = select_1.selected;
	let selected_2 = select_2.selected;
	function changeSelect() {
		textContent_1 = select_1.selectFieldText.textContent;
		textContent_2 = select_2.selectFieldText.textContent;
		selected_1 = select_1.selected;
		selected_2 = select_2.selected;
		if (select_1.selected && select_2.selected) {
			select_1.changeSelected(selected_2, textContent_2);
			select_2.changeSelected(selected_1, textContent_1);
		}
	}

	// Если option одинаковые
	selectsContainer.querySelectorAll('.select__option').forEach(option => {
		option.addEventListener('click', e => {
			if (select_1.selected === select_2.selected) {
				select_1.changeSelected(selected_2, textContent_2);
				select_2.changeSelected(selected_1, textContent_1);
				textContent_1 = select_1.selectFieldText.textContent;
				textContent_2 = select_2.selectFieldText.textContent;
				selected_1 = select_1.selected;
				selected_2 = select_2.selected;
			} else {
				textContent_1 = select_1.selectFieldText.textContent;
				textContent_2 = select_2.selectFieldText.textContent;
				selected_1 = select_1.selected;
				selected_2 = select_2.selected;
			}
		});
	});
}
