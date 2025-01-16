import React from "react";
import Generics from "../assets/portfolio/Generics.png";
import Reactmeal from "../assets/portfolio/Reactmeal.png";
import expenseTracker from "../assets/portfolio/expenseTracker.png";
import gymWebsite from "../assets/portfolio/gymWebsite.png";
import Villas from "../assets/portfolio/Villas.png";
import OurExpense from "../assets/portfolio/ourExpense.png";

const PortFolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Generics,
      demoLink: "https://delightful-cassata-3db12a.netlify.app/",
      codeLink: "https://github.com/cadetvivek/Building-Ecommerce--all-project",
    },
    {
      id: 2,
      src: Reactmeal,
      demoLink: "https://kaleidoscopic-speculoos-8feded.netlify.app/",
      codeLink: "https://github.com/cadetvivek/Restaurant-app",
    },
    {
      id: 3,
      src: expenseTracker,
      demoLink: "https://stirring-mochi-97d67c.netlify.app/login",
      codeLink: "https://github.com/cadetvivek/Expense-Tracker-premium1",
    },
    {
      id: 4,
      src: gymWebsite,
      demoLink: "https://funny-stardust-a6d056.netlify.app/",
      codeLink: "https://github.com/cadetvivek/GYM-WEBSITE/tree/master",
    },
    {
      id: 6,
      src: Villas,
      demoLink: "https://grand-cascaron-ba93e1.netlify.app/",
      codeLink: "https://github.com/cadetvivek/Luxury-Villas",
    },
    {
      id: 7,
      src: OurExpense,
      demoLink: "https://github.com/cadetvivek/OurExpense",
      codeLink: "https://github.com/cadetvivek/OurExpense",
    },
  ];

  return (
    <div name="portfolio" className="w-full text-white py-10">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl text-black font-bold inline border-b-4 border-black">
            Portfolio
          </h1>
          <p className="text-black py-6 text-lg">
            Explore my ideas and thoughts here. Working parts are below.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div
              key={id}
              className="bg-gray-900 shadow-lg shadow-gray-700 rounded-lg overflow-hidden transform hover:scale-105 duration-300"
            >
              <img
                src={src}
                alt=""
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-center mb-2">
                  Project {id}
                </h2>
                <p className="text-gray-400 text-sm text-center mb-4">
                  A brief description of the project can go here.
                </p>
                <div className="flex justify-between space-x-2">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-500 hover:bg-blue-700 text-white text-center py-2 rounded-lg"
                  >
                    Demo
                  </a>
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-700 text-white text-center py-2 rounded-lg"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
