import React, { useEffect } from 'react'

import Header from '../../../Componentes2/Header/Index'
import MenuResponsive from '../../../Componentes2/Menu/Index'
import styles from './Index.module.css'
import CemiCircleChart from '../../../Componentes2/CemiCircleChart/Index'
import Members from '../../../Componentes2/Members/Index'
import { Calendar } from 'antd'
import AssetsCards from '../../../Componentes2/AssetsCard/Index'
import Title from '../../../Componentes2/Title/Index'
import { useNavigate } from 'react-router-dom'




const Assets = () => {

    const navigate = useNavigate()

    useEffect(() =>{
        if(localStorage.getItem('@User') == null){
            navigate('/')
        }
    }, [])


    return (
        <div className={styles.container}>
            <MenuResponsive page='Assets'/>
            <section className={styles.conteudocontainer}>
                <Header/>
                <section className={styles.infocontainer}>
                <div className={styles.infocard}>
                        <div className={styles.animation}>
                            <Title children={'Assets'}/>
                            <AssetsCards/>
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
