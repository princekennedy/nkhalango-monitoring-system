import React from 'react'
import Chart from 'react-apexcharts'


function PieChart(props) {
	const series = props.data.series,
		labels = props.data.labels,
		options = {
			title: {
				text: props.title,
				align: 'center',
				margin: 10,
				style: {
					fontSize: '28px',
					fontWeight: 'bold',
					fontFamily: undefined,
					color: '#263238'
				},
			},
			labels,
		}

	return (
		<Chart
			options={options}
			series={series}
			type="pie"
			width="100%"
			height="350px"
			className="pt-5"
		/>
	)
}

export default PieChart