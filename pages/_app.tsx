import '../styles/globals.css'
import ContextProvider from "../components/ContextProvider";

import React from 'react'
import App from 'next/app'
import Head from 'next/head'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <div>
                <div>
                    <Head>
                        <title>Оплата мобильного счёта</title>
                        <meta name='description' content='Оплата мобильного счёта'/>
                        <meta charSet='utf-8'/>
                    </Head>
                </div>
                <ContextProvider>
                    <Component {...pageProps} />
                </ContextProvider>
            </div>
        )
    }
}
export default MyApp