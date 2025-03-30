document.getElementById('postForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    let title = document.getElementById('title').value.trim();
    let body = document.getElementById('body').value.trim();
    let responseBox = document.getElementById('response');

    // Validation: Ensure both fields are filled
    if (!title || !body) {
        responseBox.innerHTML = "<p style='color: red;'>Both fields are required.</p>";
        return;
    }

    let postData = {
        title: title,
        body: body,
        userId: 1
    };

    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        });

        let data = await response.json();

        // Display response
        responseBox.innerHTML = `
            <h3>Post Created Successfully!</h3>
            <p><strong>ID:</strong> ${data.id}</p>
            <p><strong>Title:</strong> ${data.title}</p>
            <p><strong>Body:</strong> ${data.body}</p>
        `;

        // Clear form fields
        document.getElementById('postForm').reset();
    } catch (error) {
        responseBox.innerHTML = "<p style='color: red;'>Failed to submit post. Try again later.</p>";
        console.error("Error:", error);
    }
});
