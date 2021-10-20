let id = window.location.search.slice(1);

const viewPost = async () => {
    try {
        let post = await fetch(`http://localhost:3000/posts/${id}`);
        let result = await post.json();
        let title = result.post.title;
        let username = result.username;
        let body = result.post.body;

        displayPost(title, username, body);

    } catch(err) {
        console.log(`Client error: ${err}`);
    }
}


const displayPost = (title, username, body) => {
    let titleField = document.getElementById('postTitle');
    let nameField = document.getElementById('username');
    let bodyField = document.getElementById('postBody');
    let routeField = document.getElementById('userRoute');
    let routeSpan = document.getElementById('routeSpan');
    let routeLink = document.getElementById('routeLink');

    titleField.textContent = title;
    nameField.textContent = username;
    bodyField.textContent = body;
    routeField.textContent = `Your post route: /posts/${id}`;
}

viewPost();

