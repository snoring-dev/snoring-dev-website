/* eslint-disable @next/next/no-img-element */
import React from "react";

function ProjectCard() {
  return (
    <div className="col-span-1 lg:col-span-4 w-full flex items-center justify-center px-6 lg:px-0">
      <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://res.cloudinary.com/mjemmoudi/image/upload/v1689092884/hostify-app/jww52goxjooppyhz6bdl.jpg"
            alt="Project name"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Project name!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            adipisci vitae placeat error, dolorum numquam sequi, aut minima
            quisquam, magnam dolores sapiente nulla. Assumenda, qui alias? Hic
            consectetur adipisci distinctio
          </p>
          <div className="card-actions justify-end mt-6">
            <button className="btn">Discover</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
