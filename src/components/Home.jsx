import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useOutletContext } from 'react-router-dom';
import News from './News';
import Footer from './Footer';

const Home = () => {
  const context = useOutletContext();
  const menu = context?.menu || 'technology';
  const search = context?.search || '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | TECHzNEWS</title>
        <meta name="description" content="Latest technology and AI news updates." />
        <meta property="og:title" content="TECHzNEWS - Home" />
        <meta property="og:description" content="Stay up-to-date with the latest technology and AI news." />
        <meta property="og:image" content="url_to_image.jpg" />
        <meta property="og:url" content="your_home_page_url" />
        <meta name="twitter:title" content="TECHzNEWS - Home" />
        <meta name="twitter:description" content="Stay up-to-date with the latest technology and AI news." />
        <meta name="twitter:image" content="url_to_image.jpg" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4">
        <section className="pt-8" aria-labelledby="news-heading">
          <h2 id="news-heading" className="text-3xl font-bold mb-6">
            Latest News
          </h2>
          <News menu={menu} search={search} />
        </section>

        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
