import button from "$lib/button.module.css";

// Error: Module '"*.module.css"' has no exported member 'danger'.
import { danger } from "$lib/button.module.css";

button.danger; // No intellisense here
button.nonExisting;
danger;
