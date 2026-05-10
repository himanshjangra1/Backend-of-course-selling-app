const { Router } = require("express");

const router = Router();

router.get("/admin", (req, res) => {
    res.json({
        msg: "This is admin route"
    })
})

module.exports = {
    adminRouter: router
}