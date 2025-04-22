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
      <h2>A Retrospective Exhibition of Rabin Dutta</h2>
      <p>An Exhibition initiated by Janus Art Gallery</p>

      <div className="row ">

        <div className="d-flex flex-row gap-5 " >
          {
            data.map((el) => (
              <Card key={el.id} style={{width:'300px', height: '500px'}}>
              <Card.Img variant="top" src={`../public${el.image}`} />
            <Card.Body>
              <Card.Title> {el.artist}</Card.Title>
              <Card.Text>
                {el.medium}
              </Card.Text>
              <Card.Text>
              Dimensions	
              {el.dimensions} Inches
              </Card.Text>
              <Button variant="primary">See Details</Button>
            </Card.Body>
          </Card>
            ))
          }
          {/* <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src="https://janusartgallery.com/wp-content/uploads/2024/12/rabin-dutta-painting-3.webp" />
            <Card.Body>
              <Card.Title> Artist Name</Card.Title>
              <Card.Text>
                Medium:water color
              </Card.Text>
              <Card.Text>
              Dimensions	
              21 X 13 Inches
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;


// json-server --watch ./src/DB/db.json --port 5000