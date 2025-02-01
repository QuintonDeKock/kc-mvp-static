const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public")); // Serve static files from the 'public' directory

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/table.html"); // Serve table.html as the homepage
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});