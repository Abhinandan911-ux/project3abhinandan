const mongooes = require('monogoose');

const userSchema = new mongooes.schema({
    email:{type: String, required: true, unique: true },
    password: {type: String, required: ture }
});
module.exports = mongooes.model('User',userSchema);
