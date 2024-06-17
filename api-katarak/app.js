const express = require('express');
const bodyParser = require('body-parser');
const newsRoutes = require('./routes/newsRoutes'); // Sesuaikan jalur ini jika diperlukan

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

console.log('Rute API terdaftar: /api');

// Rute
app.use('/api', newsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
