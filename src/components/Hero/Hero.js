

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { BlogCard, Div3, Img} from './HeroStyles';
import { DiCssdeck } from 'react-icons/di';
import { SocialIcons} from '../Header/HeaderStyles';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import React,{  forwardRef,
  useImperativeHandle,
  useRef,
  useState } from "react";

 // import Modal from 'react-bootstrap/Modal'
import ModalAct from './ModalAct';
import {projects} from './img_constants_hero.js'; 

import styles from './style.module.css'

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";


/*

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
    className={styles.modal}

      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body     className={styles.modal}
>
    

        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        {projects.map(({image}) => (
        <img src={image}/> 
     ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    

    
    
  

    </Modal>
  );
}
*/

/*
const pdfGenerate=()=>{
  var doc=new jsPDF('landscape' , 'px', 'a4','false');
  doc.addImage(pic,'PNG', 65,20,500,400)
  doc.addPage()
  doc.text(120,140, 'Name')
  doc.save('a.pdf')
}
*/



function Hero (props)
 {
  const [modalShow, setModalShow] = React.useState(false);

 
 return(
  
  <> 
  





    <Section row nopadding>


      <LeftSection>
        <SectionTitle main center>
          Welcome! <br />
         to my portfolio
        </SectionTitle>
        <SectionText>
          Hi my name is Gabe Lasut I am a Computer Science student at the University of Texas at dallas. My 
          webpage shows a display of my skillset, past projects, and resume.
        </SectionText>
      
      </LeftSection>
          <BlogCard>

 
          <div>
          {projects.map((p) => {
                  return  <Img src={p.image}/> ;
                })}  
    <ModalAct  />
      </div>
          <Div3>
          <SocialIcons href="https://github.com/GabeL-code">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/gabriel-lasut-96177a1a8/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        </Div3>
          </BlogCard>

     

    </Section>
   
  </>
      
      

);
 }

export default Hero;


