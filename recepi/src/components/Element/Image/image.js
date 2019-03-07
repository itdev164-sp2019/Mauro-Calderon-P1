import React from "react"
import styled from 'styled-components'

const Picture = styled.img`
  float:left;
  width:150px;
  color: palevioletred;
  font-size: 1em;
  margin: .25em;
  padding: 0.1em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const HedingImage = styled(Picture)`
  display:block;
  float:left;
  width:250px;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;

`;


export const Pic = props => <Picture{...props}/>
export const Hpic = props => <HedingImage{...props}/>