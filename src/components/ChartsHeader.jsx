import React from "react";

const ChartsHeader = ({ category, title }) => {
  return (
    <div className="mb-10">
      <div>
        <p className="text-3xl font-semibold tracking-tight dark:text-gray-200 text-slate-900">
          {category}
        </p>
        <p className="text-lg text-gray-600">Chart</p>
      </div>
      <p className="text-center text-gray-600 dark:text-gray-200 text-xl mb-2 mt-3">
        {title}
      </p>
    </div>
  );
};

export default ChartsHeader;
