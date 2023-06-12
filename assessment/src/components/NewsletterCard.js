import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewsletterCard() {
  return (
    <Card className="text-center" style={{minHeight: '400px'}}>
      
      <Card.Body style={{marginTop: '100px'}}>
        <Card.Title style={{fontSize: '48px', fontWeight: 'bold'}}>Join Our News Letters</Card.Title>
        <Card.Text>
        Leverage agile frameworks to provide a robust synopsis for high level overviews. 
        </Card.Text>
        <Card.Text>
        Iterative approaches to corporate strategy foster 
        </Card.Text>
        <Button variant="primary">Subscribe</Button>
      </Card.Body>
     
    </Card>
  );
}

export default NewsletterCard;