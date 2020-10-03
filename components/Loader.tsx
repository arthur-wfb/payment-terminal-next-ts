import React from 'react'
import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const DualRing = styled.div`
    display: inline-block;
    width: 100px;
    height: 100px;
    
    &:after {
        position: absolute;
        top: 50%;
        content: "";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #FFC107;
        border-color: #FFC107 transparent #FFC107 transparent;
        animation: ${rotate} 1.2s linear infinite;
        margin-top: -50px;
    }
`;


function Loader(){
    return(
        <div style={{ height:'100%', display:'flex', justifyContent:'center', margin:'auto'}}>
            <DualRing/>
        </div>
    )
}

export default Loader