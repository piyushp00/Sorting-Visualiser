import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and Built
        by{' '}
        <a
          href="https://piyushp00.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Piyush Pandey
        </a>
      </section>

      <section className="Footer__Items">
        
        <a
          href="https://github.com/piyushp00/Sorting-Visualiser"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Code
        </a>
      </section>
    </footer>
  );
};

export default Footer;
