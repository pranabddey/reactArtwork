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
      const res = await fetch(`http://localhost:5000/artworks/${id}`);
      const data = await res.json();
      setArtwork(data);
    }

    fetchArtwork();
  }, [id]);

  if (!artwork) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row align-items-start">
        {/* Image Column */}
        <div className="col-md-6 mb-4">
          <div className="d-flex justify-content-center">
            <Zoom>
              <img
                src={artwork.image}
                alt={artwork.artist}
                style={{
                  width: '100%',
                  maxWidth: '400px', // medium size
                  height: 'auto',
                  borderRadius: '8px',
                  cursor: 'zoom-in',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Zoom>
          </div>
        </div>

        {/* Info Column */}
        <div className="col-md-6">
          <h3>{artwork.artist}'s Artwork</h3>
          <p><strong>Medium:</strong> {artwork.medium}</p>
          <p><strong>Dimensions:</strong> {artwork.dimensions} Inches</p>

          <Button variant="secondary" onClick={() => navigate('/')}>
            Back to Gallery
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
