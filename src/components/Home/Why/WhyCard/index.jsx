import React from 'react';

const WhyCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col shadow-md space-y-3 bg-white rounded-md p-8 py-12">
      {icon}
      <h2 className="text-lg md:text-xl font-bold">{title}</h2>
      <p className="text-grey-601">{description}</p>
    </div>
  );
};

export default WhyCard;
