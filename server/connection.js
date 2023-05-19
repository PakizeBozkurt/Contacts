const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://pakiozihak:hGJ7Q468awzxwEOC@hr.jdtf367.mongodb.net/?retryWrites=true&w=majority",
      {
        //mongodb+srv://pakiozihak:hGJ7Q468awzxwEOC@hr.jdtf367.mongodb.net/?retryWrites=true&w=majority

        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Successfully connected to MongoDB.');
  } catch (err) {
    console.error('Error connecting to MongoDB: ', err);
  }
}
module.exports = connect;