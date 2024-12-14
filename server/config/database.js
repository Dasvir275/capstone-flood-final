const mongoose = require("mongoose");

exports.connect = () => {
    const dbURI = process.env.MONGODB_URL;

    mongoose
        .connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((error) => {
            console.error("Database connection failed:");
            console.error(error.message);
            process.exit(1); // Exit the process with an error code
        });
};
