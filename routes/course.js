const { Router } = require("express");

const router = Router();

const { courseModel } = require("../db");

router.get("/", (req, res) => {
    res.json({
        msg: "This is the course endpoint"
    })
})

router.get("/preview", (req, res) => {
    // you would expect the user to pay money to purchase a course

    res.json({
        message: "Priview endpoint!",
    });
});

// Define the course routes for getting all courses
router.get("/courses", (req, res) => {
    res.json({
        message: "Pourses endpoint!",
    });
});

module.exports = {
    courseRouter: router
}