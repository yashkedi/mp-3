import styled from "styled-components";

const HeaderBar = styled.header`
    background-color: #E62727;
    color: #F3F2EC;           
    padding: 1% 2%;
    font-size: calc(2px + 1vw);
  @media (max-width: 750px) {
    text-align: center; 
  }
`;

export default function Header(){
    return (
        <HeaderBar>
            <h1>Yash Kedia</h1>
            <p>My online Resume</p>
        </HeaderBar>
    )
}