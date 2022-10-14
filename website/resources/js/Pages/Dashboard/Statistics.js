import React from 'react'
import { CgFeed, CgTrees } from 'react-icons/cg';
import { FiUsers } from 'react-icons/fi';
import { GoLightBulb } from 'react-icons/go';
import Card from './Card';


export default (data) => {

	const props = data.props

	const stat = [{
		icon: <FiUsers />,
		title: "Total Users",
		total: props.totalUsers.length ?? 0
	},
	{
		icon: <CgTrees />,
		title: "Forest Population",
		total: props.population ?? 0
	},
	{
		icon: <CgFeed />,
		title: "Tree Species",
		total: props.species ?? 0
	},
	{
		icon: <GoLightBulb />,
		title: "Fire Alerts",
		total: props.alerts ?? 0
	}
	];

	return stat.map((card, index) =>
		<Card
			title={card.title}
			icon={card.icon}
			total={card.total}
			key={index} />)
};