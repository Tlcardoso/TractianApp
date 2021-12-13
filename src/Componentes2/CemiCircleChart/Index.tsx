import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import styles from './Index.module.css'

const CemiCircleChart = () => {
    const options = {
        chart: {
          width: 200,
          height: 200,
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false,
          backgroundColor: ''
        },
        title: {
          text: '',
          align: 'center',
          verticalAlign: 'middle',
          style: {
            fontSize: 25
          },
          y: 40
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false,
              distance: -5,
              style: {
                fontWeight: 'bold',
                color: 'white'
              }
            },
            startAngle: -140,
            endAngle: 140,
            center: ['50%', '75%'],
            size: '95%',
            y: '50%'
          }
        },
    
        series: [
          {
            type: 'pie',
            name: '',
            innerSize: '80%',
            data: [
              { name: 'In Operation', y: 5, color: '#18D217' },
              { name: 'In Alert', y: 10, color: '#FFC035' },
              { name: 'In Downtime', y: 10, color: '#FF3440' },
            ]
          }
        ],
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500
              }
            }
          ]
        }
      };

    return (
        <div className={styles.container}>
            <h1>Assets Statics</h1>
            <div className={styles.textcontainer}>
              <div >
                  <h1>Status</h1>
                  <p>In Operation</p>
                  <a style={{background: '#18D217'}}></a>
                  <p>In Alert</p>
                  <a style={{background: '#FFC035'}}></a>
                  <p>In Downtime</p>
                  <a style={{background: '#FF3440'}}></a>
              </div>
              <div className={styles.chartscontainer}>
                  <HighchartsReact highcharts={Highcharts} options={options}/>
              </div>
            </div>
        </div>
    )
}

export default CemiCircleChart
