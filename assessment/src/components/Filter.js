import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';

function Filter() {
  return (
   <div>

<Form style={{width: '70%'}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-6"
              aria-label="Search"
              
            />
            
          </Form>

  <Container>
    <h4>Price</h4>

    <p>Range $5-$20</p>
  </Container>

  <Container>
    <h4>Product Categories</h4>

    <p>Coat and Jackets</p>
    <p>Dresses</p>
    <p>Playsuit</p>
    <p>Short</p>
    <p>Top</p>
    <p>Bottoms</p>
  </Container>

  <Container>
    <h4>Features Products</h4>

    <p>Tropical Playsuit</p>
    <p>Tropical Playsuit</p>
    <p>Tropical Playsuit</p>
    <p>Tropical Playsuit</p>
    <p>Tropical Playsuit</p>
    <p>Tropical Playsuit</p>
  </Container>
   </div>
  );
}

export default Filter;