import Modal from 'react-bootstrap/Modal'
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { YoutubePlayer} from "reactjs-media";
import ReactPlayer from 'react-player/youtube'
import "./Modalvid.module.css";
import ButtonPlays from './PlayButton';
import  {AiFillYoutube} from 'react-icons/ai';

import {HeaderThree } from './ProjectsStyles';
function ModalVidd(props) {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }
  
    return (
      <>
        {values.map((v, idx) => (


<ButtonPlays key={idx}  onClick={() => handleShow(v)} >   <AiFillYoutube size="5rem"/> {typeof v === 'string' && `below ${v.split('-')[0]}`}
</ButtonPlays> 

          
        ))}
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
       <h1> <Modal.Header closeButton>
          <Modal.Title>  <HeaderThree> {props.title}</HeaderThree> </Modal.Title>
        
        </Modal.Header>
        </h1>
          <Modal.Body>
          
          <ReactPlayer
      url={props.vid }
      className="react-player"
      playing
      width="100%"
      height="100%"
      controls={false}
    />
            </Modal.Body>
        </Modal>
      </>
    );
  }
  export default ModalVidd;