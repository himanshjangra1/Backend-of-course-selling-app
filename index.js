const express = require("express");
const { userRouter } = require("./routes/user")

const app = express();

app.use(express.json());
app.use("/user", userRouter);


app.get("/", (req, res) => {
    res.json({
        msg: "hello from server"
    })
})

app.listen(3000);