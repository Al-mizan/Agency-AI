import React from "react";
import assets from "../assets/assets";

export default function TrustedBy() {
  return (
    <div>
      <p className="text-center text-sm border mx-auto w-fit p-1.5 rounded-full flex items-center justify-center gap-2 mt-4">
        <img src={assets.group_profile} alt="peoples" className="w-22 h-7" />
        Trusted by 10k+ people
      </p>
    </div>
  );
}
