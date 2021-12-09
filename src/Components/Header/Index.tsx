import React, { useState } from 'react'
import styles from './Index.module.css'
import { DoubleRightOutlined } from '@ant-design/icons';

const HeaderMenu = () => {
    const [collapsed, setColapsed] = useState(false)

    function click(){
        setColapsed(!collapsed)
    }

    return (
        <header className={styles.container}>
            <div className={collapsed ? styles.open : styles.close} onClick={click}>
            <DoubleRightOutlined style={{ fontSize: '16px', color: 'black' }} />
            </div>
        </header>
    )
}

export default HeaderMenu
