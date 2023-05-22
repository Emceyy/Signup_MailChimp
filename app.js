const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
require('dotenv').config();


const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/sigin.html");
});

app.post("/", function (req, res) {
  const firstname = req.body.fname;
  const lastname = req.body.lname;
  const email = req.body.email;

  const data = {
    members: [
        {email_address: email,
        status: 'subscribed',
        merge_fields: {
            FNAME: firstname,
            LNAME: lastname
        }}
    ]
};

  const jsonData = JSON.stringify(data);

  const url = "https://us11.api.mailchimp.com/3.0/lists/3381772e05"; 

  const apiKey = process.env.API_KEY;
  const authKey = process.env.AUTH_KEY;


  const options = {
    headers: {
      Authorization: "Basic " + Buffer.from(`${apiKey}:${authKey}`).toString("base64"),
    },
  };
  

  axios
    .post(url, jsonData, options)
    .then((response) => {
      if (response.status === 200) {
        res.sendFile(__dirname + "/succes.html");
      } else {
        res.sendFile(__dirname + "/fail.html");
      }
    })
    .catch((error) => {
      console.log(error);
      res.sendFile(__dirname + "/fail.html");
    });
});

app.post("/mailchimp", function (req, res) {
  res.sendFile(__dirname + "/sigin.html");
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
