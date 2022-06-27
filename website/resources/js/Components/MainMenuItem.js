import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import classNames from 'classnames';

export default ({ icon, link, text }) => {
  const isActive = route().current(link + '*');

  const iconClasses = classNames('w-4 h-4 mr-2', {
    'text-white fill-current': isActive,
    'text-green-400 group-hover:text-white fill-current': !isActive
  });

  const textClasses = classNames({
    'text-white': isActive,
    'text-green-200 group-hover:text-white': !isActive
  });

  return (
    <div className="mb-1">
      <InertiaLink href={route(link)} className="flex items-center group py-2">
        <span className='text-gray-400 px-2'>
          {icon}
        </span>
        <div className={textClasses}>{text}</div>
      </InertiaLink>
    </div>
  );
};
