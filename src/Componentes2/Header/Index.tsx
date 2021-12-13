import React from 'react'
import styles from './Index.module.css'

import {SearchOutlined, DoubleLeftOutlined} from '@ant-design/icons'
import UserStats from './UserStats/Index'
import { useCollapsed } from '../../Context/MenuCollapsed'

const Header = () => {
    const { collapsed, setCollapsed } = useCollapsed()

    return (
        <section className={styles.container}>
            <div className={styles.search}>
                <div placeholder='Search' >
                    <SearchOutlined style={{ fontSize: '20px', color: 'black' }} />
                 </div>
            </div>
            <div className={collapsed ? styles.menubuttonactive : styles.menubuttondesactive} onClick={() => setCollapsed(!collapsed)}>
                <DoubleLeftOutlined  style={{ fontSize: '20px', color: 'white' }} />
            </div>
            <div className={styles.userstats}>
                <UserStats/>
            </div>
        </section>
    )
}

export default Header
