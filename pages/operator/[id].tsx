import React, {useState, useContext} from 'react'
import Head from 'next/head'
import Router from "next/router";
import styled from 'styled-components'
import InputMask from "react-input-mask";
import NoticeAndLoaderContext from "../../contexts/NoticeAndLoaderContext";

import OperatorComponent from '../../components/OperatorComponent';
import Container from "../../components/Container";
import Title from '../../components/Title';
import Notice from '../../components/Notice';
import ModalLoader from '../../components/ModalLoader'

import {OperatorNextPageContext} from "../../interfaces/OperatorNextPageContext";
import {Status} from "../../constants/Status";

const PaymentForm = styled.form`
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    display:inline-block;
    margin-top: 20px;
    color: rgb(75, 75, 75);
`

const Button = styled.button`
    position: absolute;
    bottom: 30px;
    
    height: 40px;
    width: 150px;
    display: inline-block;
    padding: 7px 20px;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    
    @media (max-width: 740px){
       width: 120px;
    }
`

const BackButton = styled(Button)`
    left: 30px;
    background-image: linear-gradient(45deg, #f5f5f5 0%, #e6e6e6 100%);
    
    &:hover {
        background-image: linear-gradient(45deg, #f5f5f5 0%, #dadada 100%);
    }
    
    @media (max-width: 740px){
        left: 20px;
    }
`

const SubmitButton = styled(Button)`
    right: 30px;    
    background-image: linear-gradient(45deg, #FFC107 0%, #ffb007 100%);
    
    &:hover {
        background-image: linear-gradient(45deg, #FFC107 0%, rgb(235, 136, 6) 100%);
    }
    
    @media (max-width: 740px){
        right: 20px;
    }
`

const Hint = styled.p`
    color: red;
    font-size: 12px;
    margin: 4px 0 0 0;
`

function PaymentFormScreen(props) {
    const titleText = 'Пополнение счёта:';

    const { notice, showNotice, waitingForResponse, modalLoaderOn, modalLoaderOff } = useContext(NoticeAndLoaderContext);
    const [phoneNumberHint, setPhoneNumberHint] = useState(null);
    const [sumHint, setSumHint] = useState(null);

    // Inputs values
    const [phoneNumber, setPhoneNumber] = useState('');
    const [sum, setSum] = useState('');

    async function sendRequest(event){
        event.preventDefault();

        if ((phoneNumber.includes('_')) || (parseInt(sum) < 1) || (parseInt(sum) > 1000)){
            if (phoneNumber.includes('_')){
                setPhoneNumberHint('Некорректная длина номера телефона');
            } else {
                setPhoneNumberHint(null);
            }
            if (parseInt(sum) < 1 || parseInt(sum) > 1000 ){
                setSumHint('Введите сумму от 1 до 1000');
            } else {
                setSumHint(null);
            }
            return;
        }
        setPhoneNumberHint(null);
        setSumHint(null);

        modalLoaderOn();
        const promise = new Promise((resolve, reject) => {
            setTimeout(async () => {
                // Here should be a request to the server with data: props.selectedOperatorId, phoneNumber, sum
                const response = await fetch('http://localhost:3000/api/payment');
                const json = await response.json();
                if (json.result === Status.Success){
                    resolve(Status.Success);
                } else {
                    reject();
                }
            }, 500);
        });

        try {
            const response = await promise;
            if (response === Status.Success){
                modalLoaderOff();
                await Router.push('/')
                showNotice('Оплата прошла успешно.');
            }
        } catch (err) {
            modalLoaderOff();
            showNotice('Произошла ошибка. Попробуйте ещё раз.');
        }
    }

    function handlePhoneNumberChange(event){
        if (event.target.value != '+7'){
            setPhoneNumber(event.target.value);
        }
    }

    function handleSumChange(event){
        setSum(event.target.value);
    }

    return (
        <>
            <Head>
                <title>Оплата</title>
            </Head>
            <Container>
                { notice && <Notice type={Status.Error} message = {notice} /> }

                <Title text={titleText} />
                <PaymentForm onSubmit={sendRequest}>
                    <Label>Оператор:</Label>
                    {props.operator && <OperatorComponent operator={props.operator}/>}

                    <Label>Номер телефона:</Label>
                    <InputMask mask='+7 (999) 999-99-99' maskPlaceholder='' type='tel' value={phoneNumber} placeholder='+7' onChange={handlePhoneNumberChange} required/>
                    { phoneNumberHint && <Hint>{phoneNumberHint}</Hint> }

                    <Label>Сумма:</Label>
                    <InputMask mask='9999' maskPlaceholder='' value={sum} placeholder='0 ₽' onChange={handleSumChange} required/>
                    { sumHint && <Hint>{sumHint}</Hint> }

                    <SubmitButton type='submit'>Подтвердить</SubmitButton>
                </PaymentForm>
                <BackButton onClick={() => Router.push('/')}>Назад</BackButton>
                { waitingForResponse && <ModalLoader /> }
            </Container>
        </>

    );
}

PaymentFormScreen.getInitialProps = async ({query}: OperatorNextPageContext) => {
    const response = await fetch(`http://localhost:3000/api/operator/${query.id}`);
    const json = await response.json();
    return {
        operator : json
    }
}

export default PaymentFormScreen