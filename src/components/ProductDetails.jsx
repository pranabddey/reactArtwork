import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Button from 'react-bootstrap/Button';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    async function fetchArtwork() {
      try {
        const res = await fetch(`https://pranabddey.github.io/reactArtwork/DB/db.json`);
        const data = await res.json();
        const d = data.artworks.find(a => a.id === id);
        setArtwork(d);
      } catch (error) {
        console.error('Failed to fetch artwork:', error);
      }
    }

    fetchArtwork();
  }, [id]);

  if (!artwork) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row align-items-start">
        {/* Image on the left */}
        <div className="col-md-6 mb-4 d-flex justify-content-center">
          <Zoom>
            <img
              src={artwork.image}
              alt={artwork.artist}
              style={{
                width: '100%',
                maxWidth: '600px', // Slightly larger than before
                height: 'auto',
                borderRadius: '8px',
                cursor: 'zoom-in',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Zoom>
        </div>

        {/* Text on the right */}
        <div className="col-md-6">
          <h3 className="mb-3">{artwork.artist}'s Artwork</h3>
          <p><strong>Title:</strong> {artwork.title}</p>
          <p><strong>Medium:</strong> {artwork.medium}</p>
          <p><strong>Dimensions:</strong> {artwork.dimensions}</p>
          <p><strong>Year:</strong> {artwork.year}</p>
          <p><strong>Price:</strong> {artwork.price}</p>
          <p><strong>Details:</strong> {artwork.details}</p>

          <Button variant="secondary" onClick={() => navigate('/')}>
            Back to Gallery
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
