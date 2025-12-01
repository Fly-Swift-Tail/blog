import { Application } from "@hotwired/stimulus";
import MobileMenuController from "./controllers/mobile_menu_controller.js";

// Start Stimulus application
const application = Application.start();

// Register controllers
application.register("mobile-menu", MobileMenuController);
