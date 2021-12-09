import React, { useState } from 'react'
import styles from './Index.module.css'



const MenuDashboard = ({collapsed= false}) => {
    
     
    
    return (
        <div className={collapsed ? styles.teste : styles.teste2}>
            <div className={styles.buttonscontainer}>
                <button className={styles.buttons}>1</button>
                <button className={styles.buttons}>2</button>
                <button className={styles.buttons}>3</button>
                <button className={styles.buttons}>4</button>
            </div>
         
        </div>
    )
}

export default MenuDashboard
