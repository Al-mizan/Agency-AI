import React from "react";
import PropTypes from "prop-types";

export default function Business({ imageUrl, title, description }) {
  return (
    <div className="container mx-auto p-4 border rounded-2xl flex hover:scale-105 transition-transform duration-300">
      <img src={imageUrl} alt={`Business Image ${title}`} />
      <div className="ml-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

Business.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
