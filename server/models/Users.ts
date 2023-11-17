const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  status: String,
});
const User = mongoose.model('User', userSchema);
module.exports = User;
