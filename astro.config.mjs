// @ts-check
import { defineConfig } from 'astro/config';
import { defineCollection, slug } from 'astro:content';

// https://astro.build/config
const planets = defineCollection({
    // Your schema definition here if you have one
    // For now, let's assume a basic setup that just uses the filename for slugging
    // If you have a schema, you'd add it here
});

export default defineConfig({
    integrations: [],
    collections: {
        planets: {
            // Define how slugs are generated for this collection
            // This example removes numerical prefixes like '001_', '002_'
            // Astro will then automatically slugify the result of this function
            slug: ({ id }) => {
                // Remove any leading numerical prefixes (e.g., '001_', '002_')
                return id.replace(/^\d+_/, '');
            },
        },
    },
});
