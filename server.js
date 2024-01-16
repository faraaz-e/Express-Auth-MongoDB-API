const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
require("dotenv").config();

connectDb();
const app = express();

app.use(express.json()); //middleware to parse incoming request via request body (eg.bodyParser)
app.use("/api/v1/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
