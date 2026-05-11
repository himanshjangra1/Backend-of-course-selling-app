const { Router } = require("express");

const router = Router();

const { adminModel } = require("../db");

router.get("/", (req, res) => {
    res.json({
        msg: "This is admin route"
    })
})

router.post("/signup", (req, res) => {
    res.json({
        msg: "Signup endpoint"
    })
})

router.post("/signin", (req, res) => {
    res.json({
        msg: "Signin endpoint"
    })
})

router.post("/", (req, res) => {
    res.json({
        msg: "course endpoint"
    })
})

router.put("/", (req, res) => {
    res.json({
        msg: "course endpoint"
    })
})

router.get("/bulk", (req, res) => {
    res.json({
        msg: "bulk endpoint"
    })
})


module.exports = {
    adminRouter: router
}