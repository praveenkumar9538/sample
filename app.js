const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple route for testing
app.get('/', (req, res) => {
    res.send('Hello, Jenkins updated!');
});

// Listening on all interfaces (important for GCP)
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${port}`);
});
