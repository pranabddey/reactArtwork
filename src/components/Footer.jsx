import * as React from 'react';

export default function ColorInversionFooter() {
  return (
    <footer
      className="py-3 mt-5"
      style={{
        backgroundColor: '#e0f7fa', // Matching light blue
        borderTop: '1px solid #ccc'
      }}
    >
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            About
          </a>
        </li>
      </ul>
      <p className="text-center text-muted mb-0">© 2025 Company, Ritusree</p>
    </footer>
  );
}
