import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 50%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    

  
  }

`;
export const BlogCard = styled.div`
  border-radius: 20px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  margin-left: 10px;
  height: 500px;
  width: 500px;
  margin-top: 60px;

  background-color: #fff;


  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const DivModal = styled.div`


@media ${(props) => props.theme.breakpoints.sm} {
  width: 100%;
  padding-right: 10px;
  float: left; 

}
`;

export const SocialIcons = styled.a`
transition: 0.3s ease;
color: black;
border-radius: 50px;
  padding: 8px;
&:hover {
 
    
  }
`;


export const Img = styled.img`
  width: 50%;
  height: 50%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  @media ${(props) => props.theme.breakpoints.sm} {
    width:75%;
    height: 75%;
  }

`

export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
    margin-bottom: auto;
  }
`;
