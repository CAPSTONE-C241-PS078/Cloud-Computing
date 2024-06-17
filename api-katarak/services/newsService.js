const axios = require('axios');
const config = require('../config/default');

const fetchNews = async (query, language) => {
    const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
            q: query,
            language: language,
            apiKey: config.apiKey
        }
    });

    return {
        status: response.data.status,
        totalResults: response.data.totalResults,
        articles: response.data.articles.map(article => ({
            title: article.title,
            url: article.url
        }))
    };
};

module.exports = { fetchNews };
