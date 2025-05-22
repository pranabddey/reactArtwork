import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import "../App.css";
import "./ImageUpload.css";
import Form from 'react-bootstrap/Form';

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [artist, setArtist] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [medium, setMedium] = useState('');
  const [title, settitle] = useState('');
  const [details, setdetails] = useState('');
  const [year, setyear] = useState('');
  const [price, setprice] = useState('');

  const handleImageChange =  (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {

      setSelectedImage(URL.createObjectURL(file)); // For preview
      setImageFile(file.name); // Just store the file name
      console.log("FILE PATH:: ", file.name);


  
      
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!imageFile || !artist || !dimensions || !medium || !title || !details || !year || !price) {
      alert("Please fill out all fields and select an image.");
      return;
    }

    const formData = {
      image: `/uploads/${imageFile}`, // Use the stored image name
      // image: imageFile,
      artist,
      dimensions,
      medium,
      title,
      details,
      year,
      price
    };



    try {
      const response = await fetch("http://localhost:5000/artworks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert("Image and form data submitted successfully!");
      } else {
        alert("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Error submitting data.");
    }
    console.log("Submitted Data:", formData);
    alert("Image and form data submitted successfully!");

    // Reset form (optional)
    setSelectedImage(null);
    setImageFile(null);
    setArtist('');
    setDimensions('');
    setMedium('');
    settitle('');
    setdetails('');
    setyear('');
    setprice('');
  };

  return (
    <div className="container uidiv">
      <div className="scroll-container">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6">Upload an Image</Typography>

          <Button variant="contained" component="label">
            Choose Image
            <input hidden accept="image/*" type="file" onChange={handleImageChange} />
          </Button>

          {selectedImage && (
            <Box mt={2}>
              <img
                src={selectedImage}
                alt="Preview"
                style={{
                  maxWidth: '300px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                }}
              />
            </Box>
          )}
        </Box>

        <Form onSubmit={handleSubmit}>
          {/* Artist Dropdown */}
          <Form.Select
            className="mb-3"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          >
            <option value="">Select Artist</option>
            <option value="Ranjit Das">Ranjit Das</option>
            <option value="Ritusree Dey">Ritusree Dey</option>
            <option value="Unknown">Unknown</option>
          
          </Form.Select>
        <Form.Control
          type="text"
          placeholder="Title"
          className="mb-3"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />


          {/* Medium Dropdown */}
          <Form.Select
            className="mb-3"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
          >
            <option value="">Select Medium</option>
            <option value="Water color">Water color</option>
            <option value="Wood Cut">Wood Cut</option>
            <option value="Acrylic">Acrylic</option>
            <option value="Pencil Charcoal">Pencil Charcoal</option>
            <option value="MixMedia">MixMedia</option>
            <option value="Collograph">Collograph</option>
          </Form.Select>

      

          <Form.Control
            type="text"
            placeholder="Dimensions"
            className="mb-3"
            value={dimensions}
            onChange={(e) => setDimensions(e.target.value)}
          />
        
        <Form.Control
          type="number"
          placeholder="YEAR"
          className="mb-3"
          value={year}
          onChange={(e) => setyear(e.target.value)}
          min="1900"
          max="2099"
        />

        <Form.Control
            type = "number"
            placeholder="Price"
            className="mb-3"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />

          <Form.Control
            as="textarea"
            placeholder="Details about Art"
            className="mb-3"
            value={details}
            onChange={(e) => setdetails(e.target.value)}
          />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ImageUpload;
