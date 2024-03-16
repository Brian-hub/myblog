// Example array of blog posts
const blogPosts = [
    {
        title: "First Post",
        date: "March 16, 2024",
        content: "This is the content of the first post. Welcome to my blog!"
    },
    {
        title: "Another Day, Another Post",
        date: "March 17, 2024",
        content: "Here's some more content. Blogging is fun!"
    }
    // Add more blog posts here
];

// Function to display posts
function displayPosts() {
    const blogPostsElement = document.getElementById("blogPosts");
    blogPosts.forEach(post => {
        const postElement = document.createElement("article");
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.date}</p>
            <p>${post.content}</p>
        `;
        blogPostsElement.appendChild(postElement);
    });
}

// Call the function to display posts when the page loads
document.addEventListener("DOMContentLoaded", displayPosts);
