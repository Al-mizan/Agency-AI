import React from "react";
import Card from "./Card";
import Employee from "./Employee";
import { teamData } from "../assets/assets";

export default function MeetTeam() {
  return (
    <div className="my-20">
      <Card
        title="Meet Our Team"
        description="A passionate team of digital experts dedicated to your brand's success."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto mb-10">
        {teamData.map((member, index) => (
          <Employee
            key={index}
            imgURL={member.image}
            name={member.name}
            position={member.title}
          />
        ))}
      </div>
    </div>
  );
}
