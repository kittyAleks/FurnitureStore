const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
});
const User = mongoose.model('User', userSchema);
module.exports = User;
