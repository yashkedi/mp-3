import styled from "styled-components";

const TitleH3 = styled.h3`
    text-align: center;
    color: #E62727;
    padding: 3%;
    
`;
const A = styled.a`
    color: black;        
    text-decoration: none;
`
const P = styled.p<{ padded?: boolean }>`
    text-align: center;
    font-size: calc(2px + 1.5vw);
  ${({ padded }) => (padded ? "padding: 3%;" : "")}
`;
export default function Credits(){
    return (
        <main>
            <TitleH3>Credits</TitleH3>
            <P padded={true}>
                This work by <A href="https://www.linkedin.com/in/yashkedia2005/">Yash Kedia</A> is licensed under the public domain.
            </P>
        </main>
    )
}