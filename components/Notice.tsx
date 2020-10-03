import React from 'react'
import {Status} from '../constants/Status';
import styled from 'styled-components'

const NoticeBlock = styled.div`
    text-align: center;
    vertical-align: middle;
    height: 56px;
    width: 100%;
    border: 1px solid black;
    
    ${props => {
        switch (props.noticeType){
            case Status.Success:
                return 'color: #009944; border: 2px dashed #009944';
            case Status.Error:
                return 'color: #f0541e; border: 2px dashed #f0541e';
        }    
    }}
`

interface NoticeProps {
    type: string
    message: string
}

function Notice({type, message}: NoticeProps){
    let noticeType: string;

    switch(type) {
        case Status.Error:
            noticeType = Status.Error;
            break;

        case Status.Success:
            noticeType = Status.Success;
            break;
        default:
            noticeType = Status.Warning;
    }

    return (
        <NoticeBlock noticeType={noticeType}>
            <p >{message}</p>
        </NoticeBlock>
    );
}

export default Notice