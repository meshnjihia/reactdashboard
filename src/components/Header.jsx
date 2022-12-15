import React from 'react'

const Header = ({category, title}) => {
  return (
    <div className="mb-10">
      <div>
        <p className="text-lg font-extrabold tracking-tight dark:text-gray-600 text-slate-900">
          {category}
        </p>
      </div>
      <p className="text-center dark:text-gray-600 text-xl mb-2 mt-3">
        {title}
      </p>
    </div>
  );
}

export default Header