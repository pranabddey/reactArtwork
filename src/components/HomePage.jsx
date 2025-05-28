import React, { useState, useEffect, useRef } from 'react';
import './HomePage.css';
import '../App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [artistFilter, setArtistFilter] = useState('');
  const [mediumFilter, setMediumFilter] = useState('');
  const cardRefs = useRef({});
  const navigate = useNavigate();

  // Fetch data
  useEffect(() => {
    async function getData() {
      const fetchedData = await fetch('https://pranabddey.github.io/reactArtwork/DB/db.json');
      const res = await fetchedData.json();
      setData(res.artworks);
      setFilteredData(res.artworks);
    }
    getData();
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = data;

    if (artistFilter) {
      filtered = filtered.filter((item) => item.artist === artistFilter);
    }

    if (mediumFilter) {
      filtered = filtered.filter((item) => item.medium === mediumFilter);
    }

    setFilteredData(filtered);
  }, [artistFilter, mediumFilter, data]);

  // Scroll into view if stored id exists
  useEffect(() => {
    const storedId = sessionStorage.getItem('selectedArtworkId');
    if (storedId && cardRefs.current[storedId]) {
      cardRefs.current[storedId].scrollIntoView({ block: 'start' });
      sessionStorage.removeItem('selectedArtworkId');
    }
  }, [filteredData]);

  const uniqueArtists = [...new Set(data.map((item) => item.artist))];
  const uniqueMediums = [...new Set(data.map((item) => item.medium))];

  const handleClick = (id) => {
    sessionStorage.setItem('selectedArtworkId', id);
    navigate(`/product/${id}`);
  };

  return (
    <div className="container">
      <h2 className="htag">A Retrospective Exhibition of Ranjit Das</h2>
      <p className="htag">An Exhibition initiated by Galleri Kaya</p>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-md-6">
          <Form.Select
            aria-label="Filter by artist"
            value={artistFilter}
            onChange={(e) => setArtistFilter(e.target.value)}
          >
            <option value="">Filter by Artist</option>
            {uniqueArtists.map((artist, idx) => (
              <option key={idx} value={artist}>
                {artist}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="col-md-6">
          <Form.Select
            aria-label="Filter by medium"
            value={mediumFilter}
            onChange={(e) => setMediumFilter(e.target.value)}
          >
            <option value="">Filter by Medium</option>
            {uniqueMediums.map((medium, idx) => (
              <option key={idx} value={medium}>
                {medium}
              </option>
            ))}
          </Form.Select>
        </div>
      </div>

      {/* Artwork Cards Grouped by Year */}
      {Object.entries(
        filteredData.reduce((acc, artwork) => {
          const year = artwork.year || 'Unknown Year';
          if (!acc[year]) acc[year] = [];
          acc[year].push(artwork);
          return acc;
        }, {})
      )
        .sort((a, b) => b[0] - a[0]) // Sort years descending
        .map(([year, artworks]) => (
          <div key={year} className="mb-5">
            <h4 className="mb-3">{year}</h4>
            <div className="row">
              {artworks.map((el) => (
                <div
                  className="col-md-3 mb-4"
                  key={el.id}
                  ref={(ref) => (cardRefs.current[el.id] = ref)}
                >
                  <Card style={{ height: '100%' }}>
                    <Card.Img variant="top" src={el.image} className="card-img-top" />
                    <Card.Body>
                      <Card.Title>Artist: {el.artist}</Card.Title>
                      <Card.Text>Title: {el.title}</Card.Text>
                      <Card.Text>Medium: {el.medium}</Card.Text>

                      <Button onClick={() => handleClick(el.id)} variant="primary">
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default HomePage;


// json-server --watch ./src/DB/db.json --port 5000
