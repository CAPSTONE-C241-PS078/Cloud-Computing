const express = require('express');
const newsRoutes = require('./newsRoutes');

const router = express.Router();

router.use('/berita', newsRoutes);

module.exports = router;
