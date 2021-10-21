const submitPost = async (title, name, body) => {
    try {
        let post = await fetch('http://localhost:3000/create',{
            method: 'POST',
            body: JSON.stringify(
                {
                    title: title,
                    name: name,
                    body: body
                }
            ),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        });
        const result = await post.json();
        console.log(result)
        window.location.href = `./post.html?${result.rows[0].user_id}-${result.rows[0].id}`;
    } catch(err) {
        console.log(`Client error: ${err}`)
    }
}