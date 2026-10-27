async function getPostDetails() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const post = await response.json();

        console.log("Post Details");
        console.log("------------");
        console.log("Title:", post.title);
        console.log("Description:", post.body);
        console.log("Post ID:", post.id);
    } catch (error) {
        console.log("Unable to retrieve post details.");
        console.log("Reason:", error.message);
    }
}

getPostDetails();