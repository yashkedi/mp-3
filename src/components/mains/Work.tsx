import styled from "styled-components";

const TitleH3 = styled.h3`
    text-align: center;
    color: #E62727;
    padding: 3%;
    
`;

const WorkList = styled.ul`
  list-style: none;
  text-align: center;  
`;
const P = styled.p<{ padded?: boolean }>`
    text-align: center;
    font-size: calc(2px + 1vw);
  ${({ padded }) => (padded ? "padding: 3%;" : "")}
`;
const A = styled.a`
    color: black;        
    text-decoration: none;
`
export default function Work(){
    return (
        <main>
            <title>Work | Resume</title>
            <TitleH3>Work Experince</TitleH3>
            <WorkList>
                <li><h3 className="pd"><A href="https://www.rsystems.com/">Rsystem</A></h3>
                    <P padded={true}>
                        I worked as a <strong>Software Development Intern</strong> at R Systems, Kolkata (June–July
                        2024).
                        My primary responsibility was to develop a Python tool that integrated OpenAI GPT and LLaMA
                        models
                        to automate financial document analysis for public companies. This project reduced manual
                        processing
                        effort by nearly <strong>40%</strong>. I also automated the extraction of financial data from
                        corporate
                        websites using BeautifulSoup, which improved monthly reporting speed and data accessibility.
                    </P></li>
                <li className="pd"><h3 className="pd"><A
                    href="https://www.zaubacorp.com/company/KALPTARU-INVESTMENTS-PRIVATE-LIMITED/U65993TG1993PTC015407">Kalpatru
                    Invetment.Pvt</A></h3>
                    <P padded={true}>
                        As a <strong>Portfolio Management Intern</strong> at Kalptaru Investments (March–April 2021),
                        I performed financial data analysis and due diligence that influenced strategic capital
                        allocations
                        of around <strong>$20,000</strong>. I also managed a portfolio worth
                        approximately <strong>$200,000</strong>,
                        implementing options and futures trading strategies that helped the firm achieve a <strong>24% return on investment</strong>. This experience gave me practical exposure to
                        financial
                        markets and sharpened my quantitative skills.
                    </P></li>
                <li className="pd"><h3 className="pd"><A
                    href="https://www.zaubacorp.com/company/KEDIA-FINTRADE-PRIVATE-LIMITED/U67100WB2019PTC234384">Kedia
                    Fintrade.Pvt</A></h3>
                    <P padded={true}>
                        At <strong>Kedia Fintrade Pvt. Ltd.</strong>, I contributed to investment research and market
                        analysis
                        in a family-managed financial services environment. My work included tracking equity and
                        derivatives
                        markets, supporting decision-making for trades, and gaining insights into wealth management and
                        portfolio growth strategies. This role helped me build a stronger foundation in finance and
                        complemented my later internships in software and portfolio management.
                    </P></li>
            </WorkList>

        </main>
    )
}