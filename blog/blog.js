




// JavaScript to display each new author name as a separate entry
let authorInput = document.getElementById('author_name');
let contentInput = document.getElementById('content');
let btn = document.getElementById('btn');
let postContainer = document.querySelector('.post_container');

// Add a click event listener to the button
btn.addEventListener('click', function () {
    const authorName = authorInput.value.trim();
    const content = contentInput.value.trim();

    // Check if input is not empty
    if (authorName !== "") {
        // Create a new div for the blog post
        let newPost = document.createElement('div');
        newPost.classList.add('post_box'); // Add class for styling

        // Create and add the author name to the new post
        let authorDisplay = document.createElement('p');
        let authorContent = document.createElement('div');
        authorDisplay.classList.add('author_name');
        authorContent.classList.add('content')
        authorDisplay.textContent = `Author: ${authorName}`;
        
        authorContent.textContent = `${content}`;
        
        newPost.appendChild(authorDisplay);
        newPost.appendChild(authorContent);

        // Append the new post to the post container
        postContainer.appendChild(newPost);

        // Clear the input field after adding the new post
        authorInput.value = '';
    } else {
        alert("Please enter an author name.");
    }
});
