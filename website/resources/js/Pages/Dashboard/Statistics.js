import React from 'react'
import { CgFeed, CgTrees } from 'react-icons/cg';
import { FiUsers } from 'react-icons/fi';
import { GoLightBulb } from 'react-icons/go';
import Card from './Card';


export default (props) => {

	const stat = [{
		icon: <FiUsers />,
		title: "Total Users",
		total: props.users
	},
	{
		icon: <CgTrees />,
		title: "Forest Population",
		total: props.population
	},
	{
		icon: <CgFeed />,
		title: "Blogs",
		total: props.news
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