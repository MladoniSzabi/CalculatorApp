import * as React from 'react'

import style from './ThemeSelector.module.css'
import SliderInput from './SliderInput'

export default function ThemeSelector() {

    const [selection, setSelection] = React.useState(0)

    function onChange(index) {
        localStorage.setItem("theme", String(index + 1))
        document.body.classList.remove("theme1", "theme2", "theme3")
        document.body.classList.add("theme" + String(index + 1))
        setSelection(index)
    }

    React.useEffect(() => {
        if (localStorage.getItem("theme") !== null) {
            let theme = localStorage.getItem("theme")
            document.body.classList.add("theme" + theme)
            setSelection(Number(theme) - 1)
            return
        }

        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.body.classList.add("theme1")
        } else {
            document.body.classList.add("theme2")
        }
    }, [])

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