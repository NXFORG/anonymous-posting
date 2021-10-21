const db = require('../dbConfig/dbConfig')
const sql = require('sql-template-strings')

const User = require('./users');

class Post {
    constructor(data, user){
        this.id = data.id;
        this.title = data.title;
        this.name = data.name;
        this.body = data.body;
        this.userId = {name : data.user_name, path: `/users/${data.user_id}`};
    }

    static get all(){
        return new Promise(async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT id, title, name FROM posts;`)
                console.log(postData.rows)
                let posts = postData.rows.map(a => new Post(a))
                console.log(posts)
                resolve(posts)
            } catch (err) {
                reject('cannot get all posts')
            }
        })
    }
    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                let postQuery = await db.query(`SELECT posts.*, users.name as user_name FROM posts JOIN users on posts.id = $1;`, [id])
                let post = new Post(postQuery.rows[0])
                resolve(post)
            } catch (err) {
                reject('post does not exist')
            }
        })
    }
    static create (postData){
        return new Promise(async (resolve, reject) => {
            try {
                let {title, name, body} = postData
                let user = await User.findUser(name);
                let insertPost = await db.query(`INSERT INTO posts (title, name, body, user_id) values ($1, $2, $3, $4) RETURNING *;`,[title, name, body,user.id])
                resolve(insertPost)
            } catch (err) {
                reject('post could not be created')
            }
        })
    }
    static posts(id, userid){
        return new Promise (async (resolve,reject) => {
            try {
                const postData = await db.query('SELECT posts.id, posts.title, posts.name, posts.body, users.name AS user_name, users.id AS user_id FROM posts JOIN users on users.id = posts.user_id WHERE posts.id = $1 AND users.id = $2;',[id, userid])
                console.log(postData)
                const post = new Post(postData.rows[0])
                resolve(post)
            } catch (err) {
                reject('could not find post')
            }
        })
    }
}

module.exports = Post