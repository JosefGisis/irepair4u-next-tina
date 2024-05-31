export const servicesPageBlocks = [
	{
		name: "servicesSection",
		label: "Services Section",
		type: "object",
		fields: [
			{
				name: "servicesSectionSegment",
				label: "Services Section Segment",
				type: "object",
				list: true,
				required: true,
				fields: [
					{
						name: "title",
						label: "Title",
						type: "string",
						required: true,
					},
					{
						description:
							"Add an id so you can link to this section of the page elsewhere. ID should be written in kebab-case (lowercase with hyphens) for example: phone-services.",
						name: "id",
						label: "ID",
						type: "string",
					},
					{
						name: "paragraphs",
						label: "Paragraphs",
						type: "string",
						list: true,
					},
				],
			},
		],
	},
	{
		name: "coverageSection",
		label: "Coverage Section",
		type: "object",
		fields: [
			{
				name: "coverageSectionSegment",
				label: "Coverage Section Segment",
				type: "object",
				list: true,
				required: true,
				fields: [
					{
						name: "title",
						label: "Title",
						type: "string",
						required: true,
					},
					{
						description:
							"Add an id so you can link to this section of the page elsewhere. ID should be written in kebab-case (lowercase with hyphens) for example: phone-services.",
						name: "id",
						label: "ID",
						type: "string",
					},
					{
						name: "paragraphs",
						label: "Paragraphs",
						type: "string",
						list: true,
					},
				],
			},
		],
	},
	{
		name: "salesSection",
		label: "Sales Section",
		type: "object",
		fields: [
			{
				name: "salesSectionSegment",
				label: "Sales Section Segment",
				type: "object",
				list: true,
				required: true,
				fields: [
					{
						name: "title",
						label: "Title",
						type: "string",
						required: true,
					},
					{
						description:
							"Add an id so you can link to this section of the page elsewhere. ID should be written in kebab-case (lowercase with hyphens) for example: phone-services.",
						name: "id",
						label: "ID",
						type: "string",
					},
					{
						name: "paragraphs",
						label: "Paragraphs",
						type: "string",
						list: true,
					},
				],
			},
		],
	},
]
