const mongoose = require("mongoose")
let mongo_uri = 'mongodb+srv://ken:elam0417@cluster0.wxgkica.mongodb.net/?retryWrites=true&w=majority'

mongoose.Promise = global.Promise

// mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })
mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

  .then(() => {
    console.log('Successfully connected to database')
  })

  .catch(error => {
    console.error('Error connecting to MongoDB database', error)
  })

module.exports = mongoose
