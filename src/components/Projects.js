import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import emailFinder from "../assets/img/find-my-email.png";
import qr from "../assets/img/qr-code.png";
import downloader from "../assets/img/video-downloader.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';




export const Projects =  () => {

  let url = 'http://127.0.0.1:5500/public/qr-code/index2.html';

    const projects = [
        {
            title: "Video Downloader",
            description: "Want to see a video later?",
            imgUrl: downloader,
            link:  <a href = "https://github.com/felipbttk/Youtube_video_downlader" target="blank">Click me</a>
          },
          {
            title: "Create your QR code",
            description: "Share it with your friends",
            imgUrl: qr,
            link:  <a href = "https://github.com/felipbttk/Qr_Code_Generator_Reader" target="blank">Click me</a>,
          },
          {
            title: "Find all the E-Mails",
            description: "Try the E-Mail-finder",
            imgUrl: emailFinder,
            link: "https://github.com/felipbttk/Qr_Code_Generator_Reader",
          },
          // {
          //   title: "Business Startup",
          //   description: "Design & Development",
          //   imgUrl: projImg1,
          //   link: "https://www.facebook.com/",
          // },
          // {
          //   title: "Business Startup",
          //   description: "Design & Development",
          //   imgUrl: projImg2,
          //   link: "https://www.facebook.com/",
          // },
          // {
          //   title: "Business Startup",
          //   description: "Design & Development",
          //   imgUrl: projImg3,
          //   link: "https://www.facebook.com/",
          // },
    ];

    

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                          <h2>Projects</h2>
                          {/* <p>skdfhdsjkhfjksdjkfndsnfnsdnfsjndjkfn
                            jsdnkfksdnfnsdnfnksdnkfsnjsnksdndsjnksd
                            njdkfjsnfknds</p> */}
                        </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first"> Small Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Bigger one</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Not</Nav.Link>
                            </Nav.Item>
                        </Nav> */}
                        <Tab.Content>
                            { <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                          return (  
                                            <ProjectCard
                                              key={index}
                                              {...project}  
                                            />
                                          )  
                                        })
                                    }
                                </Row>
                                {/* <Row>
                                    {
                                        projects.map((project, index) => {
                                          return (  
                                            <ProjectCard
                                              key={index}
                                              {...project}  
                                            />
                                          )  
                                        })
                                    }
                                </Row> */}
                            </Tab.Pane> }
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                          return (  
                                            <ProjectCard
                                              key={index}
                                              {...project}  
                                            />
                                          )  
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            {/* <Tab.Pane eventKey="second">Filippos Theofanakis</Tab.Pane> */}
                            <Tab.Pane eventKey="third">Filippos Theofanakis</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>                   
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}