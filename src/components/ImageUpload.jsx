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

  const handleImageChange =  (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {

      setSelectedImage(URL.createObjectURL(file)); // For preview
      setImageFile(file.name); // Just store the file name
      console.log("FILE PATH:: ", file.name);


      // setSelectedImage(URL.createObjectURL(file));
      // setImageFile(URL.createObjectURL(file));
      // console.log("FILE PATH:: ", file.name);
      
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!imageFile || !artist || !dimensions || !medium) {
      alert("Please fill out all fields and select an image.");
      return;
    }

    const formData = {
      image: `/uploads/${imageFile}`, // Use the stored image name
      // image: imageFile,
      artist,
      dimensions,
      medium,
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
          <Form.Control
            type="text"
            placeholder="Artist"
            className="mb-3"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Dimensions"
            className="mb-3"
            value={dimensions}
            onChange={(e) => setDimensions(e.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Medium"
            className="mb-3"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
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
