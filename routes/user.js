const {Router} = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.json({
        msg: "hello from user router!"
    })
})

module.exports = {
    userRouter: router
}