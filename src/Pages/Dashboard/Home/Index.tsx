import React from 'react'
import CardsInfo from '../../../Componentes2/CardsInfo/Index'
import Header from '../../../Componentes2/Header/Index'
import HelloCard from '../../../Componentes2/HelloCard/Index'
import MenuResponsive from '../../../Componentes2/Menu/Index'
import styles from './Index.module.css'


const Dashboard = () => {
    

    return (
        <div className={styles.container}>
            <MenuResponsive page='dashboard'/>
            <section className={styles.conteudocontainer}>
                <Header/>
                <section className={styles.infocontainer}>
                    <div className={styles.fixedcard}>

                    </div>
                    <div className={styles.infocard}>
                        <div className={styles.animation}>
                            <HelloCard/>
                            <CardsInfo/>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Dashboard

