let mongoose = require('mongoose');
let Schema = mongoose.Schema; // alias
let Model = mongoose.model; // alias

let userSchema = new Schema({
    username:String,
    password: String,
    email: String,
    other: String
},
{
    collection: 'user'
});

module.exports.Model = Model('User', userSchema);