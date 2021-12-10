import React from 'react'
import styles from './Index.module.css'
import MembersData from './MembersData/Index'

const Members = () => {
    return (
        <section className={styles.container}>
                <div className={styles.title}>New Join Members</div>
                <div className={styles.usercontainer}>
                    <div className={styles.container2}>
                        <div className={styles.imgcontainer}>
                            <div className={styles.teste}>
                                <img src="../Images/background-azul-escuro.jpg"/>
                            </div>
                        </div>
                        <div className={styles.namecontainer}>Rosa</div>
                        <div>Valério</div>
                    </div>
                    <div className={styles.container2}>
                        <div className={styles.imgcontainer}>
                            <div className={styles.teste}></div>
                        </div>
                        <div className={styles.namecontainer}>Davi</div>
                        <div>Assis</div>
                    </div>
                    <div className={styles.container2}>
                        <div className={styles.imgcontainer}>
                            <div className={styles.teste}></div>
                        </div>
                        <div className={styles.namecontainer}>Lícia</div>
                        <div>Conde</div>
                    </div>
                    <div className={styles.container2}>
                        <div className={styles.imgcontainer}>
                            <div className={styles.teste}></div>
                        </div>
                        <div className={styles.namecontainer}>Maurício</div>
                        <div>Carlos</div>
                    </div>
                </div>
        </section>
    )
}

export default Members
