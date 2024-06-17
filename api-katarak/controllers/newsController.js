const { fetchNews } = require('../services/newsService');

const getCataractNews = async (req, res) => {
    try {
        const news = await fetchNews('cataract', 'en');
        res.json(news);
    } catch (error) {
        console.error('Error fetching news:', error);
        res.status(500).json({ error: 'Error fetching news' });
    }
};

module.exports = { getCataractNews };
