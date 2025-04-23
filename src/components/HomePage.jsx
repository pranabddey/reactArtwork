import React, { useState, useEffect } from 'react';
import "./HomePage.css";
import "../App.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function HomePage() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const fetchedData = await fetch('http://localhost:5000/artworks');
      const res = await fetchedData.json();
      setData(res);
    }
    getData();
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container">
      <h2 className='htag'>A Retrospective Exhibition of Ranjit Das</h2>
      <p className='htag'>An Exhibition initiated by kya Art Gallery</p>

      <div className="row">
        {data.map((el) => (
          <div className="col-md-3 mb-4" key={el.id}>
            <Card style={{ height: '100%' }}>
              <Card.Img
                variant="top"
                src={el.image}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>Artist: {el.artist}</Card.Title>
                <Card.Text>Medium: {el.medium}</Card.Text>
                <Card.Text>Dimensions: {el.dimensions} Inches</Card.Text>
                <Button onClick={() => handleClick(el.id)} variant="primary">
                  See Details
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;



// json-server --watch ./src/DB/db.json --port 5000
