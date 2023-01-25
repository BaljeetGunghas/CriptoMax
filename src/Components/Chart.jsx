import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)
const Chart = ({ chartdata = [], currency, days }) => {
    const prices = [];
    const date = [];

    for (let i = 0; i < chartdata.length; i++) {
        if (days === '24h') date.push(new Date(chartdata[i][0]).toLocaleTimeString());
        else date.push(new Date(chartdata[i][0]).toLocaleDateString());
        prices.push(chartdata[i][1])
    }

    const data = {
        label: `price in ${currency}`,
        data: prices,
        borderColor: 'rgba(255,99,132)',
        backgroundColor: 'rgba(255,99,132,0.5)',
        borderWidth: 1,
        pointBorderWidth: 0,
        pointBackgroundColor: 'rgb(75, 192, 192,0.0)',
    }

    return (
        <Line
            options={{
                responsive: true,
                maintainAspectRatio: true
            }}
            data={{
                labels: date,
                datasets: [data]
            }} />
    )
}

export default Chart