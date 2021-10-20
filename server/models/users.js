const db = require('../dbConfig/dbConfig');
const sql = require('sql-template-strings')

class User {
    constructor(data){
        this.id = data.id
        this.username = data.name
    }

    static userById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.query(`SELECT * FROM users WHERE id = $1`, [id])
                let user = new User(userData.rows[0])
                resolve(user)
            } catch (err) {
                reject('User not found')
            }
        })
    }

    get posts(){
        return new Promise (async (resolve,reject) => {
            // try {
                const postData = await db.query('SELECT id, title, body FROM posts WHERE user_id = $1;',[this.id])
                const post = postData.rows.map(p => ({title: p.title, body: p.body, path: `/post/${p.id}`}))
                resolve(post)
            // } catch (err) {
                reject('could not find post')
            // }
        })
    }

    static createUser(userName){
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.query(`INSERT INTO users (name) VALUES ($1) RETURNING *;`,[userName])
                let user = new User(userData.rows[0])
                resolve(user)
            } catch (err) {
                reject('user cannot be created')
            }
        })
    }

    static findUser(username){
        return new Promise (async (resolve, reject) => {
            try {
                let user;
                const userData = await db.query(`SELECT * FROM users WHERE name = $1;`,[username])
                if(!userData.rows.length){
                    user = await User.createUser(username);
                } else {
                    user = new User(userData.rows[0])
                }
                resolve(user);
            } catch (error) {
                reject('err in finding user')
            }
        })
    }
}

module.exports = User