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
        </Head>

        <Component {...pageProps} />

        <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by Szabolcs Mladoniczky.
        </div>
    </>
}

export default MainPage