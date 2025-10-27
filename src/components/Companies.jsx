import React from "react";
import { company_logos } from "../assets/assets";

export default function Companies() {
  return (
    <div className="my-30 container mx-auto px-6 lg:px-16 ">
      <p className="text-center text-xl text-gray-400 ">
        Trusted by Leading Companies
      </p>
      <div className="flex justify-center items-center gap-6 mt-6 flex-wrap">
        {company_logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company Logo ${index}`}
            className="h-6 object-contain hover:scale-120 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
}
