async function getAvailablePosts() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const posts = await response.json();

        if (!Array.isArray(posts)) {
            throw new Error("Unexpected data received from the API.");
        }

        const selectedPosts = posts
            .filter((post) => post.userId === 1)
            .slice(0, 5);

        if (selectedPosts.length === 0) {
            console.log("No posts found.");
            return;
        }

        console.log("Selected Posts");
        console.log("--------------");

        selectedPosts.forEach((post) => {
            console.log(`Post ID: ${post.id}`);
            console.log(`Title: ${post.title}`);
            console.log(`Description: ${post.body}`);
            console.log("----------------");
        });
    } catch (error) {
        console.error("Unable to retrieve posts:", error.message);
    }
}

getAvailablePosts();