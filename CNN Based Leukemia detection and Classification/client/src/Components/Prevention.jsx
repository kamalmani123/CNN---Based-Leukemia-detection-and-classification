import React from 'react'
import "../Css/Pre.css";
import Preventionimage from"../assets/pre.jpg";

const Pre = () => {
  return (
    <div className="container">
    <div className="left">
        <img src={Preventionimage} alt="Prevention" className="prevention-image" />
    </div>
    <div className="right">
        <h1>Preventing Leukemia: Tips for Reducing Risk</h1>
        <div className="content">
            <p>While the exact cause of leukemia is often unknown, there are steps you can take to reduce your risk of developing this type of cancer. By adopting healthy lifestyle habits and minimizing exposure to certain risk factors, you can help protect yourself and lower your chances of developing leukemia.</p>
            <h2>Here are some tips for leukemia prevention:</h2>
            <ul className="prevention-list">
                <li>Avoid exposure to carcinogens such as benzene, pesticides, and industrial solvents.</li>
                <li>Quit smoking and avoid secondhand smoke.</li>
                <li>Maintain a healthy weight through a balanced diet and regular exercise.</li>
                <li>Limit exposure to ionizing radiation, such as X-rays and CT scans.</li>
                <li>Protect your skin from harmful UV rays by wearing sunscreen and avoiding indoor tanning beds.</li>
                <li>Get regular medical check-ups and discuss your risk factors with your healthcare provider.</li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Pre;