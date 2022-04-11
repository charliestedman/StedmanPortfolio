import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            Github:
            <a href="www.github.com/charliestedman">
              github.com/charliestedman
            </a>
          </h2>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            Email:
            <a href="charliestedman@yahoo.com">charliestedman@yahoo.com</a>
          </h2>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            Resume:
          </h2>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            Phone: 817.253.7561
          </h2>
        </div>
      </div>
    </section>
  );
}
