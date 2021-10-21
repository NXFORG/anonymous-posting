const form = document.getElementById('postForm');

form.addEventListener('submit', e => {
    e.preventDefault();
    let title = postForm.elements['title'].value;
    let name = postForm.elements['name'].value;
    let body = postForm.elements['body'].value;

    submitPost(title, name, body);
})