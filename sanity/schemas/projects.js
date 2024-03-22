import { defineField, defineType } from "sanity"

export default defineType({
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        defineField({
        name: "title",
        title: "Project Title",
        type: "string",
        description: "Name of the project",
        validation: (rule) => rule.required(),
        }),
        defineField({
        name: "description",
        title: "Project Description",
        type: "text",
        description: "Description of the project",
        validation: (rule) => rule.required(),
        }),
        defineField({
        name: "projectImage",
        title: "Project Image",
        type: "image",
        description: "Upload the main image of the project",
        fields: [
            {
                name: "alt",
                title : "Alt",
                type: "string",
                description: 'Describe the photo'
            },
        ],
        options: {
            hotspot: true,
            metadata: ["lqip"],
        },
        validation: (rule) => rule.required(),
        }),
        
    ],
});