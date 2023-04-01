export class Select {
	constructor(name, options) {
		this.name = name;
		this.isOpen = false;

		this.selectElem = document.createElement(`div`);
		this.selectElem.className = `select ${this.name}`;
		this.selectElem.dataset.selected = '';
		this.selectElem.dataset.name = this.name;
		this.selectElem.innerHTML = `
		<div class="select__field" tabindex="0">
			<div class="select__field-text"></div>
			<div class="select__field-mark">
				<span></span>
				<span></span>
			</div>
		</div>
		<div class="select__options">
		</div>`;

		this.selected = this.selectElem.dataset.selected;
		this.selectField = this.selectElem.querySelector('.select__field');
		this.selectFieldText = this.selectElem.querySelector('.select__field-text');
		this.selectOptions = this.selectElem.querySelector('.select__options');

		// Добавление option-а
		if (options && options.length > 0) {
			options.forEach(option => {
				if (option.selected === true) {
					this.changeSelected(option.value, option.text);
				}
				this.selectOptions.insertAdjacentHTML(
					'beforeend',
					`<div class="select__option" data-value="${option.value}">${option.text}</div>`
				);
			});
		}

		// Добавляем открытие при клике на select
		this.selectField.addEventListener('click', () => {
			this.open();
		});

		// Клик на option
		this.options = this.selectElem.querySelectorAll('.select__option');
		this.options.forEach(option => {
			option.addEventListener('click', () => {
				this.changeSelected(option.dataset.value, option.textContent);
				this.close();
			});
		});

		// Клик за пределы select-а
		document.addEventListener('click', e => {
			if (this.isOpen === true) {
				if (!e.target.closest(`[data-name="${this.selectElem.dataset.name}"]`)) {
					this.close();
				} else {
					return;
				}
			}
		});
	}

	open() {
		this.isOpen = true;
		this.selectElem.classList.add('open');
	}

	close() {
		this.isOpen = false;
		this.selectElem.classList.remove('open');
	}

	changeSelected(value, text) {
		this.selectElem.dataset.selected = value;
		this.selectFieldText.textContent = text;
		this.selected = this.selectElem.dataset.selected;
	}
}
