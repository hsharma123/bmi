import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <div>
          <FOOTER>
            <div className="Footer">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/calc">Calculator</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
         </FOOTER>
    </div>
  )
}
const FOOTER = styled.main`
.Footer{
    background-color: ${({ theme }) => theme.colors.bg};
    padding: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
    ul{
        display: flex;
        gap: 20px;
        list-style: none;
        justify-content: center;
        margin: auto;
        li{
            a{
                color: ${({ theme }) => theme.colors.white};
                text-decoration: none;
            }
        }
    }
}
@media(max-width:768px){
    .Footer{
        position: inherit;
    }
}
`;
export default Footer