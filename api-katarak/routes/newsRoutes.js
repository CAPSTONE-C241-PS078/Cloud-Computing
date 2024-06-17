const express = require('express');
const axios = require('axios');

const router = express.Router();
const API_KEY = '388615c066ee48e78f3a1469cf6319ff';  // Ganti dengan API key Anda dari NewsAPI.org

// Endpoint untuk mendapatkan berita tentang katarak dengan bahasa Indonesia
router.get('/berita/katarak', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
            params: {
                q: 'cataract', // kata kunci pencarian dalam bahasa Indonesia
                language: 'en', // kode bahasa untuk bahasa Indonesia
                apiKey: API_KEY
            }
        });

        // Mengambil judul dan url dari setiap artikel
        const articles = response.data.articles.map(article => ({
            title: article.title,
            url: article.url
        }));

        res.json({ status: response.data.status, totalResults: response.data.totalResults, articles });
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Error fetching news' });
    }
});

module.exports = router;
