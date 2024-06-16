const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  const PRIVATE_KEY = "d1edfe20-fe4a-4ea0-8962-a0cec08d8952";

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    if (e.response) {
      
      return res.status(e.response.status).json(e.response.data);
    } else if (e.request) {
      
      console.error("No response received:", e.request);
      return res.status(500).json({ message: "No response received from server" });
    } else {
      
      console.error("Error setting up request:", e.message);
      return res.status(500).json({ message: "Error setting up request" });
    }
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
