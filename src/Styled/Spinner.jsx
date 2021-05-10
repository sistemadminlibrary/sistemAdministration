import React from 'react'

import styled, {keyframes} from 'styled-components';


const spin = keyframes`
0%{
  transform: rotate(0deg);
}

100%{
  transform: rotate(360deg);
}
`;
const SpinerElement = styled.div`
position:relative;
margin:auto;
top:15em;
border: 4px solid rgba(0,0,0,0.5);
height: 54px;
width: 54px;
border-left-color: darkslategrey;
border-radius: 50%;
animation: ${spin} 1s linear infinite;
`;



const Spinner = () => {
  return (
    <SpinerElement></SpinerElement>
  )
}

export default Spinner
