import { Switch } from 'antd'
import React, { SetStateAction, useState } from 'react'
import styles from './Index.module.css'

export interface CardsProps {
    name?: string
    icon?: any
  }

const Cards: React.FC<CardsProps> = ({name , icon}) => {


    const [state, setState] = useState(true)
    const [ligado, setLigado] = useState('On')


    function OnOff(){
        setState(!state)
        if(state == false){
            return setLigado('On')
        }else{
            return setLigado('Off')
        }
    }
    
    return (
        <section className={state == false ? styles.container : styles.containeron}>
            <div className={styles.switch}>
                <p>{ligado}</p>
                <Switch defaultChecked onChange={OnOff} />
            </div>
            {icon}
            <p className={styles.text}>{name}</p>
        </section>
    )
}

export default Cards
