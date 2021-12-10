import React, { useEffect, useState } from 'react'
import styles from './Index.module.css'
import { SettingOutlined, PieChartOutlined, ShopOutlined, InsertRowLeftOutlined, TeamOutlined } from '@ant-design/icons';




const MenuDashboard = ({btn}: any) => {
    const [active, setActive] = useState<string>()

    console.log(btn)

    useEffect(() => {
        function isActive(btn: any){
            switch(btn){
                case 'home':
                    setActive('home')
                    break;
                case 'assets':
                    setActive('assets')
                    break;
                case 'companies':
                    setActive('companies')
                    break;
                case 'units':
                    setActive('units')
                     break;
                case 'users':
                    setActive('users')
                    break;
            }
        }
        isActive(btn)
    },[])
    
    
    
    return (
        <div className={styles.teste2}>
            <div className={styles.buttonscontainer}>
                <button className={active === 'home' ? styles.buttonsactive : styles.buttons}>
                    <PieChartOutlined style={{ fontSize: '25px', color: 'white' }}/>
                    Dashboard
                </button>
                <button className={active === 'assets' ? styles.buttonsactive : styles.buttons}>
                    <SettingOutlined style={{ fontSize: '25px', color: 'white' }}/>
                    Assets
                </button>
                <button className={active === 'companies' ? styles.buttonsactive : styles.buttons}>
                    <InsertRowLeftOutlined style={{ fontSize: '25px', color: 'white' }}/>
                    Companies
                </button>
                <button className={active === 'units' ? styles.buttonsactive : styles.buttons}>
                    <ShopOutlined style={{ fontSize: '25px', color: 'white' }}/>
                    Units
                </button>
                <button className={active === 'users' ? styles.buttonsactive : styles.buttons}>
                    <TeamOutlined style={{ fontSize: '25px', color: 'white' }}/>
                    Users
                </button>
            </div>
         
        </div>
    )
}

export default MenuDashboard
