import React, { useState } from 'react'
import styles from './Index.module.css'
import {UserOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
import { useApi } from '../../../Context/apiContext';

export interface CardUserProps {
    id?: string
    name?: string
    email?: string
    unitId?: string
    companyId?: string
  }

const CardUser: React.FC<CardUserProps> = ({id, name, email, unitId, companyId}) => {
    const [onOff, setOnOff] = useState(true)
    const {setId, oneCompanie, setUnitId, oneUnits} = useApi()

    setId(companyId)
    setUnitId(unitId)

    function trade(){
        setOnOff(!onOff)
    }

    return (
        <section className={styles.sectioncontainer} onClick={trade}>
            <div className={onOff? styles.containerOn : styles.containerOff}>
                <Avatar size={80} style={{background: "#aabef7"}} icon={<UserOutlined style={{ fontSize: '50px', color: 'white' }} />} />
                <div>
                    <p><strong>{name}</strong></p>
                </div>
            </div>
            <div className={onOff ? styles.containerFlipOff : styles.containerFlipOn}>
                <div>
                    <p><strong>ID:</strong> {id}</p>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Unit:</strong> {oneUnits?.name}</p>
                    <p><strong>Company:</strong> {oneCompanie?.name}</p>
                </div>
            </div>
        </section>
    )
}

export default CardUser
