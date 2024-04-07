import React , { useState } from 'react'
import { styled } from 'styled-components';
import { Row,Col, Container } from 'react-bootstrap';

const Calculator = () => {
    const [result, setResult] = useState("");
    const handleButtonClick = (e) => {
        setResult(result.concat(e.target.name));
        
    };

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("Error");
        }
        };
    const backspace = () => {
            setResult(result.slice(0, -1));
    };
    const clear = () => {
            setResult("");
    };

  return (
      <div>
          <div className="sec-space">
              <Container>
                    <Calculate>
                    <Row>
                          <Col md="8" className="mx-auto">
                              <h4 className='text-center card-title'>Calculator</h4>
                                <div className="Calculator">
                                    <div className='input'><input className='form-control' type='text' value={result}/></div>
                                        <div className="buttons">
                                            <button name='%' className='highlight' onClick={handleButtonClick}>%</button>
                                            <button name='C' className='highlight' onClick={backspace}>C</button>
                                            <button name='=' className='highlight' onClick={calculate}>=</button>
                                            <button name='AC' className='highlight' onClick={clear}>AC</button>
                                            <button name='1' onClick={handleButtonClick}>1</button>
                                            <button name='2' onClick={handleButtonClick}>2</button>
                                            <button name='3' onClick={handleButtonClick}>3</button>
                                            <button name='+' className='highlight' onClick={handleButtonClick}>+</button>
                                            <button name='4' onClick={handleButtonClick}>4</button>
                                            <button name='5' onClick={handleButtonClick}>5</button>
                                            <button name='6' onClick={handleButtonClick} >6</button>
                                            <button name='*' className='highlight' onClick={handleButtonClick}>*</button>
                                            <button name='7' onClick={handleButtonClick}>7</button>
                                            <button name='8' onClick={handleButtonClick}>8</button>
                                            <button name='9' onClick={handleButtonClick}>9</button>
                                            <button name='-' className='highlight' onClick={handleButtonClick}>-</button>
                                            <button name='0' onClick={handleButtonClick}>0</button>
                                       
                                          
                                           
                                            <button name='/' className='highlight' onClick={handleButtonClick}>/</button>
                                            <button name='(' className='highlight' onClick={handleButtonClick}>(</button>
                                            <button name=')' className='highlight' onClick={handleButtonClick}>)</button>
                                            
                                        </div>
                                </div>
                        </Col>
                    </Row>
                    </Calculate>
              </Container>
         </div>
    </div>
  )
}
const Calculate = styled.main`
.Calculator {
    padding: 2rem;
    padding-right: 0px;
    background-color: #fff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    max-width: 420px;
    margin: auto;
    border-radius: 20px;
    }
  
  .form-control {
    color: ${({theme}) => theme.colors.text};
    background-color: #fff;
    width: 345px;
    min-height: 45px;
    margin-bottom: 20px;
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: rgba(255, 255, 255, 0.333);
    border-radius: 50px;
   
    transform: translate(0px, 0px) rotate(0deg);
    transition: 0.2s;
    box-shadow: -4px -2px 16px 0px #ffffff, 1px 2px 3px 0px;
  }
.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }
  .card-title {
    color: ${({theme}) => theme.colors.bg};
  }
  button {
    height: 50px;
    width: 50px;
    line-height: 30px;
    font-size: 13px;
    font-weight: 500;

    letter-spacing: 0.4px;
    color: ${({theme}) => theme.colors.text};
    background-color: #fff;
    border-style: solid;
    border-width: 2px 2px 2px 2px;
    border-color: rgba(255, 255, 255, 0.333);
    border-radius: 50px;
    transform: translate(0px, 0px) rotate(0deg);
    transition: 0.2s;
    box-shadow: -4px -2px 16px 0px #ffffff, 1px 2px 3px 0px;
  }
  button.highlight{
    background-color: #003366;
    border: 1px solid #003366;
    color: #fff;
  }
  @media (max-width: 768px) {
    .form-control {
        width: 300px;
    }
  }

`;
export default Calculator