import React from "react";
import Pdf from "../documents/Charlie Stedman Resume.pdf";

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
            Email: contact@charliestedman.dev
          </h2>
          <h2 className="title-font font-semibold text-white tracking-widest text-xs">
            <a href={Pdf} target="_blank" rel="noreferrer">
              Resume - click to download a pdf version
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
