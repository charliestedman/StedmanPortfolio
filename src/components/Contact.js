import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            <div>
              <a href="https://www.github.com/charliestedman">
                Github: github.com/charliestedman
              </a>
            </div>
          </h2>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            Email: charliestedman@yahoo.com
          </h2>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            <a href="https://docs.google.com/document/d/1TNTqBjIW5K7HAxhq8ZmitiyoOfjiKqc55lrUHJ4oEUI/edit?usp=sharing">
              Resume
            </a>
          </h2>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            Phone: 817.253.7561
          </h2>
        </div>
      </div>
    </section>
  );
}
