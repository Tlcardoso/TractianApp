import React from 'react'
import styles from './Index.module.css'

export interface AssetsStatsCardsProps {
    name?: string    
    image?: string
    model?: string
    status?: string
    sensors?: string
    specifications?: any
    healthscore?: string
    metrics?: any
  }

const AssetsStatsCards: React.FC<AssetsStatsCardsProps> = ({
    name, 
    image, 
    model, 
    status, 
    sensors,
    specifications,
    healthscore,
    metrics
    }) => {


    const dateFormat = (date: string) => {

        const monthsName = [
            'jan', 'feb', 'mar', 'apr', 'may', 'june',
            'jul', 'aug', 'sept', 'oct', 'nov', 'dec'
        ]
        
        const ISOdate = new Date(date)
            return `${ISOdate.getDate()} ${monthsName[ISOdate.getMonth()]} at ${ISOdate.getHours()}:${ISOdate.getMinutes()}`
    }

    return (
        <section className={styles.container}>
            <h1>{name}</h1>
            <img src={image}/>
            <div>
                <p>
                    <b>Status:</b> {status}
                </p>
                <p>
                    <b>Temperarure:</b> {specifications.maxTemp}
                </p>
                <p>
                    <b>Model:</b> {model}
                </p>
                <p>
                    <b>Sensor ID:</b> {sensors}
                </p>
                <p>
                    <b>Last update:</b> {dateFormat(metrics.lastUptimeAt)}
                </p>
                <p>
                    <b>health:</b> {healthscore}%
                </p>
            </div>
            
        </section>
    )
}

export default AssetsStatsCards
