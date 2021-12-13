import React from 'react'
import LoginForm from '../../Componentes2/Login/Index'
import LoginMsg from '../../Componentes2/LoginMsg/Index'
import styles from './Index.module.css'

const Login = () => {
    return (
        <section className={styles.container}> 
            <div className={styles.backgroundL}>
                <LoginForm/>
            </div>
            <div className={styles.backgroundR}>
                <LoginMsg/>
            </div>
        </section>
    )
}

export default Login


