import * as React from 'react'
import Head from 'next/head';
import { AppProps } from 'next/app';

import './style.css'

function MainPage({ Component, pageProps }: AppProps) {
    return <>
        <Head>
            <title>
                Frontend Mentor | Calculator app
            </title>
            <meta charSet="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png"></link>

            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''></link>
            <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700;800&family=League+Spartan:wght@700&display=swap" rel="stylesheet"></link>
        </Head>

        <Component {...pageProps} />

        <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by Szabolcs Mladoniczky.
        </div>
    </>
}

export default MainPage