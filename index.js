// Write your code here!

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    displayPosts(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  posts.forEach((post) => {
    // Create the elements
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    // Add the post title and body
    h1.textContent = post.title;
    p.textContent = post.body;

    // Append elements to the list item
    li.appendChild(h1);
    li.appendChild(p);

    // Append the list item to the unordered list
    postList.appendChild(li);
  });
}

fetchPosts();