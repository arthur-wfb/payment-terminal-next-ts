import React from 'react'
import Head from 'next/head'

import Title from '../Title'
import Notice from '../Notice'
import OperatorsList from './OperatorsList'

import {Status} from "../../constants/Status";
import Container from "../Container";

interface OperatorsListScreenProps {
    notice: string
}

function OperatorsListScreen({notice}: OperatorsListScreenProps) {
    const chooseOperatorText: string = 'Выберите оператора:';

    return (
        <>
            <Head>
                <title>Список операторов</title>
            </Head>
            <Container>
                { (notice) && <Notice type={Status.Success} message = {notice} /> }
                <Title text={chooseOperatorText} />
                <OperatorsList/>
            </Container>
        </>
    )
}

export default OperatorsListScreen