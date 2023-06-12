
import './App.css';
import CollapsibleExample from './components/Navbar';
import ImgOverlayExample from './components/HeroCard';
import Filter from './components/Filter'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Products from './components/Products';
import NewsletterCard from './components/NewsletterCard';
import Footer from './components/Footer';


function App() {
  return (
   
    <div style={{backgroundColor: '#f7f7f7'}}>
      <CollapsibleExample />
      <ImgOverlayExample style={{minHeight: '40%'}} />
      
      <Container style={{marginTop: '50px'}}>
      <Row>
        <Col sm={4}><Filter /></Col>
        <Col sm={8}> <Products /> </Col>
      </Row>
      
    </Container>
    <div className='p-5' style={{minHeight: '400px'}}>
    <NewsletterCard />
    </div>
    
    <Footer />
    </div>

    


  );
}

export default App;
