import React, {useContext} from 'react'
import NoticeAndLoaderContext from '../contexts/NoticeAndLoaderContext'
import Router from 'next/router'
import styled from 'styled-components'
import {IOperator} from "../interfaces/IOperator";

const Operator = styled.div`
    width: 100%;
    height: 70px;
    position: relative;
`

const Icon = styled.img`
    height: 70px;
    width: 70px;
    padding: 15px;
`

const OperatorName = styled.span`
    position: absolute;
    top: 50%;
    margin-top: -0.625em;
    margin-left: 0.5em;
`

interface OperatorProps {
    operator: IOperator
}

function OperatorComponent({operator}: OperatorProps){
    const {clearNotice} = useContext(NoticeAndLoaderContext);

    return (
        <Operator onClick={() => {
            clearNotice();
            Router.push(`/operator/[id]`, `/operator/${operator.id}`);
        }} >
            <Icon src={operator.iconSrc} alt={operator.iconAlt} />
            <OperatorName className="operator-name">{operator.name}</OperatorName>
        </Operator>
    )
}

export default OperatorComponent