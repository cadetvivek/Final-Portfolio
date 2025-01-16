import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.jpg";
import javascript from "../assets/experience/javascript.png";
import bootstrap from "../assets/experience/bootstrap.png"
import react from "../assets/experience/reactjs.png"
import tailwind from "../assets/experience/tailwind.png";
import firebase from "../assets/experience/firebase.png";
import postman from "../assets/experience/postman.png";
import typescript from "../assets/experience/typescript.png";
import node from "../assets/experience/node.png";
import express from "../assets/experience/express.png";
import mongodb from "../assets/experience/mongodb.jpg";
import mysql from "../assets/experience/mysql.png";
import github from "../assets/experience/github.png";
import aws from "../assets/experience/aws.png";



function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 2,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 3,
      logo: react,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: bootstrap,
      name: "Bootstrap",
    },
    {
      id: 5,
      logo: tailwind,
      name: "Tailwind",
    },
    {
      id: 6,
      logo: firebase,
      name: "Firebase",
    },
    {
      id: 7,
      logo: postman,
      name: "Postman",
    },
    {
      id: 8,
      logo: typescript,
      name: "TypeScprit",
    },
    {
      id: 9,
      logo: node,
      name: "NodeJS",
    },
    {
      id: 10,
      logo: express,
      name: "ExpressJs",
    },
    {
      id: 11,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 12,
      logo: mysql,
      name: "MySQL",
    },
    {
      id: 14,
      logo: aws,
      name: "AWS",
    },
    {
      id: 15,
      logo: github,
      name: "Github",
    },
   
   
    
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-black">Technologies</h1>
        <p className="text-black">
          These are technologies I am using below.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[100px] rounded-full" alt="" />
              <div>
                <div className="text-black">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
  
}  

export default Experiance