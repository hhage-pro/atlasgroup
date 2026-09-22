import {defineConfig} from 'vite';
// BASE_PATH=/repo-name/ for a GitHub Pages sub-path build; default root for the Express server.
export default defineConfig({base:process.env.BASE_PATH||'/'});
