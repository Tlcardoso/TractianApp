import { Switch } from 'antd'
import React, { useState } from 'react'
import styles from './Index.module.css'

export interface CardsProps {
    name?: string
    icon?: any
    propsparent?: any
    
  }

const Cards: React.FC<CardsProps> = ({name , icon, propsparent}) => {

    const [state, setState] = useState(true)
    const [ligado, setLigado] = useState('On')
    
    console.log(icon.props.style.color)
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
