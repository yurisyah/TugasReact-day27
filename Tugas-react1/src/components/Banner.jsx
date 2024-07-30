import React from 'react';
import './stylebanner.css';

const Banner = () => {
  const banners = [
    { id: 1, title: 'Welcome to Our Website', description: 'We are glad to have you here!' },
    { id: 2, title: 'Our Services', description: 'We offer a wide range of services to meet your needs.' },
    { id: 3, title: 'Contact Us', description: 'Feel free to reach out to us for more information.' },
  ];

  return (
    <div className="banners">
      {banners.map((banner) => (
        <div
          key={banner.id}
          className="banner"
        >
          <h2>{banner.title}</h2>
          <p>{banner.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Banner;
