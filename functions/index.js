const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express(); // app config
const stripe = require("stripe")("sk_test_51ItFIfDCEaTYcBJIryO8NbuQqS6W81VHM90TOTC0Rty6q0oXstpjvUJ6vMX5DW6V4MKRuAt1lSYYIETUO8aCZjgn005ISNGP3Z");


// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: "total", // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// example endpoint

// (http://localhost:5001/react-8b3d3/us-central1/api).
