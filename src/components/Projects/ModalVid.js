

import React, {Component} from "react";

import {Divvid} from './ProjectsStyles';
import { Modal } from "react-responsive-modal";
import Button from '../../styles/GlobalComponents/Button';
import ReactPlayer from 'react-player'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import styles from "./Modalvid.module.css";
import  {AiFillYoutube} from 'react-icons/ai';
import {height, width} from "./Modalvid.module.css"
import { YoutubePlayer} from "reactjs-media";
import ButtonPlays from './PlayButton';


 class ModalVid extends Component {
   
    

  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const height = {
      
      height: "650px"

    };
    const width = {
      
      width: "650px"

    };
    return (
        
    
          <div>
      
        
		 <ButtonPlays onClick={this.onOpenModal} >  <AiFillYoutube size="5rem"/>
		  </ButtonPlays> 
    
        <Modal open={open} onClose={this.onCloseModal}   >
            
        <YoutubePlayer
                src={this.props.vid } // Reqiured
                
               height={height} width={width}
                
            />
      
      
          
  
      </Modal>
    
      </div>

    );
  }
}

export default ModalVid;



