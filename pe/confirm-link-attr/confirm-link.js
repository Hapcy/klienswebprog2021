class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener('click', (e) => {
      const resp = confirm(this.message);
      this.message = this.message + ' 1';
      if (!resp) {
        e.preventDefault();
      }
    });
  }

  get message() {
    return this.getAttribute('message');
  }
  set message(newMessage) {
    if (newMessage) {
      this.setAttribute('message', newMessage);
    } else {
      this.removeAttribute('message');
    }
  }
}

customElements.define('confirm-link', ConfirmLink, { extends: 'a' });
