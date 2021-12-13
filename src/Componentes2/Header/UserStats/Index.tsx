import React from 'react'
import styles from './Index.module.css'
import { BellOutlined, SettingOutlined } from '@ant-design/icons';

const UserStats = () => {
    return (
        <div className={styles.container}>
            <section className={styles.iconcontainer}>
                <BellOutlined style={{ fontSize: '20px', color: 'black' }}/>
                <SettingOutlined style={{ fontSize: '20px', color: 'black' }}/>
            </section>
            <section className={styles.userimagename}>
                <div className={styles.image}>
                    <img src='/images/userimg.jpg'/>
                </div>
                <div className={styles.name}>
                    <p>Richard</p>
                </div>
            </section>
        </div>
    )
}

export default UserStats
