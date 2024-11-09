# ZilSell: Zillow Sales Data Extraction & Analysis

**ZilSell** is a Node.js-based project designed to extract and analyze property sales data from Zillow. By using web scraping techniques and fetching JSON data, it provides insights into the number of houses sold in specific areas. This tool can help real estate analysts and developers to access Zillow's real estate data in a structured manner.

## Features
- Fetches real estate sales data from Zillow for a given location.
- Provides a detailed JSON response containing information about sold properties in the area.
- Utilizes caching to reduce unnecessary requests to the Zillow server.

## Tech Stack
- **Node.js**: A JavaScript runtime to build the server-side application.
- **Express.js**: A web framework for handling HTTP requests and building APIs.
- **node-fetch-cache**: A caching library for reducing redundant API calls to Zillow.
- **jsdom**: A JavaScript library that simulates a browser environment to scrape and parse HTML content.
- **Zillow API** (via scraping): Fetches JSON data for property listings and sales.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ZilSell.git
   cd ZilSell```
2. Install the required dependencies:

```
npm install
```

3. Start the server:

```
npm start
```

The API will be available at http://localhost:3000. Use the endpoint /fetch-sales to get the sales data.

## How It Works
The project scrapes the Zillow website for a specific area.
Using jsdom, the data is parsed and then filtered to find the number of houses sold.
node-fetch-cache is used to cache the fetched data to avoid redundant requests and optimize performance.
Example Usage
Request property sales data for a given area:


`curl https://www.zillow.com/homes/90001_rb/`
This will return the number of houses sold where zip code is 90001.

## Future Improvements
Implement a front-end to visualize the data.
Add filtering options for price range, house type, and sale date.
Integrate with a database to store historical sales data.

## License
This project is licensed under the MIT License - see the LICENSE file for details.







