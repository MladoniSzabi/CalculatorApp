import * as React from 'react'
import Button from './Button';

import Screen from './Screen'

import styles from "./Calculator.module.css"

export default function Calculator() {

    let [text, setText] = React.useState(0);

    const buttons = [
        { text: 7 }, { text: 8 }, { text: 9 }, { text: "DEL", type: "control" },
        { text: 4 }, { text: 5 }, { text: 6 }, { text: "+" },
        { text: 1 }, { text: 2 }, { text: 3 }, { text: "-" },
        { text: "." }, { text: 0 }, { text: "/" }, { text: "*" },
        { text: "RESET", rows: 2, type: "control" }, { text: "=", rows: 2, type: "submit" }
    ]

    function onButtonPressed(button) {
        setText(text + button);
    }

    return <div>
        <div id={styles['calculator-container']}>
            <Screen text={text}></Screen>
            <div id={styles['button-container']}>
                {buttons.map((button) => <Button type={button.type || ""} rows={button.rows || 1} onPressed={onButtonPressed} text={button.text}></Button>)}
            </div>
        </div>
    </div>
}