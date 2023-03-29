const sql = require('../config/mysql');

const Post = function(Post) {
    this.title = Post.title;
    this.author = Post.author;
    this.content = Post.content;
    this.date = Post.date;
}

Post.create = (newPost, result) => {
    sql.query('INSERT INTO post SET ?', newPost, (err,res) => {
        if(err){
            result(err,null)
            return;
        }
        result(null,{id:res.insertId, ...newPost})
    })
}

Post.getAll = (result) => {
    sql.query('SELECT * FROM post', (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null, {data:res})
    })
}

Post.getOne  = (id, result) => {
    sql.query(`SELECT * FROM post WHERE id=${id}`, (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null, {data:res})
    })
}

Post.updateById = (id,post, result ) => {
    sql.query(`UPDATE post SET title = ? ,  author = ? ,  content = ? ,  date = ?  WHERE id = ${id} `,
        [post.title,post.author,post.content,post.date], (err,res) => {
            if(err){
                result(err,null);
                return;
            }
            result(null,{data:res})
        })
}
Post.deleteById = (id, result ) => {
    sql.query(`DELETE FROM post WHERE id = ${id}`, (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null,{data:res})
    })
}


module.exports = Post;