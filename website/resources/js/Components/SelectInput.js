import React from 'react';

export default ({
  label,
  name,
  className,
  children,
  errors = [],
  ...props
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        {...props}
        className={`form-select border-gray-300 min-w-full ${errors.length ? 'error' : ''}`}
      >
        {children}
      </select>
      {errors && <div className="form-error text-red-600">{errors}</div>}
    </div>
  );
};
