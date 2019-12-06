const mongo = require('mongoose');
const Schema = mongo.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    cars: [{
        type: Schema.Types.ObjectID,
        ref: 'car'
    }]
});

module.exports = mongo.model('user', userSchema);