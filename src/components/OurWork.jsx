import React from "react";
import Card from "./Card";
import ProjectCard from "./ProjectCard";
import assets from "../assets/assets";

export default function OurWork() {
  const projectData = [
    {
      imgURL: assets.work_mobile_app,
      title: "Mobile app marketing",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
    },
    {
      imgURL: assets.work_dashboard_management,
      title: "Dashboard Management",
      description: "We help you execute your plan and deliver results.",
    },
    {
      imgURL: assets.work_fitness_app,
      title: "Fitness app promotion",
      description:
        "We help you create a marketing strategy that drives results.",
    },
  ];

  return (
    <div id="our-work" className="my-20">
      <Card
        title="Our latest work"
        description="From strategy to execution, we craft digital solutions that move your business forward."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto mb-10">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            imgURL={project.imgURL}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
