import React from 'react'
import styles from './Index.module.css'
import { FireOutlined, ThunderboltOutlined } from '@ant-design/icons'

const HelloCard = () => {
    return (
        <section className={styles.container}>
            <h1>Hello, Richard!</h1>
            <p>Welcome to your control panel!! Your controllers are up and running!</p>
            <div className={styles.textcontrainer}>
                <p>
                    <FireOutlined style={{ fontSize: '24px', color: 'white' }} />
                    +67°C Medium Temperature
                </p>
                <p>
                    <ThunderboltOutlined style={{ fontSize: '24px', color: 'white' }}/>
                    +30% Energy Saved
                </p>
            </div>
        </section>
    )
}

export default HelloCard
