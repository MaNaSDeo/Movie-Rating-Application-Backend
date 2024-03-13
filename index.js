require("dotenv").config();
const express = require("express");

const app = express();
const userRoutes = require("./routes/userRoutes");
const movieRoutes = require("./routes/movieRoutes");
const authenticateToken = require("./middlewares/authenticateToken");
const cors = require("cors");

const connectDB = require("./db/connect");

app.use(cors());

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/movies", authenticateToken, movieRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Movie Rating API</h1>");
});

const PORT = process.env.PORT || 3000;

const start = (async = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is listening port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
});

start();
