// sima PE (egységbe zárással)

// class ConfirmLink {
//   constructor(link) {
//     link.addEventListener('click', (e) => {
//       const resp = confirm('Do you really want to navigate?');
//       if (!resp) {
//         e.preventDefault();
//       }
//     });
//   }
// }

// document.querySelectorAll('a').forEach(link => new ConfirmLink(link));


// Web components, new element
// class ConfirmLink extends HTMLElement {
//   connectedCallback() {
//     this.addEventListener('click', (e) => {
//       const resp = confirm('Do you really want to navigate?');
//       if (resp) {
//         window.location.assign(this.getAttribute('href'));
//       }
//     });
//   }
// }

// customElements.define('confirm-link', ConfirmLink);


// Web components, smarter a element
class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener('click', (e) => {
      const resp = confirm('Do you really want to navigate?');
      if (!resp) {
        e.preventDefault();
      }
    });
  }
}

customElements.define('confirm-link', ConfirmLink, { extends: 'a' });
