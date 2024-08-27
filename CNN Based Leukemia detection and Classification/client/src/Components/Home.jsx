import React from 'react'
import '../Css/Home.css'
import { Link } from "react-router-dom";
import  leukemiaImage from '../assets/leu.jpg';

const Home = () => {
  return (
    <>
   <div className="container">
   <div className="left">
                    <img src={leukemiaImage} alt="Leukemia" className="leukemia-image" />
                </div>
                <div className="right">
                <h1>Welcome to Leukemia Detection System</h1>
                <div className="content">
                    <h2>Understanding Leukemia</h2>
                    <p>Leukemia is a type of cancer that affects the blood and bone marrow. It occurs when there is an abnormal increase in the number of white blood cells in the body, disrupting the normal production of blood cells.</p>
                    <p>Leukemia can be classified into four main types: acute lymphoblastic leukemia (ALL), chronic lymphocytic leukemia (CLL), acute myeloid leukemia (AML), and chronic myeloid leukemia (CML). Each type has its own characteristics and treatment options.</p>
                    <h2>Key Points about Leukemia:</h2>
                    <ul className="custom-list">
                        <li>Leukemia affects the blood and bone marrow.</li>
                        <li>It is characterized by an abnormal increase in white blood cells.</li>
                        <li>There are four main types of leukemia: ALL, CLL, AML, and CML.</li>
                        <li>Symptoms may include fatigue, fever, easy bruising, and frequent infections.</li>
                        <li>Treatment options include chemotherapy, radiation therapy, and targeted therapy.</li>
                    </ul>
                </div>
            </div>
            </div>
     
    </>
  );
};

export default Home