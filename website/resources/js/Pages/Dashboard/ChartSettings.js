import React from 'react'

const ChartSettings = {
	pie: {
		title: {
			text: "Forest Damages",
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
		colors: [
			'rgb(39, 103, 73)',
			'rgb(29, 65, 123)',
			'#85eea7',
			'#1ac614',
			'#5cdb93',
		],
		labels: ['Natural Death', 'Fire Breaks', 'Deforestation', 'Theft',],
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					width: 200
				},
				legend: {
					position: 'bottom'
				}
			}
		}]
		// series: [44, 55, 13, 43,],
	},
	bar: {
		title: {
			text: "Forest Population",
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
		colors: ['#2c9747'],
		chart: {
			id: "basic-bar"
		},

		xaxis: {
			categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
			labels: {
				datetimeFormatter: {
					year: 'yyyy',
					month: 'MMM \'yy',
					day: 'dd MMM',
					hour: 'HH:mm'
				}
			}
		}
	},
	/* series: [
		{
			name: "series-1",
			data: [30, 40, 45, 50, 30, 40, 45, 50, 30, 40, 45, 50,]
		}
	] */
}

export default ChartSettings