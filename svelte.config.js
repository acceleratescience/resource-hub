import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Imports for MDsveX
import { defineMDSveXConfig, mdsvex } from 'mdsvex'; // Import mdsvex preprocessor itself
import remarkPrism from 'remark-prism'; // For syntax highlighting

// Define your MDsveX configuration
const mdsvexConfig = defineMDSveXConfig({
    extensions: ['.svx', '.md'], // Define which extensions MDsveX should process
    smartypants: true, // Enables smart quotes, dashes, etc. (optional)
    remarkPlugins: [
        remarkPrism, // This will add Prism.js classes for syntax coloring
    ],
    rehypePlugins: [
        // Any other Rehype plugins you might have had before, or empty
    ],
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: ['.svelte', '.svx', '.md'], // Svelte's recognized extensions
    preprocess: [
        vitePreprocess(),
        mdsvex(mdsvexConfig) // Apply the MDsveX preprocessor
    ],
    kit: {
        adapter: adapter()
        // You can add other kit configurations here
    }
};

export default config;