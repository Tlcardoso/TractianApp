import React from 'react'

import Header from '../../../Componentes2/Header/Index'
import MenuResponsive from '../../../Componentes2/Menu/Index'
import styles from './Index.module.css'
import CemiCircleChart from '../../../Componentes2/CemiCircleChart/Index'
import Members from '../../../Componentes2/Members/Index'
import { Calendar } from 'antd'
import Title from '../../../Componentes2/Title/Index'
import UnitsCard from '../../../Componentes2/UnitsCard/Index'
import UsersCards from '../../../Componentes2/UsersCard/Index'



const Users = () => {
    return (
        <div className={styles.container}>
        <MenuResponsive page='Users'/>
        <section className={styles.conteudocontainer}>
            <Header/>
            <section className={styles.infocontainer}>
            <div className={styles.infocard}>
                    <div className={styles.animation}>
                        <Title children={'Users'}/>
                        <UsersCards/>
                    </div>
                </div>
                <div className={styles.fixedcard}>
                    <CemiCircleChart/>
                    <Members/>
                    <div className={styles.calendarcontainer}>
                        <Calendar fullscreen={false}/>
                    </div>
                </div>
            </section>
        </section>
    </div>
    )
}

export default Users
