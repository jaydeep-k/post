const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost:27017/restful-api", {
    useCreateIndex : true,
    useNewUrlparser: true,
    useUnifiedTopology: true
}).then (() => {
    console.log("connection is successful");
}).catch ((e) => {
    console.log("no connection");
})