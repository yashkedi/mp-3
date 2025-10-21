import { Link } from "react-router";
import styled from "styled-components";

const FooterBar = styled.footer`
    background-color: #E62727;  
    color: #F3F2EC;             
    padding: 1.2% 1.6%;
    font-size: calc(2px + 1vw);
  @media (max-width: 750px) {
    text-align: center;
  }
`;
const FooterLink = styled(Link)`
    color: #F3F2EC;        
    text-decoration: none;
`

export default function Footer(){
    return (
        <FooterBar>
            All rights reserved under <FooterLink to={`/credits`}>Credits</FooterLink>&#169;
        </FooterBar>
    )
}