const {Router} = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.json({
        msg: "hello from user router"
    })
})

router.post("/signup", (req, res) => {
    res.json({
        msg: "signup endpoint"
    })
})

router.post("/signin", (req, res) => {
    res.json({
        msg: "signin endpoint"
    })
})

module.exports = {
    userRouter: router
}