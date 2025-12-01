import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["menu"];

  connect() {
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.menuTarget.classList.toggle("is-open", this.isOpen);
  }

  close() {
    this.isOpen = false;
    this.menuTarget.classList.remove("is-open");
  }
}
