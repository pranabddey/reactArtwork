import React, { useState } from 'react';
import "./HomePage.css";
import "../App.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
function HomePage() {
  const[data, setData] = useState([])

  useEffect( ()=>{
     async function getData() {
      const fetchedData = await fetch('http://localhost:5000/artworks');
      const res = await fetchedData.json()
      setData(res)
    }
    getData()
  },[])


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
                src={el.image} // e.g. "/images/art1.jpg"
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>{el.artist}</Card.Title>
                <Card.Text>{el.medium}</Card.Text>
                <Card.Text>Dimensions: {el.dimensions} Inches</Card.Text>
                <Button variant="primary">See Details</Button>
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
