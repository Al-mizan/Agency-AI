import React from "react";
import PropTypes from "prop-types";


export default function Card({ title, description }) {
  console.log(title, description);
  console.log("props received:", arguments[0]);
  

  return (
    <div className="card p-4 mx-auto my-10 max-w-xl space-y-4 text-center">
      <h2 className="text-5xl font-semibold">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};  