import React, { useState } from 'react'
import styles from './Index.module.css'
import {HomeOutlined} from '@ant-design/icons';
import { useApi } from '../../../Context/apiContext';

export interface CardUnitsProps {
    id?: string
    name?: string
    companyId?: string
  }

const CardUnits: React.FC<CardUnitsProps> = ({id, name,  companyId}) => {
    const {setId, oneCompanie} = useApi()

    setId(companyId)

    return (
        <div className={styles.container}>
            <HomeOutlined  style={{ fontSize: '50px', color: 'white' }} />
            <div>
                <p><strong>ID:</strong> {id} </p>
                <p><strong>Name:</strong> {name} </p>
                <p><strong>Company:</strong> {oneCompanie?.name} </p>
            </div>
            
        </div>
    )
}

export default CardUnits
