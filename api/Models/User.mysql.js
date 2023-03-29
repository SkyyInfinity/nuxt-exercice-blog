const sql = require('../config/mysql');

const User = function(User) {
    this.firstName = User.firstName;
    this.lastName = User.lastName;
    this.email = User.email;
    this.password = User.password;
    this.roles = User.roles;
    this.createdAt = User.createdAt;
}

User.create = (newUser, result) => {
    sql.query('INSERT INTO user SET ?', newUser, (err,res) => {
        if(err){
            result(err,null)
            return;
        }
        result(null,{id:res.insertId, ...newUser})
    })
}

User.getAll = (result) => {
    sql.query('SELECT * FROM user', (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null, {data:res})
    })
}

User.getOne  = (id, result) => {
    sql.query(`SELECT * FROM user WHERE id=${id}`, (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null, {data:res})
    })
}

User.updateById = (id,user, result ) => {
    sql.query(`UPDATE user SET firstName = ? ,  lastName = ? ,  email = ? ,  password = ? ,  roles = ? ,  createAt = ?  WHERE id = ${id} `,
        [
            user.firstName,
            user.lastName,
            user.email,
            user.password,
            user.roles,
            user.createdAt
        ], (err,res) => {
            if(err){
                result(err,null);
                return;
            }
            result(null,{data:res})
        })
}
User.deleteById = (id, result ) => {
    sql.query(`DELETE FROM user WHERE id = ${id}`, (err,res) => {
        if(err){
            result(err,null);
            return;
        }
        result(null,{data:res})
    })
}


module.exports = User;