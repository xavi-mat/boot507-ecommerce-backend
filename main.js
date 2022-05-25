const express = require("express");
const app = express();
const { typeError } = require("./middleware/errors");

const port = 8080;

app.use(express.json());

app.use("/products", require("./routes/products"));
app.use("/categories", require("./routes/categories"));
app.use("/users", require("./routes/users"));
app.use("/orders", require("./routes/orders"));
app.use("/reviews", require("./routes/reviews"));

app.use(typeError);

app.listen(port, () => console.log("Server running in port: " + port));
