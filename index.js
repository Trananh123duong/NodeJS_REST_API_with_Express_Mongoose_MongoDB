const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const authorRoute = require("./routes/author");
const bookRoute = require("./routes/book");

dotenv.config();
mongoose.set("strictQuery", false);
//CONNECT DATABASE
mongoose.connect((process.env.MONGODB_URL), () => {
    console.log("Connect to MongoDB");
});

app.use(bodyParser.json({limit: "50mb"})); // tra ve dang json va gioi han du lieu laf 50 mb
app.use(cors());
app.use(morgan("common")); // khi send request thi sex baos comment duoi terminal moi khi chay npm start

//ROUTES
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);

app.listen(8080, () => {
    console.log("Server is running ... ");
})
