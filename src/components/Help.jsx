import React from "react";
import Card from "./Card";
import Business from "./Business";
import assets from "../assets/assets";

export default function Help() {
  const parts = [
    {
      imgURL: assets.ads_icon,
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage and convert.",
    },
    {
      imgURL: assets.content_icon,
      title: "Content marketing",
      description: "We help you execute your plan and deliver results.",
    },
    {
      imgURL: assets.marketing_icon,
      title: "Content writing",
      description:
        "We help you create a marketing strategy that drives results.",
    },
    {
      imgURL: assets.social_icon,
      title: "Social media",
      description:
        "We help you build a strong social media presence and engage with your audience.",
    },
  ];

  return (
    <div id="services" className="my-30">
      <Card
        title="How can we help?"
        description="From strategy to execution, we craft digital solutions that move your business forward."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
        {parts.map((part, index) => (
          <Business
            key={index}
            imageUrl={part.imgURL}
            title={part.title}
            description={part.description}
          />
        ))}
      </div>
    </div>
  );
}
