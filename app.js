if(process.env.NODE_ENV !== "production"){
    require("dotenv").config();
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const express = require("express");
const app = express();

console.log(stripeSecretKey)


app.set("view engine", "ejs")
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(3000, (req, res) => {
    console.log("Server is running!");
})