import React from 'react'

import CardsInfo from '../../../Componentes2/CardsInfo/Index'
import Header from '../../../Componentes2/Header/Index'
import HelloCard from '../../../Componentes2/HelloCard/Index'
import MenuResponsive from '../../../Componentes2/Menu/Index'
import styles from './Index.module.css'
import CemiCircleChart from '../../../Componentes2/CemiCircleChart/Index'
import ColumnChart from '../../../Componentes2/ColumnChart/Index'
import Members from '../../../Componentes2/Members/Index'
import { Calendar } from 'antd'




const Assets = () => {


    return (
        <div className={styles.container}>
            <MenuResponsive page='Assets'/>
            <section className={styles.conteudocontainer}>
                <Header/>
                <section className={styles.infocontainer}>
                <div className={styles.infocard}>
                        <div className={styles.animation}>
                            <HelloCard/>
                            <CardsInfo/>
                            <ColumnChart/>
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

export default Assets
