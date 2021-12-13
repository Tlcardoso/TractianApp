import React from 'react'
import styles from './Index.module.css'
import MembersCard from './MembersCard/Index'

const Members = () => {
    return (
        <section className={styles.container}>
            <h1>New Join Members</h1>
            <div className={styles.cardscontainer}>
                <MembersCard name='Luiza' last='Olaio' image='/images/luiza.jpg'/>
                <MembersCard name='Stefany' last='Moutinho' image='/images/stefany.jpg'/>
                <MembersCard name='Micael' last='Prado' image='/images/micael.jpg'/>
                <MembersCard name='Nicolas' last='Ramires' image='/images/nicolas.jpg'/>
            </div>
        </section>
    )
}

export default Members
