import React from "react";

type TitleProps = {
  title: string;
  subtitle?: string; 
};

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
