export default {
	name: 'gallery',
	type: 'document',
	title: 'Trips',
	orderings: [
		{
		  title: "Title",
		  name: "title",
		  by: [{ field: "title", direction: "asc" }],
		},
	  ],
	fields: [
		{
		name: 'title',
		title: 'Trip title',
		type: 'string',
		description: "What's the title of the trip?",
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
		title: 'Release date',
		name: 'releaseDate',
		type: 'date',
		options: {
			dateFormat: 'DD-MM-YYYY',
			calendarTodayLabel: 'Today'
			}
		},
	  	{
		name: 'images',
		type: 'array',
		title: 'Images',
		of: [
		  {
			name: 'image',
			type: 'image',
			title: 'Image',
			options: {
			  hotspot: true,
			},
			fields: [
			  {
				name: 'alt',
				type: 'string',
				title: 'Alternative text',
			  },
			],
		  },
		],
		options: {
		  layout: 'grid',
		},
	  },
	  {
		name: 'display',
		type: 'string',
		title: 'Display as',
		description: 'How should we display these images?',
		options: {
		  list: [
			{ title: 'Stacked on top of eachother', value: 'stacked' },
			{ title: 'In-line', value: 'inline' },
			{ title: 'Carousel', value: 'carousel' },
		  ],
		  layout: 'radio', // <-- defaults to 'dropdown'
		},
	  },
	  {
		name: 'zoom',
		type: 'boolean',
		title: 'Zoom enabled',
		description: 'Should we enable zooming of images?',
	  },
	],
	preview: {
	  select: {
		images: 'images',
		image: 'images.0',
	  },
	  prepare(selection) {
		const { images, image } = selection;
  
		return {
		  title: `Trip block of ${Object.keys(images).length} images`,
		  subtitle: `Alt text: ${image.alt}`,
		  media: image,
		};
	  },
	},
  };
  