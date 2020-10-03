import React, {useContext} from 'react'
import OperatorsContext from '../../contexts/operatorsContext'
import styled from 'styled-components'

import OperatorComponent from '../OperatorComponent'
import Loader from '../Loader'

const OperatorsListBlock = styled.div`
    position: relative;
    height: 70%;
    width: 100%;
    margin-top: 20px;
    background: #fcfcfc;
    display: flex;
    flex-direction: column;
    
    & ul > *:hover {
        background: #f1efee;
    }
`

const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    flex: 1 1 auto;
    overflow-y: auto;
    min-height: 0;
`

function OperatorsList() {
    const {operators} = useContext(OperatorsContext);
    const errorMessage: string = 'Не удалось загрузить операторов.';

    return (
        <OperatorsListBlock>
            {
                operators &&
                <Ul>
                    {
                        operators.map(operator => {
                            return (
                                <li key={operator.id}>
                                    <OperatorComponent operator = {operator} />
                                    <hr/>
                                </li>
                            )
                        })
                    }
                </Ul>
            }
            { operators === undefined && <Loader /> }
            { operators === null && <p style={{ marginLeft: '1rem', color:'red' }}>{errorMessage}</p> }
        </OperatorsListBlock>
    )
}

export default OperatorsList