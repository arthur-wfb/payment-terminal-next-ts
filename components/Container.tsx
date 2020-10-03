import React from 'react'
import styled from 'styled-components'

const ContainerBlock = styled.div`
    position: relative;
    background: white;
    height: 550px;
    width: 500px;
    padding: 20px 50px;
    margin: 50px auto;
    box-shadow: 0px 6px 10px -7px rgba(0,0,0,0.75);
    display: flex;
    flex-direction: column;
    
    @media (max-width: 1024px){
        width: 600px;
        height: 750px;
    }

    @media (max-width: 740px){
        width: auto;
        height: 100%;
        margin: 0;
        padding: 20px 20px;
    }
    
    @media (max-height: 625px){
       height: 530px;
       width: 500px;
    }
    
    @media (max-height: 570px){
        width: auto;
        height: 100%;
        margin: 0;
        padding: 20px 20px;
    }
`

interface ContainerProps {
    children: any
}

function Container(props: ContainerProps){
    return (
        <ContainerBlock>
            {props.children}
        </ContainerBlock>
    );
}

export default Container;