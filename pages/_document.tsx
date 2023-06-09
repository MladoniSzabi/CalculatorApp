import * as React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png"></link>

                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''></link>
                <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500;700;800&family=League+Spartan:wght@700&display=swap" rel="stylesheet"></link>
            </Head>

            <body>
                <Main></Main>
                <div className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                    Coded by Szabolcs Mladoniczky.
                </div>
                <NextScript></NextScript>
            </body>
        </Html>
    )
}

export default Document