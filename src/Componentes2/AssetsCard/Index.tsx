import React from 'react'
import AssetsStatsCards from './AssetsStatsCard/Index'
import styles from './Index.module.css'

const AssetsCards = () => {
    return (
        <div className={styles.container}>
           <AssetsStatsCards/>
           <AssetsStatsCards/>
           <AssetsStatsCards/>
           <AssetsStatsCards/>
           
        </div>
    )
}

export default AssetsCards
