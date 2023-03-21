import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img 
        id="imgcl"
          className="d-block w-90"
          src="./IMG/banner1.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
        id="imgcl"
          className="d-block w-90"
          src="./IMG/banner1.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
        id="imgcl"
          className="d-block w-90"
          src="./IMG/banner1.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;