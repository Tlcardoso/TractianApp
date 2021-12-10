import React from 'react'
import styles from './Index.module.css'
import { DoubleRightOutlined } from '@ant-design/icons';
import { useCollapsed } from '../../Context/MenuCollapsed';

const HeaderMenu = () => {
    const { collapsed, setCollapsed } = useCollapsed()

    function click(){
        setCollapsed(!collapsed)
    }


    return (
        <header className={styles.container}>
            <div className={collapsed ? styles.open : styles.close} onClick={click}>
                <DoubleRightOutlined style={{ fontSize: '16px', color: 'white' }} />
            </div>
            <div className={styles.userstats}>
                <div className={styles.photocontainer}></div>
                <div>Bem Vindo Ricardo</div>
            </div>
        </header>
    )
}

export default HeaderMenu
