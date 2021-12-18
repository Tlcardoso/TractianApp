import React from 'react'
import styles from './Index.module.css'

const Title = ({children= ''}) => {
    return (
        <div className={styles.container}>
            <h1>{children}</h1>
        </div>
    )
}

export default Title
