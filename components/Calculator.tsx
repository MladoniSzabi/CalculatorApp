import * as React from 'react'
import Button from './Button';

import Screen from './Screen'

export default function Calculator() {

    let [text, setText] = React.useState(0);

    const buttons = [
        { text: 1 }, { text: 2 }, { text: 3 }, { text: "DEL" },
        { text: 4 }, { text: 5 }, { text: 6 }, { text: "+" },
        { text: 7 }, { text: 8 }, { text: 9 }, { text: "-" },
        { text: "." }, { text: 0 }, { text: "/" }, { text: "*" },
        { text: "RESET" }, { test: "=" }
    ]

    function onButtonPressed(button) {
        setText(text + button);
    }

    return <div>
        <Screen text={text}></Screen>
        <div id="button-container">
            {buttons.map((button) => <Button onPressed={onButtonPressed} text={button.text}></Button>)}
        </div>
    </div>
}