import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';


function CollapsibleExample() {
  return (
    <div> 
  <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#fff'}}>
      <Container>
        <Navbar.Brand href="#home" style={{color: '#F86438', fontSize: '30px', fontWeight: 'bold'}} >Dealerz.</Navbar.Brand>
        
          <Nav  style={{justifyContent: 'right'}}>
            <Nav.Link href="#call-center">Call Center</Nav.Link>
            <Nav.Link href="#shipping-n-returns">Shipping & Returns</Nav.Link>
            
          </Nav>
          
        
      </Container>
    </Navbar>

    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#F5f7f8', height:'100px', fontWeight: 'bold'}}>
      <Container>
      <Navbar.Collapse id="responsive-navbar-nav" >
      <Nav >
            <Nav.Link href="#call-center">Shop</Nav.Link>
            <Nav.Link href="#shipping-n-returns">Promo</Nav.Link>
            
            <Nav.Link href="#call-center">About</Nav.Link>
            <Nav.Link href="#shipping-n-returns">Blog</Nav.Link>
            
          </Nav>
          
          
        </Navbar.Collapse>
     
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent: 'center', width: '70%'}}>
        <Nav style={{justifyContent: 'center', width: '100%'}} >
        <Form style={{width: '70%'}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-6"
              aria-label="Search"
              
            />
            
          </Form>
            
          </Nav>
          
          
        </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav" >
       
          <Nav  >
            <Nav.Link href="#call-center">x</Nav.Link>
            <Nav.Link href="#shipping-n-returns">x</Nav.Link>
          
            <Nav.Link href="#call-center">x</Nav.Link>
            <Nav.Link href="#shipping-n-returns">x</Nav.Link>  
          </Nav>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  

    
  );
}

export default CollapsibleExample;