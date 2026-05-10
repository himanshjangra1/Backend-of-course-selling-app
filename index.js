const express = require("express");
const { userRouter } = require("./routes/user.js");
const { adminRouter } = require("./routes/admin.js");

const app = express();

app.use(express.json());

app.use("/api/v1", userRouter);
app.use("/api/v1", adminRouter);


app.get("/", (req, res) => {
    res.json({
        msg: "hello from server..."
    })
})

app.listen(3000);