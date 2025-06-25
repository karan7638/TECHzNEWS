import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Comments from './Comments';
import { Helmet } from 'react-helmet';

const NewsDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state || {};

  if (!data) {
    return (
      <div className="p-5 text-center">
        <h2 className="text-2xl font-bold text-red-600">No article data available.</h2>
        <p className="mb-4">Please go back and select an article from the homepage.</p>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>{data.title} | TECHzNEWS</title>
        <meta name="description" content={data.description || 'Detailed view of the news article.'} />
      </Helmet>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-5">
        {/* Article Details */}
        <div className="p-5">
          <h1 className="font-extrabold text-2xl mb-3">{data.title}</h1>
          <p className="mb-4">{data.description}</p>

          {data.urlToImage ? (
            <img
              src={data.urlToImage}
              alt="News"
              className="w-full h-auto mb-4 rounded"
            />
          ) : (
            <div className="w-full h-48 bg-gray-200 mb-4 flex items-center justify-center text-gray-500">
              <span>No Image Available</span>
            </div>
          )}

          {data.author && (
            <p className="text-sm text-gray-600 mb-1">Author: {data.author}</p>
          )}
          {data.publishedAt && (
            <p className="text-sm text-gray-600 mb-2">
              Published: {new Date(data.publishedAt).toLocaleString()}
            </p>
          )}
          {data.source?.name && (
            <p className="text-sm text-gray-600 mb-4">Source: {data.source.name}</p>
          )}

          <h2 className="mt-3">
            Read the full article here:{' '}
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              {data.url}
            </a>
          </h2>
        </div>

        {/* Comments Section */}
        <div>
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
