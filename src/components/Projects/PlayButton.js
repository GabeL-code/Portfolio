import React from 'react'

import { ButtonPlay } from './ButtonStyles';

const ButtonPlays = (props) => (
   <>
    <ButtonPlay alt={props.alt} form={props.form} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonPlay>
  </>
);

export default ButtonPlays
