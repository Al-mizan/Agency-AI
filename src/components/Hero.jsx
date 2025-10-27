import React from "react";
import TrustedBy from "./TrustedBy";
import assets from "../assets/assets";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen mt-10 flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-300 overflow-hidden"
    >
      <div className="max-w-9xl mx-auto">
        {/* Decorative blurred blobs */}
        <div className="absolute top-5 left-110 w-72 h-72 bg-secondary opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-14">
          {/* Text Content */}
          <div className="text-center flex flex-col gap-5 lg:text-left max-w-xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Turning{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                imagination
              </span>{" "}
              into <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                digital
              </span>{" "}
              impact ✨
            </h1>
            <p className="mt-6 text-lg text-base-content/70 leading-relaxed">
              We craft experiences that connect brands with people —
              transforming big ideas into unforgettable digital journeys.
            </p>
            <TrustedBy />
          </div>

          {/* Hero Image */}
          <div className="relative group">
            <img
              src={assets.hero_img}
              alt="Hero Visual"
              className="max-w-sm lg:max-w-md rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
