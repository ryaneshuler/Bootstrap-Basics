import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import FormModal from './FormModal';
import axios from 'axios';

const RegistrationForm = ({ onUserAdded }) => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
    
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
      onUserAdded(formData);
      console.log(response.data);
      setUser(response.data);
      setSubmitted(true);
      setShowModal(true);
      setError(null);
    } catch (err) {
      setError(`Error submitting the form. Please try again: ${err.message}`);
      setSubmitted(false);
    }
    }
    setValidated(true);
  };

  return (
    <Container>

      <h2>Registration Form</h2>

      <FormModal user={user} submitted={submitted} showModal={showModal} handleCloseModal={handleCloseModal} />

      {submitted && <Alert variant="success" dismissable>{user.firstName} {user.lastName} profile created successfully!</Alert>}
      {error && <Alert variant="danger" dismissable>{error}</Alert>}

      <Form onSubmit={handleSubmit} noValidate validated={validated}>

        <Row style={{ marginTop: '20px' }}>
          <Col>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Col>
        </Row>

        <Row style={{ marginTop: '20px' }}>
          <Form.Group controlId="validationEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required placeholder="Enter email" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required placeholder="Password" />
            <Form.Control.Feedback type="invalid">
              Password is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Label style={{ marginTop: '25px' }}>I agree to the terms and conditions</Form.Label>
        <Form.Check
          type="checkbox"
          id="terms"
          name="terms"
          value="accepted"
          inline
          style={{marginLeft: '5px'}}
          onChange={handleChange}
          required
        />

        <Row>
          <Col>
            <Button block type="submit" className="btn-success" style={{ marginTop: '10px' }}>Submit</Button>
          </Col>
        </Row>

      </Form>

    </Container>
  );
};

export default RegistrationForm;