import React, { useEffect, useState } from "react";
import "../Css/Detec.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Detec = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("__________");
  const [predictionDesc, setPredictionDesc] = useState("____________");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    const f1 = e.target.files[0];
    if (f1) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      fileReader.readAsDataURL(f1);
    }
  };

  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        formData
      );
      if (response.data) {
        console.log(response.data);
        setPrediction(response.data["prediction"]);
        setPredictionDesc(response.data["prediction_desc"]);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Error predicting result. Please try again.");
    }
  };

  const handleClearImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="containerScans">
      <div className="leftscan">
        <p className="scan-p">
        Click the below button to upload your image 
        </p>
        <div className="image-container">
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" />
          ) : (
            <p className="scan-p">Please upload the image</p>
          )}
        </div>
        <div className="scan-bt">
          <input
            type="file"
            onChange={handleChange}
            className="input-scan"
            accept="image/*"
          />
          {selectedImage && (
            <button onClick={handleClearImage} className="scan-clear">
              Clear The Image
            </button>
          )}
        </div>
        <button onClick={uploadImage} className="scbt">
         Obtain Result
        </button>
      </div>
      <div className="rightscan">
        <p className="scan-head">Detection Outcome</p>
        <h2 className="prediction">Prediction: {prediction}</h2>
        <p className="rem">Description:{predictionDesc}</p>
        <Link to='/Prevention'><button className="scbt1">Prevention</button></Link>
      </div>
    </div>
  );
};

export default Detec;