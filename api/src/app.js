const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

const { morganOption, dbConfig } = require("./config");
const { PingPong } = require("./routes/ping-pong");
const { Products } = require("./routes/products");
const { errorHandler } = require("./middlewares");
const { Files } = require("./routes/files");

const app = express();

//db connection
dbConfig();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(helmet());
app.use(morgan("combined", morganOption));
app.use(express.static(path.join(__dirname, "../public")));

// routes
app.use("/", PingPong);
app.use("/products", Products);
app.use("/files", Files);

// custom middleware
app.use(errorHandler);

module.exports = { app };
