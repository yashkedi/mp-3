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
const A = styled.a`
    color: black;        
    text-decoration: none;
`


export default function Education(){
    return (
        <main>
            <title>Education | Resume</title>
            <TitleH3>Education</TitleH3>
            <P padded={true}>
                <h3><A href="https://www.bu.edu/">Boston University</A> <em>B.A in Computer Science</em></h3>
                <P padded={true}>2022-2026</P>
                <P padded={true}>
                    I am pursuing a <strong>Bachelor of Arts in Computer Science</strong> at <strong>Boston
                    University</strong>, Boston, MA, with an expected graduation date of May 2026.
                    My current CGPA is <strong>3.64/4.0</strong>, and I have been recognized on the <strong>Dean’s List
                    for
                    four semesters</strong>.
                    My academic journey has provided a balanced exposure to both theoretical and applied aspects of
                    computer
                    science.
                    I have studied foundational subjects like Discrete Mathematics and Linear Algebra, which strengthen
                    my
                    logical reasoning, along with applied courses such as Computer Systems and Software Engineering,
                    which
                    train me to design and implement reliable software systems.
                    Some of the key coursework I have completed includes <em>Data Structures (Java), Discrete
                    Mathematics,
                    Computer Systems, Linear Algebra, Analysis of Algorithms, Probability, Programming
                    Languages,</em> and
                    <em>Software Engineering</em>.
                    Beyond my required courses, I actively participate in hackathons, mini-projects, and self-driven
                    coding
                    challenges. Applying principles from Software Engineering, I have built structured and testable
                    projects, while my Computer Systems coursework sparked my interest in distributed systems and
                    optimization, which I continue to explore through academic projects and internships. This blend of
                    classroom learning and practical application has been critical in shaping me into a well-rounded
                    computer science student prepared for industry challenges.
                </P>
                <h3><A href="http://stjamesschoolkolkata.com/">St. James' School</A></h3> <P padded={true}>2008-2022</P>
                <P padded={true}>
                    I completed my schooling at <strong>St. James’ School, Kolkata</strong>, one of the oldest and most
                    prestigious schools in the city. My years at St. James’ instilled in me discipline, leadership, and
                    a
                    strong academic foundation across sciences, mathematics, and the humanities. The rigorous curriculum
                    and
                    co-curricular activities at St. James’ prepared me for the transition to higher education abroad and
                    shaped my values of integrity, resilience, and teamwork. My time there laid the groundwork for my
                    later
                    achievements at Boston University and continues to be an important part of my educational identity.
                </P>
            </P>

        </main>
)
}