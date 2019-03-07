import React from 'react'
//import PropTypes from "prop-types";
import styled from "styled-components"

const StyledButton = styled.button`
float:left;
color: palevioletred;
background-color:white;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 3px solid tomato;
border-radius: 3px;
`;
const StyledButton1 = styled(StyledButton)`
border: 3px solid red;
`;

export const Button = props => <StyledButton{...props}/>
export const Button1 = props => <StyledButton1{...props}/>
