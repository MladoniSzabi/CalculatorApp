import * as React from 'react'
import Button from './Button';

import Screen from './Screen'

import styles from "./Calculator.module.css"

export default function Calculator() {

    let [text, setText] = React.useState("");
    let [accumulator, setAccumulator] = React.useState(0)
    let [operator, setOperator] = React.useState("")

    const buttons = [
        { text: 7 }, { text: 8 }, { text: 9 }, { text: "DEL", type: "control" },
        { text: 4 }, { text: 5 }, { text: 6 }, { text: "+" },
        { text: 1 }, { text: 2 }, { text: 3 }, { text: "-" },
        { text: "." }, { text: 0 }, { text: "/" }, { text: "*" },
        { text: "RESET", rows: 2, type: "control" }, { text: "=", rows: 2, type: "submit" }
    ]

    function evaluate(operand1, operand2, operator) {
        switch (operator) {
            case "":
                return operand2
            case "+":
                return operand1 + operand2
            case "-":
                return operand1 - operand2
            case "*":
                return operand1 * operand2
            case "/":
                return operand1 / operand2
        }
    }

    function onButtonPressed(button) {
        switch (button) {
            case "DEL":
                if (text == "") {
                    setAccumulator(0)
                    setOperator("")
                }
                setText(text.slice(0, -1))
                break
            case "=":
                setAccumulator(evaluate(accumulator, Number(text), operator))
                setText("")
                break
            case "RESET":
                setText("")
                setAccumulator(0)
                setOperator("")
                break
            case "+":
            case "-":
            case "/":
            case "*":
                setAccumulator(evaluate(accumulator, Number(text), operator))
                setText("")
                setOperator(button)
                break
            case ".":
                if (text == "") {
                    button = "0."
                }
            default:
                setText(text + String(button))
        }
    }

    return <div>
        <div id={styles['calculator-container']}>
            <Screen text={text || accumulator}></Screen>
            <div id={styles['button-container']}>
                {buttons.map((button) => <Button key={button.text} type={button.type || ""} rows={button.rows || 1} onPressed={onButtonPressed} text={button.text}></Button>)}
            </div>
        </div>
    </div>
}