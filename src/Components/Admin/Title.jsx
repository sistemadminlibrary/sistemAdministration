import React from 'react'
import styled from 'styled-components';

const StyleH1 = styled.h1`
text-decoration: underline;
font-family:'Big Shoulders Display', cursive;
font-size: 4em;
`;

const Title = ({title}) => {
  return (
    <div className="text-center">
      <StyleH1>{title}</StyleH1>
    </div>
  )
}

export default Title
