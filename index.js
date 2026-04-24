const express = require("express");
const { userRouter } = require("/Routes/userRouter");
const { use } = require("react");

const app = express();

app.post("/signup", (req, res) => {
    res.json({
        msg: "signup endpoint"
    })
})

app.get("/signin", (req, res) => {
    res.json({
        msg: "signin endpoint"
    })
})

app.use("/user", userRouter);

app.listen(3000);