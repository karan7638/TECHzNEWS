import React from 'react';
import { Link } from 'react-router-dom'; // If you want a "Go Back" functionality

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
      <p className="text-lg text-gray-700 mt-4">Sorry, an unexpected error has occurred.</p>
      <p className="text-sm text-gray-500 mt-2">Please try again later or return to the homepage.</p>
      
      <Link to="/" className="mt-6 px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
        Go to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
