const mongo = require('mongoose');
const Schema = mongo.Schema;

const carSchema = new Schema({
    make: String,
    model: String,
    year: Number,
    seller: {
        type: Schema.Types.ObjectID,
        ref: 'user'
    }

});

module.exports = mongo.model('car', carSchema);