# LAP 2 Code Challenge

## installation
- clone Repo using this link https://github.com/NXFORG/anonymous-posting.git.
- open terminal and navigate to the server folder.
- run npm i.

## usage
- in the server folder run `docker compose up`.
- navigate to the client folder and run either `open index.html` or `start index.html`.

## Implementation
- docker-compose.yaml to run the server side.
- worked on the getting the right information from the tables in database.
- made a create function which makes a post with the right json inputs.
- used classes to define post and user.
- used Postman to test the server side while in development.
- client made api calls to post data from input fields on the home page.
- also made an api call to receive the post that was just made using user and post id.

## wins and challenges

### wins
- managed to get the posts based on the user id.
- successfully implemented the create post function.

### challenges
- getting only one user post using the user and post id
- misspelling constructor in the post class which created a bug that took us 15 mins to figure out.