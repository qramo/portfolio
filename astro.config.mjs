// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://qramo.github.io',
	base: 'astro-test3',
	integrations: [
		starlight({
			title: 'Portfolio',
			social: {
				//github: 'https://github.com/withastro/starlight',
				twitter:'https://x.com/qramo'
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	output: 'static',
});
