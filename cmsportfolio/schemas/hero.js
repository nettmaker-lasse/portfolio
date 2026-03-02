// sanity/schemas/homepage.js
export default {
	name: 'hero',
	title: 'Hero',
	type: 'document',
	fields: [
	  {
		name: 'title',
		title: 'Hero title',
		type: 'string',
		description: "What's the title of the homepage hero?",
	  },
	  {
		name: 'subtitle',
		title: 'Hero subtitle',
		type: 'string',
		description: "What's the subtitle of the homepage hero?",
	  },
	  {
		name: 'image',
		title: 'Hero image',
		type: 'image',
	  },
	  {
		name: 'imagecaption',
		title: 'Image caption',
		type: 'string',
		description: "What's the image caption?",
	  },
	  {
		name: 'cta',
		description: "What's URL for the homepage CTA?",
		title: 'CTA',
		type: 'slug',
		options: {
		  maxLength: 200,
		},
		validation: (Rule) => [Rule.required().error('Field cannot be empty')],
	  },
	],
  };


