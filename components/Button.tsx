import * as React from 'react'

export default function Button({ onPressed, text }) {
    return <div onClick={() => onPressed(text)}>{text}</div>
}