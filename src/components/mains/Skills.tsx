import styled from "styled-components";

const TitleH3 = styled.h3`
    text-align: center;
    color: #E62727;
    padding: 3%;
    
`;
const P = styled.p<{ padded?: boolean }>`
    text-align: center;
    font-size: calc(2px + 1vw);
  ${({ padded }) => (padded ? "padding: 3%;" : "")}
`;
export default function Skills(){
    return (
        <main>
            <title>Skills | Resume</title>
            <TitleH3>Skills</TitleH3>
            <P padded={true}>
                <strong>Programming Languages:</strong> I am proficient in Python, Java, JavaScript, and C. Python has
                been my go-to language
                for automation and data-driven tasks, such as developing a financial document analysis tool that
                integrated GPT/LLaMA models
                to reduce manual work by 40%. Java has given me a strong foundation in object-oriented programming,
                reinforced through
                academic courses like Data Structures and Software Engineering. JavaScript has allowed me to create
                interactive front-end
                experiences, while C has strengthened my understanding of low-level systems and memory management,
                ensuring I can move between
                high-level problem-solving and deeper system concepts with ease.
                <br/><br/>
                <strong>Frameworks & Tools:</strong> My development work is supported by a wide range of frameworks and
                tools. I regularly
                use React for creating engaging user interfaces, Node.js and Express.js for backend services, and HTML
                and CSS for building
                responsive and accessible websites. Git is central to my workflow, allowing me to manage code versions
                efficiently and collaborate
                with others. I also use Postman extensively for testing APIs, ensuring smooth integration between
                services. VS Code is my primary
                development environment, where I integrate debugging, extensions, and productivity tools to streamline
                my workflow. These
                frameworks and tools have enabled me to build full-stack applications that are robust, scalable, and
                user-friendly.
                <br/><br/>
                <strong>Databases:</strong> My projects and internships have required me to work with both relational
                and non-relational databases,
                including MySQL, MongoDB, and SQLite. With MySQL, I have designed normalized schemas and implemented
                queries to handle structured
                data. MongoDB has given me flexibility in dealing with unstructured datasets, while SQLite has been my
                choice for lightweight,
                embedded databases in academic projects like the Docker-based stock trading application. These
                experiences have made me confident
                in designing, querying, and maintaining databases that meet the needs of varied applications.
                <br/><br/>
                <strong>Analytical & Problem-Solving Skills:</strong> My background in finance and computer science has
                enhanced my analytical mindset.
                For example, at Kalptaru Investments, I applied technical and financial analysis to manage a $200,000
                portfolio, achieving a
                24% ROI through options and futures trading. At R Systems, I solved problems of efficiency by
                introducing automation, proving
                my ability to recognize bottlenecks and design technical solutions that deliver measurable improvements.
                <br/><br/>
                <strong>Interests & Personal Development:</strong> Outside of academics and internships, I am passionate
                about financial markets,
                particularly options trading and value investing. These interests keep me updated with market trends and
                sharpen my quantitative
                decision-making skills. Soccer is another passion of mine — whether playing on the field or following
                professional matches, it
                teaches me teamwork, strategy, and resilience. I also dedicate time to continuous learning, exploring
                distributed systems,
                machine learning, and emerging tools in the fintech space, ensuring I stay ahead in a rapidly evolving
                technological landscape.
            </P>
        </main>
    )
}