import React, { useEffect, useState } from 'react'
import { useApi } from '../../Context/apiContext'
import companiesServices from '../../Services/CompaniesServices'

import CardCompanie from './Cards/Index'
import styles from './Index.module.css'

const CompaniesCard = () => {
    const {companies} = useApi()


    return (
        <section className={styles.container}>
            {companies?.map((companies: any) => (
                <CardCompanie key={companies.id} {...companies}/>
            ))}
        </section>
    )
}

export default CompaniesCard
