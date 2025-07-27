import React from "react";

export default function About({ mode }) {
  const themeStyles = {
    light: {
      backgroundColor: "white",
      color: "black",
    },
    dark: {
      backgroundColor: "#34383b",
      color: "white",
    },
    success: {
      backgroundColor: "#d1e7dd",
      color: "#0f5132",
    },
    danger: {
      backgroundColor: "#f8d7da",
      color: "#842029",
    },
    warning: {
      backgroundColor: "#fff3cd",
      color: "#664d03",
    },
  };

  const appliedStyle = themeStyles[mode] || themeStyles.light;

  return (
    <div className="container" style={appliedStyle}>
      <section id="about-us" className="min-h-screen px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
            About Us
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Welcome to <strong>YourApp</strong> — a platform built for creators,
            developers, and thinkers.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Our journey started with a simple goal: to create a space where
            people could connect over ideas and build meaningful projects together.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Whether you're just starting out or looking to level up, 
            <strong> YourApp </strong> is here to guide you.
          </p>

          <div className="mt-12 text-center text-sm opacity-70">
            🚀 Inspiring growth, one step at a time.
          </div>
        </div>
      </section>
    </div>
  );
}
