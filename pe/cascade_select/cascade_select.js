// 1. Adatok kiolvasása a DOMból
// 2. + 3. Régi DOM eltűntetése + DOM megjelenítése
// 4. Dinamikus működés bekötése
// (5. Adatok visszaírása/felhasznalása az eredeti formátumban)

class CascadeSelect {
  constructor(originalSelect) {
    this.originalSelect = originalSelect;
  }

  init() {
    this.collectOptions();
    this.showCascadeSelects();
    this.hideOriginalSelect();
    this.addGroupChangeListener();
  }

  collectOptions() {
    this.options = new Map();
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

    this.originalSelect.insertAdjacentElement('afterend', this.groupSelect);
    this.groupSelect.insertAdjacentElement('afterend', this.itemSelect);
  }

  hideOriginalSelect() {
    this.originalSelect.remove();
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
    this.groupSelect.addEventListener('change', () => this.populateChildSelect());
  }
}

const cascadeSelect = new CascadeSelect(document.querySelector('select'));
cascadeSelect.init();
