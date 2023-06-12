import { NEWS_API_URL, TIMEOUT } from './config.js';
import { createLiElWithClass } from './helpers.js';
import { timeout } from './helpers.js';

export const getNews = async () => {
    try {
        const res = await Promise.race([fetch(NEWS_API_URL), timeout(TIMEOUT)]) ;
        const data = await res.json();
        const news = data.results.slice(0, 5);
        renderNews(news)
    } catch (err) {
        console.error(`Ups...${err.message}`);
        const errorEl = document.createElement('p');
        errorEl.innerText = `Sorry, cannot load news. ${err.message}`;
        const newsSection = document.querySelector('.news');
        newsSection.append(errorEl)
    }

};

const renderNews = async newsArr => {
    const listWithNews = document.querySelector('.news-list');
    await newsArr.forEach(news => {
        const title = news.title;
        const link = news.link;
        const date = news.pubDate;
        const markup = `<a href=${link} target="_blank" class="news-link"><span>💬 ${title}</span><span class="date"> ${date}</span></a>`;
        const listEl = createLiElWithClass('news-single');
        listEl.insertAdjacentHTML("afterbegin", markup);
        listWithNews.prepend(listEl);
    })
};