import React, { useEffect, useState } from 'react'
import api from '../../Services/Api'
import assetsService from '../../Services/AssetsServices'
import AssetsStatsCards from './AssetsStatsCard/Index'
import styles from './Index.module.css'

const AssetsCards = () => {
    const [assets, setAssets] = useState<any[]>()

    useEffect(() => {
        const {getAssets} = assetsService

        getAssets().then(({data}) => {
            setAssets(data);
        })

        
    },[])

    return (
        <div className={styles.container}>
            {assets?.map((asset: any) => (
                <AssetsStatsCards key={asset.id}
                {...asset}
                />
            ))}          
        </div>
    )
}

export default AssetsCards
