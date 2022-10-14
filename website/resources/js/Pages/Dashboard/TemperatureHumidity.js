import { React } from "react";
import TemperatureIcon from "@/Components/TemperatureIcon";
import Moment from "react-moment";
import TemperatureCloudy from "@/Components/Icon/TemperatureCloudy";
import TemperatureSunny from "@/Components/Icon/TemperatureSunny";
import TemperatureWindy from "@/Components/Icon/TemperatureWindy";

export default ({ temperature }) => {
	let nowTemperature = 0;

	if (temperature.data.length) {
		nowTemperature = Object.values(temperature.data)[0].temperature
	}

	return (
		<div className="bg-white  rounded-none ring-8 ring-white ring-opacity-40 shadow-lg border-2 border-green-400 p-2">
			<div className="flex justify-between">
				<div className="flex flex-col">
					<span className="text-6xl font-bold text-gray-800">{nowTemperature}°C</span>
					<span className="font-semibold mt-1 text-gray-500">Weather Updates</span>
				</div>
				<TemperatureIcon />
			</div>
			<div className="flex justify-between mt-3">

				{
					temperature && temperature.data.map((row, key) => {
						let icon = <TemperatureCloudy />

						if (row.temperature > 35) icon = <TemperatureSunny />

						if (row.temperature < 18) icon = <TemperatureWindy />


						return <div className="flex flex-col items-center" key={key}>
							<span className="font-semibold text-sm">{row.temperature}°C <span className="font-semibold text-xs">{row.humidity}%</span> </span>
							{icon}
							<Moment className="font-semibold mt-1 text-sm" date={row.created_at} format="ddd" />
							<Moment className="text-xs font-semibold text-gray-400" format="HH:mm a" date={row.created_at} />
						</div>
					})
				}

			</div>
		</div>
	)
};