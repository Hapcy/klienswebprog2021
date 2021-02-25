// 1. Adatok kiolvasása a DOMból
// 2. + 3. Régi DOM eltűntetése + DOM megjelenítése
// 4. Dinamikus működés bekötése
// (5. Adatok visszaírása/felhasznalása az eredeti formátumban)

class CascadeSelect extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.collectOptions();
    this.showCascadeSelects();
    this.addGroupChangeListener();
    this.addItemChangeListener();
  }

  collectOptions() {
    this.options = new Map();
    this.originalSelect = this.querySelector('select');
    const optGroups = this.originalSelect.querySelectorAll('optgroup');
    optGroups.forEach((optGroup) => {
      const label = optGroup.label;

      const childOptionElements = optGroup.querySelectorAll('option');

      const childOptions = [];
      childOptionElements.forEach((childOptionElement) => {
        childOptions.push({
          label: childOptionElement.innerText,
          value: childOptionElement.value,
        });
      });

      this.options.set(label, childOptions);
    });
  }

  showCascadeSelects() {
    this.groupSelect = document.createElement('select');
    this.itemSelect = document.createElement('select');

    this.itemSelect.name = this.originalSelect.name;

    const keys = [...this.options.keys()];
    keys.forEach((key) => {
      const groupOption = document.createElement('option');
      groupOption.innerText = key;
      groupOption.value = key;
      this.groupSelect.insertAdjacentElement('beforeend', groupOption);
    });

    this.populateChildSelect();

    this.shadowRoot.append(this.groupSelect);
    this.groupSelect.insertAdjacentElement('afterend', this.itemSelect);
  }

  populateChildSelect() {
    const currentGroup = this.groupSelect.value;
    const childOptions = this.options.get(currentGroup);

    this.itemSelect.innerHTML = '';

    childOptions.forEach(({ label, value }) => {
      const option = document.createElement('option');
      option.innerText = label;
      option.value = value;
      this.itemSelect.insertAdjacentElement('beforeend', option);
    });
  }

  addGroupChangeListener() {
    this.groupSelect.addEventListener('change', () =>
      this.populateChildSelect(),
    );
  }

  addItemChangeListener() {
    this.itemSelect.addEventListener('change', () => {
      this.originalSelect.value = this.itemSelect.value;
    });
  }
}

customElements.define('cascade-select', CascadeSelect);
