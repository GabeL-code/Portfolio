import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree,  Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import ModalVid from './ModalVid';
import Modalvideo from './Modalvideo';
import Modalvidd from './ModalVidd';
function Projects (props) {
  


 return (
  <Section nopadding id="projects">
    
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>

              

            </TitleContent>
       <Modalvidd vid={p.url} title={p.title}/>  
      
            <CardInfo className="card-info">{p.description}</CardInfo>
           
            <div>
             <h1>  <TitleContent>Technologies</TitleContent> </h1>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
            
              <ExternalLinks href={p.source}>Deployment or Github</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);
    }

export default Projects;