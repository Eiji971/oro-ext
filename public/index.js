import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root'); // Get the root DOM element

const reactRoot = createRoot(root); // Create a root for your React app

reactRoot.render(<App />); // Render your app inside the root
