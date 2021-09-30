import Acomplishments from '../components/Acomplishments/Acomplishments';

import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Form from '../components/Forms/Form'; 
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
  
      </Section>
      <Timeline />
      <Technologies />
      
      <Projects />
      
   
   
       <Form/> 
    </Layout>
  );
};

export default Home;
