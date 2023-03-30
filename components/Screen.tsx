import * as React from 'react'

import styles from './Screen.module.css'

export default function Screen({ text }) {
    return <div className={styles.screen}><span>{text}</span></div>
}