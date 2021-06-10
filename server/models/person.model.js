const moongose = require('mongoose');

const PersonSchema = new moongose.Schema({
    firstName: {type: String},
    lastName: {type:String}
},{timestamps:true});

module.exports.Person =moongose.model("Person", PersonSchema);