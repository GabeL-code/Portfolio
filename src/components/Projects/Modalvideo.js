import React, {useState}  from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import ButtonPlays from './PlayButton';
import  {AiFillYoutube} from 'react-icons/ai';





const Modalvideo = (props) => {
    const [isOpen, setOpen] = useState(false)
  
    return (
      <React.Fragment>
         <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        <ButtonPlays onClick={()=> setOpen(true)} >  <AiFillYoutube size="5rem"/>
		  </ButtonPlays> 
        
      </React.Fragment>
    )
  }
  
export default Modalvideo;