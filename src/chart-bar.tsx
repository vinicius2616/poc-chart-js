// BarChart.tsx
import {
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import React from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart: React.FC = () => {
  const data: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Shopping',
        data: [25, 45, 100, 77, 5, 88],
        backgroundColor: 'rgba(192, 171, 75, 0.2)',
        borderColor: '#b8c04b',
        borderWidth: 1,
      },
    ],
  }

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      subtitle: {
        text: 'Test subtitle',
        color: '#fff',
      },
      title: {
        display: true,
        text: 'Monthly Sales',
      },
    },
  }

  return <Bar data={data} options={options} />
}

export default BarChart
