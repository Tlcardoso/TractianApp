import React from 'react'
import HeaderMenu from '../../../Components/Header/Index'
import Members from '../../../Components/Members/Index'
import MenuDashboard from '../../../Components/Menu/Index'
import Costs from '../../../Components/ReducedCosts/Index'
import { useCollapsed } from '../../../Context/MenuCollapsed'

import styles from './Index.module.css'

const Home = () => {
    const { collapsed } = useCollapsed()

    return (
        <div className={styles.container}>
            <HeaderMenu/>
            <section className={collapsed ? styles.containerdashboardup : styles.containerdashboarddown} >
                <MenuDashboard btn='home'/>
                <div className={styles.dashboard}>
                    <Costs/>
                    <div className={styles.teste}>
                        <Members/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

