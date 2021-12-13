import React, { useState } from 'react'
import Cards from './Cards/Index'
import styles from './Index.module.css'
import { FireOutlined, ThunderboltOutlined, LineChartOutlined, HeartOutlined } from '@ant-design/icons';

const CardsInfo = () => {
    

    return (
        <section className={styles.container}>
            <h1>Richard's control</h1>
            <div className={styles.cardscontainer}>
                <Cards 
                icon={<FireOutlined style={{ fontSize: '35px', color: '#4187f6' }} />}
                name='Temperature'
                />
                <Cards 
                icon={<ThunderboltOutlined style={{ fontSize: '35px', color: '#4187f6' }}/>}
                name='Energy'
                />
                <Cards 
                icon={<LineChartOutlined style={{ fontSize: '35px', color: '#4187f6' }}/>}
                name='Vibration'
                />
                <Cards 
                icon={<HeartOutlined style={{ fontSize: '35px', color: '#4187f6' }}/>}
                name='Health'
                />
            </div>
        </section>
    )
}

export default CardsInfo
