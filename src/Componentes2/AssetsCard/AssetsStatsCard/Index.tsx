import React from 'react'
import styles from './Index.module.css'

const AssetsStatsCards = () => {
    return (
        <section className={styles.container}>
            <h1>Motor H13D-1</h1>
            <img src='/images/machine.jpg'/>
            <div>
                <p>
                    <b>Status:</b> In allert
                </p>
                <p>
                    <b>Start date:</b> 2 months ago
                </p>
                <p>
                    <b>Model:</b> motor
                </p>
                <p>
                    <b>Sensor ID:</b> GSJ1535
                </p>
                <p>
                    <b>Last update:</b> 16 feb at 13:17
                </p>
                <p>
                    <b>health:</b> 70%
                </p>
            </div>
            
        </section>
    )
}

export default AssetsStatsCards
