// sanity/schemas/projects.js
export default {
	name: "posts",
	title: "Posts",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Post title",
			type: "string",
			description: "What's the title of the post?",
		},
		{
			name: "status",
			title: "Post status",
			type: "string",
			description: "What's the status of the post?",
		},
		{
			name: "image",
			title: "Post image",
			type: "image",
		},
		{
			name: "imagefrontpage",
			title: "Project frontpage image",
			type: "image",
		},
		{
			name: "imagecaption",
			title: "Image caption",
			type: "string",
			description: "What's the image caption?",
		},
		{
			title: "Release date",
			name: "releaseDate",
			type: "date",
			options: {
				dateFormat: "DD-MM-YYYY",
				calendarTodayLabel: "Today",
			},
		},
		{
			title: "Slug",
			name: "slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 200, // will be ignored if slugify is set
				slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
			},
		},
		{
			title: "Rich text",
			name: "blockText",
			type: "array",
			of: [
				{
					type: "block",
					marks: {
						annotations: [
							{
								name: "link",
								type: "object",
								title: "External link",
								fields: [
									{
										name: "href",
										type: "url",
										title: "URL",
									},
									{
										title: "Open in new tab",
										name: "blank",
										type: "boolean",
									},
								],
							},
							{
								name: "internalLink",
								type: "object",
								title: "Internal link",
								fields: [
									{
										name: "reference",
										type: "reference",
										title: "Reference",
										to: [
											{ type: "posts" },
											// other types you may want to link to
										],
									},
								],
							},
						],
					},
				},
			],
		},
	],
	orderings: [
		{
			title: "Title, New",
			name: "releaseDateDesc",
			by: [
				{
					field: "title",
					direction: "desc",
				},
			],
		},
		{
			title: "Title, Old",
			name: "releaseDateAsc",
			by: [
				{
					field: "title",
					direction: "asc",
				},
			],
		},
	],
};
