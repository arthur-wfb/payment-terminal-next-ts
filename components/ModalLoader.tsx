import React from 'react'
import Loader from './Loader'
import styled from 'styled-components'

const ModalLoaderBlock = styled.div`
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

function ModalLoader() {
    return (
        <ModalLoaderBlock className='modal-loader'>
            <Loader />
        </ModalLoaderBlock>
    );
}

export default ModalLoader