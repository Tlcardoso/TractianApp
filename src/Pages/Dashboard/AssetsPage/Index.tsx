import React from 'react'
import MenuResponsive from '../../../Componentes2/Menu/Index'

import { useCollapsed } from '../../../Context/MenuCollapsed'



import styles from './Index.module.css'

const Assets = () => {
    const { collapsed } = useCollapsed()

    return (
        <div className={styles.container}>
            <MenuResponsive page='Assets'/>
        </div>
    )
}

export default Assets
