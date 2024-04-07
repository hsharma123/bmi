import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
}
html{
    overflow-x: hidden;
}

 /*---- Typography ----*/
 
.sec-space{
    padding-top: 70px;
    padding-bottom: 70px;
}
.pt-0{
    padding-top: 0;
}
.pb-0{
    padding-bottom: 0;
}
h2{
    color: ${({theme}) => theme.colors.bg};
    font-size: 42px;
    font-weight: 600;
    line-height: 52px;
}

h3{
    font-size: 36px;
    font-weight: 600;
    line-height: 46px;
}

h4{
        font-size: 30px;
        font-weight: 600;
        line-height: 40px;
}

h5{
    font-size: 24px;
    font-weight: 600;
    line-height: 34px;
}

p{
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
}
.form-control{
    &:focus{
        box-shadow: none;
        border: 1px solid #003366;
    }
}
.btn-primary{
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid #003366;
    padding: 12px 25px;
    &:hover{
        background-color: ${({ theme }) => theme.colors.bg};
        color: ${({ theme }) => theme.colors.white};
        border: 1px solid #003366;
    }
}
.form-control{
    min-height: 45px;
}
`;
export default GlobalStyle;