import React from 'react'
import styles from './Index.module.css'
import {InsertRowLeftOutlined} from '@ant-design/icons';

export interface CardCompanieProps {
    id?: string
    name?: string
  }

const CardCompanie: React.FC<CardCompanieProps> = ({id, name}) => {
    return (
        <div className={styles.container}>
            <InsertRowLeftOutlined style={{ fontSize: '50px', color: 'white' }} />
            <div>
                <p><strong>ID:</strong> {id} </p>
                <p><strong>Name:</strong> {name} </p>
            </div>
            
        </div>
    )
}

export default CardCompanie
