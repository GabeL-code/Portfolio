import styled from 'styled-components';


  export const Formsub = styled.form`
  border-radius: 10px;
  background-color: #142533;

  box-shadow: 3px 3px 20px rgba(255, 255, 255, 0.5);
  max-width: 1010px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;
  padding: 20px;
 
  display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    @media ${(props) => props.theme.breakpoints.sm} {
      margin: 0px;
      display: 'flex',
      width: 100%;
    }
`;


export const Box = styled.div`
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
@media ${(props) => props.theme.breakpoints.sm} {
  width: 100%;
}
`;


export const Divinputs = styled.div`
  padding: 60px;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

export const ButtonBack = styled.input`
  width: ${({ alt }) => alt ? '150px' : '262px'};
  height: ${({ alt }) => alt ? '52px' : '64px'};
  border-radius: 50px;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form) ? '0' : '10px 350px 10px '};
  color: #fff;
  background: ${({ alt }) => alt ? 'linear-gradient(#9198e5,#000);' : 'linear-gradient( #9198e5, #000);'};
  box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    opacity: .5;
  }

  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => alt ? '150px' : '184px'};
    height: ${({ alt }) => alt ? '52px' : '48px'};
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
    margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    
    
    margin: ${({ alt, form }) => (alt || form) ? '0' : '10px 0 40px 40px'};
    font-size: ${({ alt }) => alt ? '20px' : '24px'};
    font-weight: 600;
    width: ${({ alt }) => alt ? '150px' : '262px'};
    height: ${({ alt }) => alt ? '52px' : '64px'};
    
  }


  
`

export const ButtonFront = styled.input`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt }) => alt ? 'linear-gradient(#000, #9198e5);' : 'linear-gradient(#000, #9198e5);'};
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    justify-content: center;
  }
`





export const Input = styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
font-size: 200%;
`

export const Message = styled.textarea`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
font-size: 200%;
`

