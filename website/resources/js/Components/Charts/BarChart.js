import React from 'react'
import Chart from 'react-apexcharts'

function BarChart(props) {

	const series = [
		{
			name: "Trees",
			data: props.data.series
		}
	],
		categories = props.data && props.data.categories,
		options = {
			title: {
				text: props.title,
				align: 'center',
				margin: 10,
				offsetX: 0,
				offsetY: 0,
				floating: false,
				style: {
					fontSize: '28px',
					fontWeight: 'bold',
					fontFamily: undefined,
					color: '#263238'
				},
			},
			xaxis: {
				categories,
			},
		};

	return (
		<Chart
			options={options}
			series={series}
			type="bar"
			width="100%"
			height="350px"
			className="pt-5"
		/>
	)
}

export default BarChart