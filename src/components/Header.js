import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { styled } from 'styled-components';
import logo from '../assets/Images/calculator-white.svg'
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div>

    <MainHeader>
        <Navbar expand="lg">
            <Container>
            <Link to="/"><img src={logo} alt='' /></Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Link to ="/" className='nav-link'>Home</Link>
                  <Link to="/calc" className='nav-link'>Calculator</Link>
                  <Link to="/contact" className='nav-link'>Contact Us</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    </MainHeader>

    </div>
  )
};
const MainHeader = styled.header`
background-color: ${({ theme }) => theme.colors.bg};
.nav-link{
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-weight: 500;
  padding-right: 20px !important;
  &.active{
    color: ${({ theme }) => theme.colors.white};
  }
}
.navbar-toggler{
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid white;
  &:focus{
    box-shadow: none;
  }
  .navbar-toggler-icon{
    color: ${({ theme }) => theme.colors.white} ;
    filter: brightness(17.5);
  }
}
`;

export default Header;