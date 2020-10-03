import React, { useState } from 'react';
import NoticeAndLoaderContext from '../contexts/NoticeAndLoaderContext'

interface ContextProviderProps {
    children: any
}

const ContextProvider = (props : ContextProviderProps) => {
    const [notice, setNotice] = useState(null);
    const [waitingForResponse, setWaitingForResponse] = useState(false);

    function showNotice(message: string){
        setNotice(message);
    }

    function clearNotice(){
        setNotice(null);
    }

    function modalLoaderOn(){
        setWaitingForResponse(true);
    }

    function modalLoaderOff(){
        setWaitingForResponse(false);
    }

    return (
        <NoticeAndLoaderContext.Provider value={
            {
                notice,
                waitingForResponse,
                showNotice,
                clearNotice,
                modalLoaderOn,
                modalLoaderOff
            }
        }>
            {props.children}
        </NoticeAndLoaderContext.Provider>
    );
}
export default ContextProvider;