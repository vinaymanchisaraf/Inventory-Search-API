const express = require("express");
const cors = require("cors");
const searchRoutes = require("./routes/search");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/search", searchRoutes);
app.get("/", (req, res) => {
  res.send("Inventory API running...");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});