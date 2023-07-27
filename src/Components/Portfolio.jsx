/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "C programs for beginners",
    description:
      "The C Programs for Beginners Repository is a comprehensive collection of simple and easy-to-understand C programs, specifically designed to help beginners learn and master the fundamentals of programming in C.",
    url: "https://github.com/darshan45672/c-progrms",
  },
  {
    title: "Blood Bank and Donor Management System",
    description:
      "An Online System built for the Blood Donation Organisation to manage the Blood Bank System in which Blood Donors can willingly give their name and the Person in need of blood can find whether the Blood is available or not.",
    url: "https://github.com/darshan45672/Blood-Bank-and-Donor-Management-system",
  },
  {
    title: "Car Race",
    description:
      "This Git repository contains a car race simulation project developed for enthusiasts and developers interested in simulating car races in a virtual environment. The project leverages the power of programming and provides a platform for creating and customizing car race scenarios.",
    url: "https://github.com/darshan45672/Car-Race",
  },
  {
    title: "My Resume Site",
    description:
      "Welcome to my resume site! I am a motivated and accomplished professional eager to showcase my skills and experiences. With a passion for Web and software development, I have 2 years of hands-on experience in these fields.",
    url: "https://github.com/darshan45672/main-page",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", paddingLeft: "5rem", }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
