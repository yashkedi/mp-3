import {Link} from "react-router"
import styled from "styled-components";

const Sidebar = styled.nav`
  width: 30%;
  @media (max-width: 750px) {
      width: 100%;
  }
`;

const Panel = styled.ul`
      display: flex;
      flex-direction: column;
      list-style: none;
      background-color: #1E93AB;
      height: 120vh;
      padding: 2%;
    

  @media (max-width: 750px) {
      height: auto;
      padding: 2%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
  }
`;

const Item = styled.li`
  margin: 10% 5%;

  @media (max-width: 750px) {
      margin: 0 auto;
  }
`;

const BtnLink = styled(Link)`
      display: block;
      width: 100%;
      text-decoration: none;
      text-align: center;
      color: #F3F2EC;
      background: #0F0E0E;
      padding: 5%;
      font-size: calc(2px + 1vw);
    @media (max-width: 750px) {
        display: inline;
        width: 100%;
    }
`;

export default function Nav(){
    return (
        <Sidebar>
            <Panel>
                <Item><BtnLink to={`/`}>Home</BtnLink></Item>
                <Item><BtnLink to={`/education`}>Education</BtnLink></Item>
                <Item><BtnLink to={`/project`}>Project</BtnLink></Item>
                <Item><BtnLink to={`/references`}>References</BtnLink></Item>
                <Item><BtnLink to={`/skills`}>Skills</BtnLink></Item>
                <Item><BtnLink to={`/work`}>Work</BtnLink></Item>
            </Panel>
        </Sidebar>
    )
}