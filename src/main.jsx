import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App.jsx';
import './index.css';

// vite-react-ssg owns the router (data router). At build time it prerenders
// every static path to HTML; in the browser it hydrates the same tree.
export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
});
