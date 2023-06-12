import Card from 'react-bootstrap/Card';
import pic from './hero.png'

function ImgOverlayExample() {
  return (
    <Card className=" text-black" style={{border: '0', borderRadius: '0'}}> 
      <Card.Img src={pic} alt="Card image" style={{backgroundSize: 'cover',backgroundPosition: 'top-right', minHeight: '400px'}} />
      <Card.ImgOverlay style={{marginTop: '10%', marginLeft: '50%', maxWidth: '100%'}}>
        <Card.Title><h1>Home Shopping, Your Choice!</h1> </Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;