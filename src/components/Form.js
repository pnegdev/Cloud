import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const FormComponent = ({ onLocationChange }) => {
    const [selectedLocation, setSelectedLocation] = useState('');

    const handleLocationChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedLocation(selectedValue);
        onLocationChange(selectedValue); // Appel de la fonction pour afficher le lieu sélectionné sur la map
    };

    return (
        <Form>
            <h1>Rejoignez la famille GoMyCode</h1>
            <Row className='mt-3'>
                <Col>
                    <Form.Group controlId="formFirstName">
                        <Form.Label></Form.Label>
                        <Form.Control
                        className="red-border"
                        type="text"
                        placeholder="Votre prénom"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formLastName">
                        <Form.Label></Form.Label>
                        <Form.Control
                        className="red-border"
                        type="text"
                        placeholder="Votre nom"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group controlId="formEmail">
                        <Form.Label></Form.Label>
                        <Form.Control
                        className="red-border"
                        type="email"
                        placeholder="votre@email.com"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formPhone">
                        <Form.Label></Form.Label>
                        <Form.Control
                        className="red-border"
                        type="tel"
                        placeholder="Votre téléphone"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <Form.Group controlId="formFormation">
                    <Form.Label></Form.Label>
                    <Form.Control as="select" className="red-border">
                        <option value="">Sélectionnez une formation</option>
                        <option value="formation1">Fullstack JS Bootcamp</option>
                        <option value="formation2">DevOps Bootcamp</option>
                        <option value="formation3">Data Science Bootcamp</option>
                        <option value="formation4">Ultimate Design Bootcamp</option>
                        <option value="formation5">Digital Marketing Bootcamp</option>
                        <option value="formation6">Cybersecurity Bootcamp</option>
                    </Form.Control>
                </Form.Group>
                </Col>
            </Row>
            <Form.Group controlId="formLocation">
                <Form.Label></Form.Label>
                <Form.Control as="select" className="red-border" onChange={handleLocationChange} value={selectedLocation}>
                <option value="">Sélectionnez un lieu</option>
                <option value="Dakar">Hackerspace Point E</option>
                <option value="Yoff">Hackerspace Yoff</option>
                </Form.Control>
            </Form.Group>

            <Button variant="danger" type="submit" className='mt-3'>
                S'inscrire
            </Button>
        </Form>
    );
};

export default FormComponent;
