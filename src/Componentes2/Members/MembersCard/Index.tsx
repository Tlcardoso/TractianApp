import React from 'react'
import styles from './Index.module.css'

export interface MembersCardProps {
    name?: string
    last?: string
    image?: string
  }
const MembersCard: React.FC<MembersCardProps> = ({name, last, image}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imagecontainer}>
                <img src={image}/>
            </div>
            <p className={styles.containername}>{name}</p>
            <p>{last}</p>
        </div>
    )
}

export default MembersCard
