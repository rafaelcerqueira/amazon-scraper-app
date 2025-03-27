import express from "express";
import axios from "axios";
import { JSDOM } from "jsdom";
import cors from "cors";


const app = express();
const PORT = 3000;
app.use(cors());

//endpoint
app.get("/api/scrape", async (req, res) => {
    const keyword = req.query.keyword;

    if (!keyword) {
        return res.status(400).json({ error: "Keyword is required."});
    }

    try {
        const response = await axios.get(`https://www.amazon.com.br/s?k=${encodeURIComponent(keyword)}`);
        const dom = new JSDOM(response.data);
        const document = dom.window.document;

        //extrai os dados
        const produtos = [...document.querySelectorAll(".s-main-slot .s-result-item")].map(item => ({
            title: item.querySelector("h2 span")?.textContent.trim(),
            rating: item.querySelector(".a-icon-alt")?.textContent.trim(),
            reviews: item.querySelector(".s-link-style .a-size-base")?.textContent.trim(),
            image: item.querySelector(".s-image")?.src
        })).filter(produto => produto.title);

        res.json(produtos);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while scraping Amazon." });
    }

});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});