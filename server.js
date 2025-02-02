const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/proxy", async (req, res) => {
  try {
    const response = await axios.get("https://api.jsonserve.com/Uw5CrX");
      res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(3001, () => console.log("Proxy running on port 3001"));
