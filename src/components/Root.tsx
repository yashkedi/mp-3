import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";
import {Routes} from "react-router"
import { Route } from "react-router";
import Home from "./mains/Home.tsx"
import Education from "./mains/Education.tsx";
import References from "./mains/References.tsx";
import Skills from "./mains/Skills.tsx";
import Work from "./mains/Work.tsx";
import Credits from "./mains/Credits.tsx";
import Project from "./mains/Project.tsx";
import styled from "styled-components";


const PageWrapper=styled.div`
    width: 80vw;
    margin: 0 auto;
`
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
const Content = styled.main`
  width: 70%;
  background: #F3F2EC;
  height: 120vh;  
  padding: 1.6% 1.2%;

  @media (max-width: 750px) { 
      width: 100%;
      height: 100vh;
  }
`;
export default function Root(){
    return (
        <>
            <PageWrapper>
                <Header/>
                    <FlexRow>
                        <Nav/>
                            <Content>
                                <Routes>
                                    <Route path={`/`} element={<Home/>}/>
                                    <Route path={`/education`} element={<Education/>}/>
                                    <Route path={`/project`} element={<Project/>}/>
                                    <Route path={`/references`} element={<References/>}/>
                                    <Route path={`/skills`} element={<Skills/>}/>
                                    <Route path={`/work`} element={<Work/>}/>
                                    <Route path={`/credits`} element={<Credits/>}/>
                                </Routes>
                            </Content>
                    </FlexRow>
                <Footer/>
            </PageWrapper>
        </>
    )
}