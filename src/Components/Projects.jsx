import React from 'react'
import Styled from 'styled-components'
import Styles from './Styles'

const GridContainer = Styled.div`
 display: grid;

 @media (max-width: 748px){
  
 }
`;

const GridItem = Styled.div`
 @media (max-width: 748px){
  
 }
`;

const Item1 = Styled(GridItem)`
 @media (max-width: 748px){
  
 }
`;

const Item2 = Styled(GridItem)`
 @media (max-width: 748px){
  
 }
`;

const Item3 = Styled(GridItem)`
 @media (max-width: 748px){
  
 }
`;


const Projects = () => {

  return(
    <GridContainer>
      <Item1></Item1>
      <Item2></Item2>
      <Item3></Item3>
    </GridContainer>
  );
}

export default Projects