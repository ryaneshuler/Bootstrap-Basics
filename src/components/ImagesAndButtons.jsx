import { Container, Image, Button, Row, Col } from 'react-bootstrap';

function ImagesAndButtons() {
  return (
    <Container fluid className="px-0">
      <Image 
        src="../Media/Images/barcelona-01.jpeg"
        fluid
        className="w-100"
        alt="Banner"
      />
      <Image 
        src="../Media/Images/headshot-01.jpeg"
        fluid
        roundedCircle
        className="w-50 mx-auto d-block"
        alt="Profile Picture"
      />
      <Row className="justify-content-center" style={{ margin: '20px' }}>
        <Col xs="auto">
          <Button>
            Desktop Button
          </Button>
        </Col>
        <Col xs="auto">
          <Button className="d-block d-md-none">
            Mobile Button
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ImagesAndButtons;