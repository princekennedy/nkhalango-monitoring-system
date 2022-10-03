import { React, useEffect, useState } from "react";
import TemperatureIcon from "@/Components/TemperatureIcon";
import useGet from "@/Utils/useGet";
import Moment from "react-moment";

export default ({ className }) => {
	const params = {
		"d": true,
	};

	const [temperature] = useGet(route("weather.index"), params)

	return (
		<>
			<div className="bg-white  rounded-none ring-8 ring-white ring-opacity-40 shadow-lg border-2 border-green-400 p-2">
				<div className="flex justify-between">
					<div className="flex flex-col">
						<span className="text-6xl font-bold text-gray-800">{temperature && temperature.temperature}</span>
						<span className="font-semibold mt-1 text-gray-500">Temperature & Humidity</span>
					</div>
					<TemperatureIcon />
				</div>
				<div className="flex justify-between mt-3">

					{
						temperature && temperature.data.map((row, key) => {

							return (<div className="flex flex-col items-center" key={key}>
								<span className="font-semibold text-lg">{row.temperature}°C</span>
								<svg className="h-10 w-10 fill-current text-gray-400 mt-3" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" /></svg>
								<Moment className="font-semibold mt-1 text-sm" date={row.created_at} format="ddd" />
								<Moment className="text-xs font-semibold text-gray-400" format="HH:mm a" date={row.created_at} />
							</div>)
						})
					}

				</div>
			</div>
		</>
	)
};