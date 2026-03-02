// sanity/schemas/projects.js
export default {
	name: 'projects',
	title: 'Projects',
	type: 'document',
	fields: [
	  {
		name: 'title',
		title: 'Project title',
		type: 'string',
		description: "What's the title of the project?",
	  },
	  {
		name: 'status',
		title: 'Project status',
		type: 'string',
		description: "What's the status of the project?",
	  },
	  {
		name: 'image',
		title: 'Project image',
		type: 'image',
	  },
	  {
		name: 'imagecaption',
		title: 'Image caption',
		type: 'string',
		description: "What's the image caption?",
	  },
	  {
		title: 'Slug',
		name: 'slug',
		type: 'slug',
		options: {
		  source: 'title',
		  maxLength: 200, // will be ignored if slugify is set
		  slugify: input => input
							   .toLowerCase()
							   .replace(/\s+/g, '-')
							   .slice(0, 200)
		}
	  },
	  {
		title: 'Rich text',
		name: 'blockText',
		type: 'array',
		of: [{type: 'block'}]
	  },
	],
	orderings: [
    {
      title: "Title",
      name: "title",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
  };