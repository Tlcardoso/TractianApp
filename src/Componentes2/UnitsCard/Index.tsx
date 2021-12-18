import React, { useEffect, useState } from 'react'
import { useApi } from '../../Context/apiContext'

import CardUnits from './Cards/Index'
import styles from './Index.module.css'

const UnitsCard = () => {
    const {units} = useApi() 


    return (
        <section className={styles.container}>
            {units?.map((unit: any) => 
            <CardUnits key={unit.id} {...unit}/>
            )}
        </section>
    )
}

export default UnitsCard
