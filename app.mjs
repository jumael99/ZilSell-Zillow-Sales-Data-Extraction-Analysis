import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
import { JSDOM } from "jsdom";
import NodeFetchCache, { FileSystemCache } from "node-fetch-cache";

const options = {
  // You can specify cache directory and other options here
  ttl: 3600, // time-to-live for cached items (in seconds)
  directory: "./cache", // directory to store the cache files
};

const fetch = NodeFetchCache.create({
  cache: new FileSystemCache(),
});

// const url = "https%3A%2F%2Fwww.zillow.com%2Fhomes%2F90001_rb%2F";

const requestZillowData = async (url) => {
  try {
    // Fetch data from the ScraperAPI
    const response = await fetch(
      `https://api.scraperapi.com/?api_key=${process.env.SCRAPERAPI_KEY}&url=${url}`
    );

    // Check if the response is ok (status 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const htmlData = await response.text();
    const dom = new JSDOM(htmlData);

    // Safely access the element, check if it exists first
    const nextDataElement = dom.window.document.querySelector("#__NEXT_DATA__");

    if (nextDataElement) {
      // If the element exists, parse the JSON
      const jsonData = JSON.parse(nextDataElement.textContent);
      return jsonData;
    } else {
      console.log("Element '__NEXT_DATA__' not found in the page.");
      return null;
    }
  } catch (error) {
    console.log("Error fetching data:", error);
    return null;
  }
};

app.get("/zillow-scraper", async (req, res) => {
  const URL = req.query.url;
  const data = await requestZillowData(URL);
  if (data) {
    res.json(data); // Send the scraped data as JSON
  } else {
    res.status(500).json({ error: "Failed to fetch data" }); // Handle error case
  }
  console.log("URL:", URL);
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT} ✨`);
});

// process.env.SCRAPERAPI_KEY
// zillow link
// proxy, bot clearence
