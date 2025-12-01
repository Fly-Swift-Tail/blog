import { Application, Controller } from "@hotwired/stimulus";

// Mobile menu controller
class MobileMenuController extends Controller {
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

// Start Stimulus application
const application = Application.start();

// Register controllers
application.register("mobile-menu", MobileMenuController);
