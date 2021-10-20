const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;

const server = express();
server.use(cors());
server.use(express.json());
const posts = require('./controllers/post')
const users = require('./controllers/user')

server.use('/posts/:uid/:pid', posts.show)
server.use('/users/:uid', users.show)
server.use('/posts', posts.index)
server.use('/create', posts.create)
server.listen(port, () => console.log(`Express now departing from port ${port}!`))