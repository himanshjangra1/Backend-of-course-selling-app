const {Router} = require("express");
const { use } = require("react");
const userRouter = Router();

userRouter.post("/user", (req, res) => {
    res.json({
        msg: "This is the userRouter"
    })
})

module.exports = {
    userRouter: userRouter
}