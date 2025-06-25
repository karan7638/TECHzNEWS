# TECHzNEWS

**TECHzNEWS** is a modern tech news website built using React, powered by the News API, and supports user authentication with Auth0. The platform provides the latest news on technology, AI, and more with a dynamic, responsive UI. Users can browse articles, read in-depth content, search for specific topics, and leave comments.

## Features

- **Latest News**: Get up-to-date articles from various tech categories.
- **Search Functionality**: Search news articles by title or keyword.
- **User Authentication**: Login and sign up using Auth0 for a personalized experience.
- **Comment Section**: Users can leave comments on articles.
- **Responsive Design**: Optimized for mobile and desktop devices.
- **Dynamic Routing**: Navigation between different pages like Home, Article Details, and Contact Us.

## Tech Stack

- **Frontend**: React.js
- **Routing**: React Router DOM
- **Authentication**: Auth0
- **News API**: News API
- **Styling**: Tailwind CSS

## Setup and Installation

1. **Clone this repository** to your local machine:

   ```bash
   git clone https://github.com/yourusername/techznews.git
   
2.Navigate into the project directory:

  ```bash
    cd techznews

3. Install the necessary dependencies:

   ```bash
   npm install
   
5. Set up your environment variables:

Create a .env file in the root of the project.

Add your News API key and Auth0 credentials:

VITE_NEWS_API_KEY=your_news_api_key
REACT_APP_AUTH0_DOMAIN=your_auth0_domain
REACT_APP_AUTH0_CLIENT_ID=your_auth0_client_id

Run the development server:


  npm run dev
Your app will be available at http://localhost:3000.
