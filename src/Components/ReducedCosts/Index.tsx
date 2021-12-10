import React from 'react'
import styles from './Index.module.css'

const Costs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textcontainer}>
                <p>Reduced maintenance costs</p>
                <p>R$ 8000 / 10000</p>
            </div>
            <div className={styles.bar}>
                <div className={styles.colorbar}/>
            </div>
            
        </div>
    )
}

export default Costs
