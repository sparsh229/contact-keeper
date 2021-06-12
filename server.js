const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

//connect database
connectDB();
app.use(cors());

//inti middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "Welcome to contact keeper API" }));

//define routes
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
