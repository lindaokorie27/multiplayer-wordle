const mongoose = require('mongoose');

const connectToMongo = async () => {
    mongoose
  .connect(process.env.MONGODB_URI, {
    socketTimeoutMS: 30000,
    connectTimeoutMS: 30000,
    useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    if (err) return console.log("Error: ", err);
    console.log(
      "MongoDB Connection -- Ready state is:",
      mongoose.connection.readyState
    );
  });
}
module.exports = connectToMongo;