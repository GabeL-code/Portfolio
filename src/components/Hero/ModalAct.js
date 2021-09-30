

import React, {Component} from "react";

import { DivModal} from './HeroStyles';
import { Modal } from "react-responsive-modal";
import Button from '../../styles/GlobalComponents/Button';
import {  SectionTextt , SectionTitlee} from '../../styles/GlobalComponents';

import {projects} from './img_constants_hero.js'; 
import './customstyling.module.css';


class ModalAct extends Component {
   
    

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

    return (
        
      
          <div>
      
        
        <Button onClick={this.onOpenModal}>Open Resume    
             <img src="https://img.icons8.com/ios/80/000000/open-resume.png"/>
            
          </Button> 
          <DivModal>
        <Modal open={open} onClose={this.onCloseModal}  >
            
            
            <br/>
        
          
          
          <br/>
          <br/>
          
        <SectionTitlee>Skills</SectionTitlee>
        <SectionTextt>
        - React, JavaScript (Web Development) 
        <br/> 
        - MERN stack (MongoDB, Express.js, React.js, and Nodejs) 
        <br/>
        - Java (Object Orientated Language)  
        <br/>
        - Flutter (SDK), Dart language, Android Studio, and Firebase(backend as a service)  
        <br/>
        - Git version control  
        <br/>
        - AWS (Amazon Web Services)  
        <br/>
        - Development in SCRUM management setting 
        <br/>
        </SectionTextt>
        <SectionTitlee>Experience and Projects</SectionTitlee>
        <SectionTextt>
        Codubee StockPicker Project
        <br/>
         Developed stocked picker application with a SCRUM team under Codubee. Used Jira software to manage tasks in the backlog for sprints. Used Figma to design the UI of components. Used knowledge of React.js to design user friendly components for stock picker applications. Routed pages and set up API entry points. Used Redux to manage the state of certain components.  Backend, Designed API calls and used knowledge of HTTP request and response handling to pass information to the front-end components. 
        <br/>
        <br/>
        ACM fluent project 
        <br/>
         ACM(Association for Computing Machinery) Projects worked under a SCRUM team to develop a language learning mobile application using Flutter SDK, Dart Language, and Firebase for the backend. Placed fourth in ACM projects Spring 2021. 
        <br/>
        <br/>
        FrontEnd languages 
        <br/>
         Built a frontend interactive portfolio using base HTML, CSS, and JavaScript to develop skills in basic web development.  
        <br/>
        <br/>
        Java UTD 
        <br/>
         Learned the applications of fundamental programming techniques, learned the applications of object oriented programming in java. Made use of fundamental concepts of  data structures and algorithms 
        <br/>
        <br/>
        Java Projects
        <br/>
        Built a personal banking system with Java to develop skill with backend development. 
 
        Developed a Java affine coder and decoder.  
 
        Developed a playful Tic-Tac-Toe program with self-playing AI developed using a backtracking algorithm developed with Java. 
        <br/>
        <br/>
        Education  
        <br/>
        Currently a student studying for a bachelor's in computer science at The Erik Jonsson School of Engineering & Computer Science at University of Texas at Dallas. 
        Graduation year 2023  
        GPA: 3.8 


        
        </SectionTextt>


        
 {/*
     {projects.map(({image}) => (
        <img src={image} class="responsive" width="600" height="400" /> 
     ))} 
     */} 


        </Modal>
        
        </DivModal>
      </div>
    );
  }
}

export default ModalAct;

