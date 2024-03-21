export default {
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        {
        name: "title",
        title: "Project Title",
        type: "string",
        description: "Name of the project",
        },
        {
        name: "description",
        title: "Project Description",
        type: "text",
        description: "Description of the project",
        },
        {
        name: "projectImage",
        title: "Project Image",
        type: "image",
        description: "Upload the main image of the project",
        },
        
    ],
}