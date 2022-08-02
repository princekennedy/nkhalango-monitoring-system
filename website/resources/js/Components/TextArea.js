import React from 'react';

export default ({ label, name, className, errors = [], ...props }) => {
	return (
		<div className={className}>
			{label && (
				<label className="form-label" htmlFor={name}>
					{label}
				</label>
			)}
			<textarea
				id={name}
				name={name}
				{...props}
				className={`form-input border-gray-300 min-w-full ${errors.length ? 'error' : ''}`}
			></textarea>
			{errors && <div className="form-error text-red-600">{errors}</div>}
		</div>
	);
};
