import * as React from 'react'
import style from './SliderInput.module.css'

export default function SliderInput({ inputs, name, checked, onChange }) {

    function onSelectionChange(index, event) {
        console.log(index)
        onChange(index)
    }

    return <div className={style["slider-input-container"]}>
        {inputs.map((input, index) =>
            <label key={input} htmlFor={'radio-input-' + String(input)}>
                <input checked={index == checked} onChange={(...data) => onSelectionChange(index, ...data)} id={'radio-input-' + String(input)} type="radio" name={name} value={input}></input>
                <div></div>
            </label>
        )

        }
    </div>
}