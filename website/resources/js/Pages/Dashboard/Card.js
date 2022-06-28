import { React } from "react";

export default (props) => {
	return (<>
		<div className="w-full md:w-2/4 p-2">
			<div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-500 rounded-none shadow-xl p-5 mb-2">
				<div className="flex flex-row items-center">
					<div className="flex-shrink pr-1">
						<div className="rounded-full p-5 bg-green-500 text-green-100">
							{props.icon}
						</div>
					</div>
					<div className="flex-1 text-right md:text-center">
						<h1 className="font-bold uppercase text-gray-600">
							{props.title}
						</h1>
						<p className="font-bold text-3xl">
							{props.total}
							<span className="text-green-500">
								<i className="fas fa-caret-up"></i>
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</>)
};