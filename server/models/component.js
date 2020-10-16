let mongoose = require('mongoose');
let Schema = mongoose.Schema; // alias
let Model = mongoose.model; // alias

let ComponentSchema = new Schema({
    name: String,
    phone: String,
    email: String
},
{
    collection: 'contacts'
});

module.exports.Model = Model('Component', ComponentSchema);