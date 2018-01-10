import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"

// console.log("Hello world!")

// Express setup, including JSON body parsing.
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Tells express to add the "Access-Control-Allow-Origin" header to allow requests from anywhere.
app.use(cors())

// Connect to MongoDB, on the "products-api" database. If the db doesn't exist, mongo will create it.
mongoose.connect("mongodb://localhost/faq-api", { useMongoClient: true })

// This makes mongo use ES6 promises, instead of its own implementation
mongoose.Promise = Promise

// Log when mongo connects, or encounters errors when trying to connect.
mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

// Set up connection for refs between question and answer
const Schema = mongoose.Schema

// This is the beginning of a model for the Product object.   // Add more attributes to your product here.
const Question = mongoose.model("Question", {
  name: String,
  email: String,
  title: String,
  question: String,
  category: String,
})

const Answer = mongoose.model("Answer", {
  answer: String,
  question: {type: Schema.Types.ObjectId, ref: "Question"}
})

app.get("/", (req, res) => {
  res.send("FAQ API")
})

// Endpoint to create a product. Send a POST to /products with a JSON body
// with the keys and values you want to persist in the database.
app.post("/questions", (req, res) => {
  const question = new Question(req.body)

  question.save()
    .then(() => { res.status(201).send("Question created") })
    .catch(err => { res.status(400).send(err) })
})

// Add more endpoints here!

// app.get("/products", (req, res) => {
//   Product.find().then((allProducts) => {
//     res.json(allProducts)
//   })
// })

app.listen(8080, () => console.log("Products API listening on port 8080!"))
