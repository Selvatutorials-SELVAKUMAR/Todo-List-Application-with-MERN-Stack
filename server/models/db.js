const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost:27017/todolist',{
    useUnifiedTopology : true,
    useNewUrlParser : true,
    useFindAndModify : false
}, err => {
    if(err) console.log(`Error in DB Connection ${err}`)
    console.log(`MongoDB Connection Suceeded...`)
})