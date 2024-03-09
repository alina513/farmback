const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();


const app = require("./app");

const {DB_HOST = "mongodb+srv://Alina:B0Ccutk9bEWfFPoE@cluster0.kscvqe6.mongodb.net/farmshop", PORT = 3000, SECRET_KEY = "444478"} = process.env;
mongoose.set("strictQuery", true);

mongoose.connect(DB_HOST)
.then(()=> {console.log("Database connection successful");
app.listen(PORT, () => {
    console.log("Server is running. Use our API on port: 3000");
  })})
.catch(error => {console.log(error.message);
    process.exit(1);
})