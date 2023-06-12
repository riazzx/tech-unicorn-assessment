import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import pic from './hero.png'

function ProductCard() {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={pic} />
            <Card.Body style={{textAlign: 'center'}}>
              <Card.Title>Urbano Jacket</Card.Title>
              <Card.Text>
                ⭐⭐⭐⭐⭐
              </Card.Text>
              <Card.Text>
                watchmenow
              </Card.Text>
              <Card.Text>
                $99
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProductCard;