import React, {useState} from 'react'
import { Container,Card,Form, Button } from 'react-bootstrap';
import { styled } from 'styled-components';

const Bmi = () => {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState(null);


  const CalculateBMI = () => {
    if (!weight || !height) {
      alert('Please enter both weight and height.');
      return;
    }
    const weightInKg = parseFloat(weight);
    const heightInMeters = parseFloat(height) / 100;
  
    if (isNaN(weightInKg) || isNaN(heightInMeters) || heightInMeters === 0) {
      alert('Invalid input. Please enter valid numbers.');
      return;
    }
    const bmiResult = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiResult);

    // Reload the page after calculations have finished.
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  
  };
  return (
    <div>
        <div className="sec-space">
          <Container>
            <Bodymask>
            <div className="row">
              <div className="col-md-8">
                  <Card>
                      <Card.Body>
                      <Card.Title className='text-center'>Calculate Your Body Mask Index</Card.Title>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-md-6">
                              <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className='mb-3'><b>Height (Cm)</b></Form.Label>
                                    <Form.Control type="text" placeholder="Enter Your Height" value={height} onChange={(e)=> setHeight(e.target.value)} />
                                  </Form.Group>
                              </Form>
                            </div>
                            <div className="col-md-6">
                              <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className='mb-3'><b>Weight (Kg)</b></Form.Label>
                                    <Form.Control type="email" placeholder="Enter Your Weight" value={weight} onChange={(e)=> setWeight(e.target.value)} />
                                  </Form.Group>
                              </Form>
                            </div>
                            <div className="col-md-12 text-center">
                              <Button variant="primary" onClick={CalculateBMI}>Calculate</Button>
                            </div>
                          </div>
                        </div>
                        
                      </Card.Body>
                    </Card>
              </div>
              <div className="col-md-4">
                <Card>
                  <Card.Body>
                    <Card.Title className='text-center'>Your Result</Card.Title>
                    {bmi && (
                      <div>
                        <h5>Your BMI: {bmi}</h5>
                        <p>
                          {bmi < 18.5
                            ? 'You are underweight.'
                            : bmi >= 18.5 && bmi < 24.9
                            ? 'You have a normal weight.'
                            : bmi >= 25 && bmi < 29.9
                            ? 'You are overweight.'
                            : 'You are obese.'}
                        </p>
                      </div>
                   )}
                 </Card.Body>
                </Card>
              </div>
             </div>
            </Bodymask>
          </Container>
        </div>

    </div>
  )
}
const Bodymask = styled.main`
.card{
  box-shadow: 0px 0px 10px -4px rgba(0,0,0,0.75);
  padding: 20px;
}
.card-title{
  font-size: 30px;
  font-weight: 600;
  line-height: 40px;
  color: ${({ theme }) => theme.colors.bg};
  padding-bottom: 30px;
}
.btn-primary{
  padding: 6px 25px;
}
`;


  export default Bmi;