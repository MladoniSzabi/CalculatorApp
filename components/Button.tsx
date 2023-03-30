import * as React from 'react'

import style from "./Button.module.css"

export default function Button({ rows, onPressed, text, type }) {
    let className = style.button
    if (type in style) {
        className += " " + style[type]
    }
    return <button className={className} style={{ gridColumn: "span " + String(rows) }} onClick={() => onPressed(text)}>{text}</button>
}