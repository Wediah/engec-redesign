export default {
    name: "reviews",
    title: "Reviews",
    type: "document",
    fields: [
        {
        name: "name",
        title: "Client Name",
        type: "string",
        description: "Name of the client",
        },
        {
        name: "description",
        title: "Review Description",
        type: "text",
        description: "Review from the client",
        },
    ],
}