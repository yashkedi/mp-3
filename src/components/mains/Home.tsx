import { Link } from "react-router"
import yash from "../../assets/yash.png"
import styled from "styled-components";

const TitleH3 = styled.h3`
    text-align: center;
    color: #E62727;
    padding: 3%;
    
`;

const Portrait = styled.img`
    margin: 0 auto;
    display: block;
    max-width: 100%;
    border: #0F0E0E 3px solid;
`;
const P = styled.p<{ padded?: boolean }>`
    text-align: center;
    font-size: calc(2px + 1.5vw);
  ${({ padded }) => (padded ? "padding: 3%;" : "")}
`;

export default function Home(){
    return (
        <>
            <title>Home | Resume</title>
            <TitleH3>
              Home
            </TitleH3>
            <Link to={'/credits'}>
                <Portrait src={yash} alt="Picture of Yash Kedia"/>
            </Link>
            <P>Name: Yash Kedia </P>
            <P>Email: yashkedia2005@gmail.com</P>
            <P padded={true}>
                I’m a Computer Science undergraduate at Boston University (Class of 2026) with a strong interest in
                building reliable software and applying data-driven methods to finance. I’ve developed Python tools
                that automate analysis of financial documents and built a full-stack, Dockerized stock-trading app.
                My technical experience ranges from building full-stack web applications with Flask, React, and Docker,
                to automating financial data pipelines with Python and BeautifulSoup. I enjoy solving challenging
                problems, especially when they connect computer science with financial decision-making.
                Alongside academics, I actively pursue internships and projects that allow me to gain real-world
                experience — from automating financial analysis at <strong>R Systems</strong> to managing a
                $200,000 trading portfolio at <strong>Kalptaru Investments</strong>.
            </P>
        </>
    )
}