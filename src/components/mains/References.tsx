import styled from "styled-components";

const TitleH3 = styled.h3`
    text-align: center;
    color: #E62727;
    padding: 3%;
    
`;
const RefTable = styled.table`
  margin: 5% auto;
  width: 70%;
`;
const TH = styled.th`
  border: 2px solid #654520;
`;

const TD = styled.td`
  border: 2px solid #654520;
  font-size: calc(2px + 1vw);
`;
export default function References() {
    return (
        <main>
            <title>References | Resume</title>
            <TitleH3>Professional</TitleH3>
            <RefTable>
                <tbody>
                <tr>
                    <TH>Name</TH>
                    <TH>Position</TH>
                    <TH>Contact</TH>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <TD>Mr. Rajiv Mehta</TD>
                    <TD>Manager, R Systems</TD>
                    <TD>+91-98300-12345</TD>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <TD>Ms. Ananya Sen</TD>
                    <TD>Director, Kalptaru Investments</TD>
                    <TD>+91-98740-54321</TD>
                </tr>
                </tbody>
            </RefTable>

            <RefTable>
                <tbody>
                <tr>
                    <TH>Name</TH>
                    <TH>Relation</TH>
                    <TH>Contact</TH>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <TD>Mr. G. Kedia</TD>
                    <TD>Father</TD>
                    <TD>+91-98310-22222</TD>
                </tr>
                </tbody>
                <tbody>
                <tr>
                    <TD>Mrs. P. Kedia</TD>
                    <TD>Mother</TD>
                    <TD>+91-98310-33333</TD>
                </tr>
                </tbody>
            </RefTable>

        </main>
    )
}