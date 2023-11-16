import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MapComponent from './components/Map';
import FormComponent from './components/Form';
import Menu from './components/Nav';
import './App.css'
import DevImage from './img/dev.jpg'

function App() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div>
      <Menu />
      <Container className='my-5'>
        <Row>
          <Col md={6}>
            <FormComponent onLocationChange={handleLocationChange} />
          </Col>
          <Col md={6}>
            <img
              src={DevImage}
              alt="GMC Developer"
              style={{ width: '100%', height: 'auto' }}
            />
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col>
            <MapComponent apiKey={apiKey} selectedLocation={selectedLocation} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
