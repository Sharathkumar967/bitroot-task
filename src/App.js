import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";

function App() {
  const [data, setData] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);

  const handleModal = () => {
    setModalFlag(!modalFlag);   
  };

  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
      )
      .then((response) => {
        setData([...response.data]);
      });
  }, []);

  return (
    <div className={modalFlag ? "card-container modal" : " card-container"}>
      {data?.map((item) => {
        return (
          <ImageCard
            handleModal={handleModal}
            modalFlag={modalFlag}
            item={item}
          />
          
        );
      })}
    </div>
  );
}

export default App;


