import React, { useEffect, useState } from 'react';
import logo_tech from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash'; 

const News = (props) => {
  const [news, setNews] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const [page, setPage] = useState(1); 

  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  // Debounce search to prevent too many API calls
  const debouncedSearch = debounce((searchQuery) => {
    setPage(1); 
    getNews(searchQuery, 1); 
  }, 500); 

  // Fetch news based on menu and search term
  const getNews = (searchQuery = '', pageNumber = 1) => {
    setLoading(true);
    setError(null);

    fetch(
      `https://newsapi.org/v2/everything?q=${props.menu}&apiKey=${apiKey}&page=${pageNumber}&pageSize=16`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((json) => {
        setNews((prevNews) => [...prevNews, ...json.articles]);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching news:', err);
        setError('Failed to fetch news. Please try again later.');
        setLoading(false);
      });
  };

  useEffect(() => {
    getNews('', page); 
  }, [props.menu, page]); 

  // Apply search filter
  const filteredNews = (props.search
    ? news.filter((data) =>
        data.title?.toLowerCase().includes(props.search.toLowerCase())
      )
    : news
  ).filter((data) => data.urlToImage); 

  return (
    <div className="mt-16 px-5">
      {loading && page === 1 ? (
        <p className="text-center text-lg font-semibold">Loading news...</p>
      ) : error ? (
        <p className="text-center text-lg font-semibold text-red-500">{error}</p>
      ) : filteredNews.length === 0 ? (
        <p className="text-center text-lg font-semibold">
          No news found for "{props.search}"
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredNews.map((data, index) => (
            <Link
              to="/details"
              state={{ data: data }}
              key={`${data.url}-${index}`}
            >
              <div className="max-w-sm h-full flex flex-col rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                <div className="w-full h-48">
                  <img
                    className="w-full h-full object-cover"
                    src={data.urlToImage || logo_tech}
                    alt={data.title}
                    loading="lazy" 
                  />
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-lg mb-2">{data.title}</div>
                  <p className="text-gray-700 text-sm">
                    {data.description || 'No description available.'}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      {/* Load More Button */}
      {!loading && filteredNews.length > 0 && (
        <div className="text-center mt-6">
          <button
            onClick={() => {
              setPage((prevPage) => prevPage + 1); 
              getNews(props.search, page + 1); 
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default News;
