const express = require("express");
const { userRouter } = require("./routes/user.js");
const { adminRouter } = require("./routes/admin.js");
const { courseRouter } = require("./routes/course.js");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

app.get("/", (req, res) => {
    res.json({
        msg: "hello from server..."
    })
})

// creating a main function to connect with database and to check it its connected or not

async function main() {
    // error handling using try-catch
    try {
        const connection = await mongoose.connect("Put your connection string from MongoDB compass");
        
        console.log("connected to database");
    }
    catch (err) {
        console.log("failed to connect to database due to - ", err);
    }

     /*
    // Use the connect method to connect to the database and log a success message if the connection is successful
    const connection = await mongoose.connect("mongodb+srv://100xdevs:WvaTca0509mb90YX@cluster0.ossjd.mongodb.net/coursera-app");

    // Check if the connection is successful or not
    if (connection) { // If the connection is successful
        console.log("Connected to the database");
    } else { // If the connection is not successful
        console.log("Failed to connect to the database");
    }
    */

    // Start the server on port 3000
    app.listen(3000, () => {
        console.log("Server is listening on port 3000");
    });
}

main();