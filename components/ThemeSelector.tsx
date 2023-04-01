import * as React from 'react'

import style from './ThemeSelector.module.css'
import SliderInput from './SliderInput'

export default function ThemeSelector() {

    const [selection, setSelection] = React.useState(0)

    function onChange(index) {
        setSelection(index)
    }

    const inputs = ['1', '2', '3']
    return <div className={style["theme-selector"]}>
        <span>THEME</span>
        <div>
            <div className={style["label-container"]}>
                {inputs.map(input => <label key={input} htmlFor={"radio-input-" + input}>{input}</label>)}
            </div>
            <SliderInput onChange={onChange} name="radio" inputs={inputs} checked={selection}></SliderInput>
        </div>
    </div>
}