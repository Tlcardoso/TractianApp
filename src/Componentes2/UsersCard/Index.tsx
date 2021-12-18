import React from 'react'
import { useApi } from '../../Context/apiContext'
import CardUser from './CardUser/Index'
import styles from './Index.module.css'

const UsersCards = () => {
    const {users} = useApi()

    return (
        <section className={styles.container}>
            {users?.map((user: any) => 
                <CardUser {...user}/>
            )}
        </section>
    )
}

export default UsersCards
