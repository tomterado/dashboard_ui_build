import React from 'react';

import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const LeftColContainer = styled.div`
    display: flex;
    height: 150vh;
    backgroum
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


/*const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;*/


export {
    Title,
    LeftColContainer
}
