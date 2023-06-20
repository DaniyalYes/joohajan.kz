// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/video/video1.mp4";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';


import React, { useState } from 'react'
import { Media } from "./media";
import './project.css'



export const Projects = () => {
    const [file, setFile] = useState(null)
  return (    
    <div className="project" id="projects">
        <h1 className='jobs'>Мои Работы</h1>

        <div className="project-container">
            {
                Media.map((file, index) => (
                    <div className="project-media" key={index}
                    onClick={()=> setFile(file)}>
                        {
                            file.type === 'image'
                            ? <img src={file.url} alt="" />
                            : <video src={`${file.url}#t=0.001`} muted preload='metadata'/>
                        }
                    </div>
                ))
            }
        </div>

        <div className="popup-media" style={{ display: file ? 'block' : 'none'}}>
            <span onClick={() => setFile(null)}>&times;</span>

            {
                file?.type === "video"
                ? <video src={file?.url} muted autoplay controls />
                : <img src={file?.url} />
            }
        </div>
    </div>
  )
}



