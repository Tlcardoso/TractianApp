import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Index.module.css'

import {PieChartOutlined, ToolOutlined, InsertRowLeftOutlined, HomeOutlined, TeamOutlined, ImportOutlined} from '@ant-design/icons';
import { useCollapsed } from '../../Context/MenuCollapsed';

export interface MenuResponsiveProps {
    page?: string
    dashboard?:string
  }


const MenuResponsive: React.FC<MenuResponsiveProps> = ({page}) => {
    const [active, setActive] = useState(page)
    const { collapsed, setCollapsed } = useCollapsed()
    

    
    
    return (
        <div className={collapsed ? styles.navigationoff : styles.navigation}>
            <ul>
                <li className={active == 'dashboard' ? styles.active : styles.list} 
                onClick={() => {
                    setActive('dashboard')
                    setCollapsed(false)
                }}
                >
                    <Link to="/dashboard" className={styles.link}>
                        <a>
                            <span className={styles.icon}>
                                <PieChartOutlined style={{ fontSize: '1.5rem', color: '#fff' }} className={styles.iconico}/>
                            </span>
                            <span className={styles.title}>Dashboard</span>
                        </a>
                    </Link>
                </li>
                <li className={active == 'Assets' ? styles.active : styles.list} 
                 onClick={() => {
                    setActive('Assets')
                    setCollapsed(false)
                }}>
                    <Link to="/assets">
                        <a>
                            <span className={styles.icon}>
                                <ToolOutlined style={{ fontSize: '1.5rem', color: '#fff' }}/>
                            </span>
                            <span className={styles.title}>Assets</span>
                        </a>
                    </Link>
                </li>
                <li className={active == 'Companies' ? styles.active : styles.list} 
                onClick={() => {
                    setActive('Companies')
                    setCollapsed(false)
                }}>
                    <Link to="/companies">
                        <a>
                            <span className={styles.icon}>
                                <InsertRowLeftOutlined style={{ fontSize: '1.5rem', color: '#fff' }} />
                            </span>
                            <span className={styles.title}>Companies</span>
                        </a>
                    </Link>
                </li>
                <li className={active == 'Units' ? styles.active : styles.list} 
                onClick={() => {
                    setActive('Units')
                    setCollapsed(false)
                }}>
                    <Link to="/units">
                        <a>
                            <span className={styles.icon}>
                                <HomeOutlined style={{ fontSize: '1.5rem', color: '#fff' }} />
                            </span>
                            <span className={styles.title}>Units</span>
                        </a>
                    </Link>
                </li>
                <li className={active == 'Users' ? styles.active : styles.list} 
                onClick={() => {
                    setActive('Users')
                    setCollapsed(false)
                }}>
                    <Link to="/users">
                        <a>
                            <span className={styles.icon}>
                                <TeamOutlined style={{ fontSize: '1.5rem', color: '#fff' }}/>
                            </span>
                            <span className={styles.title}>Users</span>
                        </a>
                    </Link>
                </li>
                <li className={active == 'Sign-out' ? styles.active : styles.list}
                onClick={() => {
                    setActive('dashboard')
                    setCollapsed(false)
                }}>
                    <Link to="">
                        <a>
                            <span className={styles.icon}>
                                <ImportOutlined style={{ fontSize: '1.5rem', color: '#fff' }}/>
                            </span>
                            <span className={styles.title}>Sign-out</span>
                        </a>
                    </Link>
                </li>
            </ul>
            
        </div>
    )
}

export default MenuResponsive
