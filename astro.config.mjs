// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

import { defineConfig } from 'astro/config'
import { astroImageTools } from "astro-imagetools";

export default defineConfig({
    
    integrations: [astroImageTools],
    // Enable the Vue renderer to support Vue components.
	// renderers: ['@astrojs/renderer-vue'],

    site: 'https://cognition.paulapplegate.com/' // Currently doesn't work in @astrojs/rss 0.2.0, so site URL needs to be defined in rss.xml.js.
})
